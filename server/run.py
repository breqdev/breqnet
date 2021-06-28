import app from app
import app from auth as auth

app.register_blueprint(auth)

app.run()