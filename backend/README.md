# Backend

This application provides API for retrieving and creating notes. The notes are stored in PostgreSQL database. 

## API

API has the following routes:

Route | Method | Parameters | Description 
------|--------|------------|------------
/notes | GET | - | Returns all notes records stored in database in the format below. 
/notes | POST | text* | Creates a new record in database. 

## GET
### /notes response example
```javascript
[
    {
        "id": 18,
        "text": "Test1"
    },
    {
        "id": 19,
        "text": "qweqweqweqwe"
    }
]
```

## Local development

### Python
Being a Python Web framework, Django requires Python. Python 3.5 or higher is needed to run Django 3.2. Get the latest version of Python at https://www.python.org/downloads/ or with your operating system’s package manager. You can verify that Python is installed by typing `python` from your shell.

### Database
Python includes a lightweight database called SQLite so you won’t need to set up a database for local development.

### Project setup

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

Run Django migrations to setup your models. 
```
python manage.py migrate
```

You can create a superuser.
```
python manage.py createsuperuser 
```

Run the local web server.
``` 
python manage.py runserver
```

In your browser, go to http://localhost:8000. or /admin to access the admin page with your superuser credentials. 
