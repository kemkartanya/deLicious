from flask import Flask, request, jsonify
import os
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import random
from utils import sms_twilio
from dotenv import load_dotenv
from flask_cors import CORS
import openai
from sqlalchemy.dialects.postgresql import ARRAY

load_dotenv()

db = SQLAlchemy()

app = Flask(__name__)
CORS(app)

# Configure the PostgreSQL database with SQLAlchemy
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DB_URI")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

openai.api_key = os.getenv('API_KEY')

def image_gen(dishname):

    response = openai.Image.create(
        prompt=dishname,
        n=1,  # Number of images to generate
        size="1024x1024"
    )

    image_url = response['data'][0]['url']
    return image_url

# Create tables
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mobile = db.Column(db.String(15), unique=True, nullable=False)
    latest_otp = db.Column(db.String(4), nullable=False)

    favorite_meats = db.Column(ARRAY(db.String(50)), default=[])
    dietary_restrictions = db.Column(ARRAY(db.String(50)), default=[])
    spice_tolerance = db.Column(db.String(20), nullable=True)
    cooking_skill_level = db.Column(db.String(20), nullable=True)
    cuisine_types = db.Column(ARRAY(db.String(50)), default=[])

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
            "favorite_meats": self.favorite_meats,
            "dietary_restrictions": self.dietary_restrictions,
            "spice_tolerance": self.spice_tolerance,
            "cooking_skill_level": self.cooking_skill_level,
            "cuisine_types": self.cuisine_types,
        }


# Create the database and table
with app.app_context():
    db.create_all()

conversation_history=[]
def ask_question(question):
    global conversation_history
    product_category='Chicken' if 'chicken' in question.lower() else 'Fish Boneless' if 'fish' in question.lower() else 'Mutton' if 'mutton' in question.lower() else 'Liver' if 'liver' in question.lower() else 'Prawns & Crabs' if 'prawn' in question.lower() else 'Prawns & Crabs' if 'crab' in question.lower() else 'Eggs' if 'egg' in question.lower() else 'Prawns & Crabs' if 'crab' in question.lower() else None
    if product_category!=None:
        category_prompt ='Out of these categories: Chicken, Fish Boneless, Mutton, Liver, Prawns & Crabs, Eggs, Crispy snacks, Kebabs and biryani, Plant Based Meet, Meet Masala which is the closest to {question}'
        response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content":conversation_history}]
    )
    # Append the user's new message to the conversation history
    user_preference={'Chicken':['chicken wings', 'chicken breast'],'meat':['meat '] }
    conversation_history.append({"role": "user", "content": question + ' provide recipe the dietery component like high in protein, carbs etc. These are my preferences '+','.join(user_preference[product_category])})

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

    dishname = 'Give me the dish_name from this recipe {response}'
    dish_image = image_gen(dishname)

    return {'resp': response, 'dish_image': dish_image}


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


@app.route("/api/v1/user-preference", methods=["POST"])
def save_user_preferences():
    try:
        userId = request.json.get("userId")

        favorite_meats = request.json.get("favorite_meats")
        dietary_restrictions = request.json.get("dietary_restrictions")
        spice_tolerance = request.json.get("spice_tolerance")
        cooking_skill_level = request.json.get("cooking_skill_level")
        cuisine_types = request.json.get("cuisine_types")

        user = User.query.filter_by(id=userId).first()

        if not user:
            return jsonify({"message": "user not found"}), 404

        user.favorite_meats = favorite_meats
        user.dietary_restrictions = dietary_restrictions
        user.spice_tolerance = spice_tolerance
        user.cooking_skill_level = cooking_skill_level
        user.cuisine_types = cuisine_types

        db.session.commit()

        return (
            jsonify(
                {
                    "message": "User preference saved successfully",
                    "status": "success",
                    "user": user.to_dict(),
                }
            ),
            200,
        )

    except Exception as e:
        print(e)
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == "__main__":
    app.run(debug=True, port=8000)
