# CS50 Week 9 – Flask & Web Apps

## Overview

Week 9 introduces **Flask**, a lightweight Python web framework used to build web applications. This week builds on the front-end concepts from Week 8 and incorporates back-end development, routing, templates, and user interaction via forms.

## Objectives

* Understand web application architecture (client-server)
* Learn how to use Flask for routing and rendering templates
* Handle form data via POST and GET methods
* Use Jinja2 templating to generate dynamic HTML
* Build a basic full-stack web app

## Technologies Introduced

* Flask (Python web framework)
* Jinja2 (HTML templating engine)
* HTTP methods: GET and POST
* Sessions and state management

## Key Concepts Covered

* Flask routes and decorators (`@app.route`)
* Rendering templates with `render_template`
* Handling form input with `request.form`
* Using sessions to store data between requests
* Creating dynamic content with Jinja2

## Problem Set: Book Reviews / Web Apps

You may be asked to implement web-based applications like:

* A voting app
* A note-taking or task manager app
* A book review site

### Typical Project Structure

```
project/
├── app.py
├── templates/
│   ├── index.html
│   ├── layout.html
│   └── result.html
├── static/
│   └── styles.css
└── requirements.txt
```

## Usage

Install dependencies (if needed):

```bash
pip install flask
```

Run the Flask app:

```bash
flask run
```

Visit `http://127.0.0.1:5000/` in your browser.

## Tips

* Use `layout.html` as a base template to avoid repeating code
* Sanitize and validate user input to avoid bugs
* Use session carefully to store minimal necessary data

## Resources

* Flask Docs: [https://flask.palletsprojects.com/](https://flask.palletsprojects.com/)
* Jinja Docs: [https://jinja.palletsprojects.com/](https://jinja.palletsprojects.com/)
* CS50 Week 9 lectures
* Miguel Grinberg’s Flask tutorials: [https://blog.miguelgrinberg.com/](https://blog.miguelgrinberg.com/)

## Author

Gabriel Rassi – CS50 Week 9 Student
