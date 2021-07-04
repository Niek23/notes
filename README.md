# Notes
This application allows to store some notes on the board, as well as adding new nodes. Notes app provides simple and user-friendly interface. As soon as a new note is created, the email is sent to the address defined in the confing. 

## Components

1. [Frontend](/frontend) part is a JavaScript application, provides UI. Created with [VueJS](https://vuejs.org)
2. [Backend](/backend) is written in Python with [DRF](https://www.django-rest-framework.org) and provides an API to add and get notes from the database.
3. [Notifications](/notifications) is a [Flask](https://flask.palletsprojects.com/en/1.1.x/) application which provides notifications functionality. The service creates a task which is futher processed by [Dramatiq](https://dramatiq.io) proccessing library. The email is sent to the address provided in the .env file. [RabbitMQ](https://www.rabbitmq.com) is used as a message broker.

Take a look at the current architeutre of the application.

![Application Components Diagram](https://user-images.githubusercontent.com/24358879/124380203-bf374e80-dcbb-11eb-905a-671dd30c699d.png)


## Deployement

The application can be reached at https://hellosend.cloud

The DRF API is served under https://api.hellosend.cloud

Notifications app is under https://notifications.hellosend.cloud
