# CS50 Week 8 – Trivia (trivia/)

## Overview

This project is a web-based trivia quiz implemented using **HTML**, **CSS**, and **JavaScript**. The goal is to build a single-page application that displays multiple-choice and free-response questions and responds to user interactions dynamically.

## Objectives

* Create structured and semantic HTML content
* Style a user interface with CSS
* Implement interactive behavior using JavaScript
* Learn DOM manipulation and event handling

## Files

### `index.html`

Defines the structure of the trivia interface, including sections for multiple-choice and free-response questions.

### `styles.css`

Contains styles for layout, typography, button states (correct/incorrect), and responsive behavior.

### `script.js`

Handles all interactivity:

* Responds to button clicks
* Validates user input
* Provides immediate feedback with visual cues

## Features

* One multiple-choice question with clickable answer buttons
* One free-response question with a text input and submit button
* Immediate feedback upon user interaction:

  * Green highlight for correct answers
  * Red highlight for incorrect answers
  * Message displayed to confirm correctness

## Usage

Open `index.html` in any modern browser:

```bash
open index.html
```

Click on one of the multiple-choice options or answer the free-response question and hit "Check Answer" to receive feedback.

## Tips

* Use `document.querySelector()` and `addEventListener()` for interactivity
* Keep your JS modular by using functions
* Consider accessibility (e.g., keyboard navigation and screen reader support)

## Example Code Snippet

```javascript
button.addEventListener("click", function () {
  if (button.textContent === "Correct Answer") {
    button.classList.add("correct");
    message.textContent = "Correct!";
  } else {
    button.classList.add("incorrect");
    message.textContent = "Incorrect";
  }
});
```

## Resources

* MDN: [https://developer.mozilla.org/](https://developer.mozilla.org/)
* JavaScript DOM Docs: [https://developer.mozilla.org/en-US/docs/Web/API/Document\_Object\_Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* CS50 Week 8 lecture materials

## Author

Gabriel Rassi – CS50 Week 8 Student
