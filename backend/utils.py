from twilio.rest import Client
import os


def sms_twilio(mess, mobile):
    account_sid = os.getenv("TWILIO_ACCOUNT_SID")
    auth_token = os.getenv("TWILIO_AUTH_TOKEN")
    client = Client(account_sid, auth_token)

    message = client.messages.create(
        body=mess,
        from_=os.getenv("TWILIO_PHONE_NUMBER"),
        to="+91" + mobile,
    )

    return message.sid
