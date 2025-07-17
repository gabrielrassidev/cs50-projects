# CS50 Week 9 – Birthdays 

## Overview

The **Birthdays** project is a Flask-based web application for storing and displaying a list of people's birthdays. Users can add new entries through a form, and the app stores the data in an SQLite database and displays it dynamically.

## Objectives

* Create a web form using Flask and HTML
* Handle GET and POST requests
* Connect Flask to an SQLite database using SQL
* Render dynamic templates with Jinja2

## Files

### `app.py`

The main Flask application:

* Displays all birthday entries on a GET request
* Adds new entries on a POST request
* Uses SQLite and the `cs50` Python package for database interaction

### `birthdays.db`

An SQLite database that stores the name, month, and day of each person.

### `templates/`

* `index.html`: Contains the HTML layout, birthday table, and submission form

### `static/`

* `styles.css`: (Optional) Custom styling for the web page

## Database Schema

```sql
CREATE TABLE birthdays (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    month INTEGER NOT NULL,
    day INTEGER NOT NULL
);
```

## Usage

Install dependencies:

```bash
pip install flask cs50
```

Run the app:

```bash
flask run
```

Access the app at:

```
http://127.0.0.1:5000/
```

## Features

* Form to add new birthday entries
* Displays all entries in a table
* Simple and clean layout

## Optional Enhancements

* Add validation for dates
* Allow deleting or editing entries
* Use client-side JavaScript for inline editing or AJAX requests

## Resources

* Flask Docs: [https://flask.palletsprojects.com/](https://flask.palletsprojects.com/)
* CS50 `cs50` Python package: [https://pypi.org/project/cs50/](https://pypi.org/project/cs50/)
* SQLite Docs: [https://sqlite.org/index.html](https://sqlite.org/index.html)

## Author

Gabriel Rassi – CS50 Week 9 Student
