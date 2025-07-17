# CS50 Week 6 – Python

## Overview

This week introduces **Python**, a high-level, interpreted language known for its readability and simplicity. The primary focus is on rewriting previous logic from C into Python and understanding Pythonic constructs, data types, and best practices.

## Objectives

* Understand Python syntax and semantics
* Translate logic from C into Python
* Learn Python-specific data structures like lists, dictionaries, and sets
* Practice file I/O and exception handling
* Embrace Pythonic idioms for cleaner code

## Problem Set: Python

You are tasked with implementing programs in Python that reinforce logic and problem-solving skills. Some challenges mirror earlier problem sets but use Python instead of C.

## Key Concepts Covered

* Variables and data types
* Loops and conditionals
* Functions and scope
* File handling with `open()` and `with` blocks
* Exception handling using `try` and `except`
* Lists, dictionaries, sets, tuples
* Command-line arguments with `sys.argv`

## Example PSETs and Files

### `hello.py`

Simple program that prints "hello, world".

### `coke.py`

Simulates a vending machine where a user deposits coins until the correct amount is reached.

### `taqueria.py`

Implements a simple ordering system using dictionaries to track menu items and prices.

### `shirt.py`

Downloads and overlays images using the `Pillow` library.

### `scourgify.py`

Reads a CSV, processes and writes cleaned data to another CSV using the `csv` module.

### `lines.py`

Counts lines in a Python file, ignoring comments and blank lines.

## Usage

Most Python scripts are run with:

```bash
python filename.py [arguments]
```

For example:

```bash
python coke.py
```

## Testing and Style

* Follow **PEP8** style guidelines
* Use `pytest` or simple assertions for testing
* Use `pylint` or `flake8` to lint code

## Notes

* Python does garbage collection automatically
* List comprehensions and dictionary operations are often more efficient than loops
* Read the documentation: `docs.python.org`

## Resources

* CS50 Week 6 lectures and shorts
* Python Official Docs: [https://docs.python.org/3/](https://docs.python.org/3/)
* Real Python tutorials
* `man python3`, `help()` in Python shell

## Author

\[Your Name] – CS50 Week 6 Student
