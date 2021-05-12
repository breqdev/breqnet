import os

from flask import Flask, request, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, LoginManager, login_user, current_user, logout_user
from werkzeug.security import check_password_hash, generate_password_hash


app = Flask(__name__)

app.config["SECRET_KEY"] = "not very secret"
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///breqnet"

db = SQLAlchemy(app)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    email = db.Column(db.String(), unique=True)
    password = db.Column(db.String())


login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@app.route("/")
def hello():
    if current_user.is_authenticated:
        return f"Hello, {current_user.name} of {current_user.email}!"
    else:
        return "Hello, anon!"


@app.route("/signup", methods=["POST"])
def signup():
    name = request.form.get("name")
    email = request.form.get("email")
    password = request.form.get("password")
    password_hash = generate_password_hash(password)

    user = User.query.filter_by(email=email).first()
    if user:
        return "Email Already Exists", 400

    new_user = User(email=email, name=name, password=generate_password_hash(password, method="sha256"))

    db.session.add(new_user)
    db.session.commit()

    return redirect("/")

@app.route("/login", methods=["POST"])
def login():
    email = request.form.get("email")
    password = request.form.get("password")

    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password, password):
        return "Invalid Login", 400

    login_user(user, remember=True)

    return redirect("/")


@app.route("/logout", methods=["POST"])
def logout():
    logout_user()

    return redirect("/")


if __name__ == "__main__":
    app.run()