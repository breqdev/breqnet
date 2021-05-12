import datetime

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
import jwt
from werkzeug.security import check_password_hash, generate_password_hash


app = Flask(__name__)
CORS(app)

app.config["SECRET_KEY"] = "not very secret"
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///breqnet"

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    email = db.Column(db.String(), unique=True)
    password = db.Column(db.String())

    @staticmethod
    def encode_auth_token(user_id):
        payload = {
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1),
            "iat": datetime.datetime.utcnow(),
            "sub": user_id
        }
        return jwt.encode(
            payload,
            app.config.get("SECRET_KEY"),
            algorithm="HS256"
        )

    @staticmethod
    def decode_auth_token(auth_token):
        payload = jwt.decode(auth_token, app.config.get("SECRET_KEY"), algorithms="HS256")
        return payload["sub"]


@app.route("/")
@cross_origin()
def hello():
    token = request.headers.get("Authorization").split(" ")[1]

    user_id = User.decode_auth_token(token)
    user = User.query.filter_by(id=user_id).first()

    return jsonify({
        "status": "success",
        "data": {
            "user_id": user.id,
            "email": user.email,
            "name": user.name
        }
    })


@app.route("/signup", methods=["POST"])
@cross_origin()
def signup():
    name = request.form.get("name")
    email = request.form.get("email")
    password = request.form.get("password")
    password_hash = generate_password_hash(password, method="sha256")

    user = User.query.filter_by(email=email).first()
    if user:
        return "Email Already Exists", 400

    new_user = User(email=email, name=name, password=password_hash)

    db.session.add(new_user)
    db.session.commit()

    auth_token = user.encode_auth_token(user.id)

    return jsonify({
        "status": "success",
        "message": "Successfully registered",
        "auth_token": auth_token.decode()
    })


@app.route("/login", methods=["POST"])
@cross_origin()
def login():
    email = request.form.get("email")
    password = request.form.get("password")

    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password, password):
        return "Invalid Login", 400

    auth_token = user.encode_auth_token(user.id)

    return jsonify({
        "status": "success",
        "message": "Successfully logged in.",
        "auth_token": auth_token
    })


if __name__ == "__main__":
    app.run()