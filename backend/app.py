from flask import Flask
from flask import request
from twilio.rest import Client
import os

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/api/v1/recipes")
def get_recipes():
    values = request.args.get("values")

    return {"values": values}


@app.route("/api/v1/send-otp", methods=["POST"])
def send_otp():
    data = request.json
    mobile = data["mobile"]

    account_sid = os.getenv("TWILIO_ACCOUNT_SID")
    auth_token = os.getenv("TWILIO_AUTH_TOKEN")
    client = Client(account_sid, auth_token)
    message = client.messages.create(to=mobile)
    print(message.sid)

    return {"message": "OTP sent successfully", "status": "success", "otp": message.sid}


@app.route("/api/v1/verify-otp", methods=["POST"])
def verify_otp():
    data = request.json

    return data


if __name__ == "__main__":
    app.run(port=8000)
