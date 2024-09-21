from flask import Flask, request, jsonify
import os
from flask_sqlalchemy import SQLAlchemy
import random
from utils import sms_twilio
from dotenv import load_dotenv
from flask_cors import CORS
import openai

load_dotenv()

db = SQLAlchemy()

app = Flask(__name__)
CORS(app)

# Configure the PostgreSQL database with SQLAlchemy
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DB_URI")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

openai.api_key = os.getenv('API_KEY')

# Create tables
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mobile = db.Column(db.String(15), unique=True, nullable=False)
    latest_otp = db.Column(db.String(4), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(
        db.DateTime,
        default=db.func.current_timestamp(),
        onupdate=db.func.current_timestamp(),
    )

    def to_dict(self):
        return {
            "id": self.id,
            "mobile": self.mobile,
        }


# Create the database and table
with app.app_context():
    db.create_all()

conversation_history=[]
def ask_question(question):
    global conversation_history

    # Append the user's new message to the conversation history
    conversation_history.append({"role": "user", "content": question})

    # Send the conversation history to the API
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=conversation_history
    )

    # Get the assistant's response
    answer = response['choices'][0]['message']['content']

    # Add the assistant's response to the conversation history
    conversation_history.append({"role": "assistant", "content": answer})

    return answer

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/api/v1/recipes")
def get_recipes():
    values = request.args.get("values")
    response = ask_question(values)
    return response


@app.route("/api/v1/send-otp", methods=["POST"])
def send_otp():
    try:
        mobile = request.json.get("mobile")
        otp = random.randint(1000, 9999)  # Generate a random 4 digit OTP
        user = User.query.filter_by(mobile=mobile).first()

        if user:
            user.latest_otp = otp
        else:
            new_user = User(mobile=mobile, latest_otp=otp)
            db.session.add(new_user)
        db.session.commit()

        mess_sid = sms_twilio("Hello from deLicious, your OTP is: " + str(otp), mobile)

        return (
            jsonify(
                {
                    "message": "OTP sent successfully",
                    "status": "success",
                    "otp": mess_sid,
                }
            ),
            200,
        )
    except Exception as e:
        print(e)
        return jsonify({"error": "Internal Server Error"}), 500


@app.route("/api/v1/verify-otp", methods=["POST"])
def verify_otp():
    try:
        mobile = request.json.get("mobile")
        otp = request.json.get("otp")
        user = User.query.filter_by(mobile=mobile).first()
        if user and user.latest_otp == otp:
            user.latest_otp = (
                "999"  # Set the OTP to 999 to indicate that the OTP has been verified
            )
            db.session.commit()
            return (
                jsonify(
                    {
                        "message": "OTP verified successfully",
                        "status": "success",
                        "user": user.to_dict(),
                    }
                ),
                200,
            )
        else:
            return jsonify({"message": "Invalid OTP"}), 400
    except Exception as e:
        print(e)
        return jsonify({"error": "Internal Server Error"}), 500



if __name__ == "__main__":
    app.run(debug=True, port=8000)
