import datetime

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

from models import make_models


app = Flask(__name__)
CORS(app)

app.config["SECRET_KEY"] = "not very secret"
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///breqnet"

db = SQLAlchemy(app)

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

