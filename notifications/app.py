from flask import Flask, request, make_response
from flask_cors import CORS
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


app = Flask(__name__)
cors = CORS(app)

@app.route('/create_notification/', methods=['GET', 'POST'])
def notification():

    # Get the new note message from request
    data = request.get_json()
    note = data.get('message') if data else 'Empty note'
    
    # Create a mail
    message = Mail(
    from_email=os.environ.get('EMAIL_FROM'),
    to_emails=os.environ.get('EMAIL_TO'),
    subject='New note has been added to your board',
    html_content=f'<strong>{note}</strong>')

    # Try to send
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        sg.send(message)
    except Exception as e:
        return make_response({'error': str(e)}, 400)

    return make_response({'message': 'The message has been sent'}, 201)


if __name__ == '__main__':
    app.run()
