from flask import Blueprint, request
from flask_cors import cross_origin
from werkzeug.security import check_password_hash, generate_password_hash

from app import db
from models import User

app = Blueprint(__name__)


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


@app.route("/email/verify", methods=["POST"])
@cross_origin()
def verify_email():
    token = request.headers.get("Authorization").split(" ")[1]
    user_id = User.decode_auth_token(token)
    user = User.query.filter_by(user_id=user_id).first()

    # send email to user.email


@app.route("/email/change", methods=["PATCH"])
@cross_origin()
def change_email():
    token = request.headers.get("Authorization").split(" ")[1]
    user_id = User.decode_auth_token(token)
    user = User.query.filter_by(user_id=user_id).first()

