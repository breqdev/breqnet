@app.route("/profile/<int:user_id>", methods=["GET", "PATCH"])
def profile(user_id):
    token = request.headers.get("Authorization").split(" ")[1]
    current_user = User.decode_auth_token(token)

    if request.method == "PATCH":
        if current_user != user_id:
            return "Permission Required", 403

        User.query.filter_by(user_id=user_id).first().update(request.form)
    
    else:
        return User.query.filter_by(user_id=user_id).first()
