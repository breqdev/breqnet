from quart import Quart
from quart_cors import cors

app = Quart(__name__)
app = cors(app, allow_origin="*")

@app.route("/")
async def index():
    return "Hi!"

if __name__=="__main__":
    app.run()