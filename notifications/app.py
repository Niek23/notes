from flask import Flask, request, make_response
from flask_cors import CORS
from flask_dramatiq import Dramatiq
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


app = Flask(__name__)
cors = CORS(app)
dramatiq = Dramatiq(app)

@app.route('/create_notification/', methods=['POST'])
def task_handler():

    # Get the new note message from request
    data = request.get_json()
    note = data.get('message') if data else 'Empty note'
    notification.send(note)
    return make_response({'message': 'The email has been sent'}, 201)

@dramatiq.actor
def notification(note):
    
    # Create a mail
    message = Mail(
    from_email=os.environ.get('EMAIL_FROM'),
    to_emails=os.environ.get('EMAIL_TO'),
    subject='New note has been added to your board',
    html_content=f'<strong>{note}</strong>')

    # Send the message
    sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
    sg.send(message)
    

if __name__ == '__main__':
    app.run()
