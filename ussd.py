from flask import Flask, request
import africastalking
import os

app = Flask(__name__)
username = "sandbox"
api_key = "fe036f1c9b3b19dd63ff1750e6616ab6dafc1eeaa6747ffda019379d10e1bde4"
africastalking.initialize(username, api_key)

@app.route('/', methods=['POST', 'GET'])
def ussd_callback():
    global response
    session_id = request.values.get("sessionId", None)
    service_code = request.values.get("serviceCode", None)
    phone_number = request.values.get("phoneNumber", None)
    print(phone_number)
    text = request.values.get("text", "default")
    sms_phone_number = []
    sms_phone_number.append(phone_number)
    sms = africastalking.SMS

    if text == "":
        response = "CON Welcome to Movie Booking. Which movie are you booking?\n"
        response += "1. Retribution\n"
        response += "2. Barbie\n"
        response += "3. Breaking Bad"

    elif text == "1" or text == "2" or text == "3":
        response = f"CON For {text}, payment is 1 KES.\n"
        response += "1. Proceed to payment"
        response += "2. Cancel"

    elif text == "1*1" or text == "2*1" or text == "3*1":
        # Implement M-Pesa payment logic here
        try:
            # Initiate a mobile payment using Daraja API
            # Replace the following with your actual Daraja API details
            # Set up your callback URL for Daraja to notify you about the payment result
            callback_url = "http://yourdomain.com/payment_callback"
            
            # Your Daraja credentials
            consumer_key = 'YASojI3MuYrpD247XrOAGDpy8E3TCesH'
            consumer_secret = '3TMTryn96Klf19Y7'
            
            # Set up the payment details
            payment = africastalking.Payment
            payment_data = {
                'business_shortcode': 'your_business_short_code',
                'password': 'your_generated_password',
                'timestamp': 'your_timestamp',
                'transaction_type': 'CustomerPayBillOnline',
                'amount': 100,  # Replace with your actual amount
                'phone_number': phone_number,
                'callback_url': callback_url,
                'account_reference': 'your_account_reference',
                'transaction_description': f'Payment for {text} movie'
            }

            payment_response = payment.mobile_checkout(payment_data)

            # Assuming successful payment
            response = "END Payment successful! Thank you for booking with us."

        except Exception as e:
            print(f"Payment failed: {str(e)}")
            response = "END Payment failed. Please try again later."

    elif text == "1*2" or text == "2*2" or text == "3*2":
        response = "END Booking canceled. Thank you."
    
    else:
        response = "END Invalid input. Try again."

    return response


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=os.environ.get("PORT"))
