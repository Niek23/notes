# Notifications

## Development

The app requires RabbitMQ instance running on the same machine. 

Use `venv` to create a virtual copy of the entire Python installation.
```
python -m venv env
```

Activte the virtual env.
```
source env/bin/activate
```

Now you can install all packeges required for this project without affecting other projects or your global Python installation.
```
pip install -r requirements.txt
```

If you want to stop using the virtual environment and go back to your global Python, you can deactivate it.
```
deactivate
```

Fill in .env file in any text editor.
```
mv .env.example .env
```

Run worker command to consume messages and execute tasks in the background
```
flask worker --processes=1
```

Run flask application
```
flask run
```
## POST 
### /create_notification

Creates task to send email with a new note content. 
`message` parameter is mandatory. 
