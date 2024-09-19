from flask import Flask
from flask import request

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/api/v1/recipes")
def get_recipes():
    values = request.args.get("values")

    return {"values": values}


if __name__ == "__main__":
    app.run(port=8000)
