import jwt

import db from app

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    email = db.Column(db.String(), unique=True)
    password = db.Column(db.String())

    avatar = db.Column(Avatar)
    bio = db.Column(db.String())

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

class Avatar(db.Model):
    id = db.Column(db.Integer, primary_key=True)

class Group(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    bio = db.Column(db.String())
    avatar = db.Column(Avatar)

class Channel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    group = db.Column(Group)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    content = db.Column(db.String())
    attachments = db.Column(Attachment)
    author = db.Column(User)
    channel = db.Column(Channel)
    group = db.Column(Group)

class Attachment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String())
    content_type = db.Column(db.String())
    post = db.Column(Post)

