# CS50 Week 7 – SQL

## Overview

Week 7 of CS50 introduces **SQL (Structured Query Language)**, a language used to manage and manipulate relational databases. This week focuses on designing schemas, querying data, and understanding how relational databases store and interrelate data.

## Objectives

* Learn SQL syntax for creating, querying, and modifying databases
* Understand database normalization and relationships
* Practice CRUD operations: Create, Read, Update, Delete
* Apply SQL to analyze real-world datasets

## Problem Set: SQL

You’ll complete several exercises that require constructing SQL queries to analyze and manipulate data in SQLite databases. Each problem uses a `.db` file and requires writing appropriate `SELECT`, `INSERT`, `UPDATE`, and `DELETE` statements.

## Key Concepts Covered

* Tables, rows, and columns
* Data types (TEXT, INTEGER, REAL, etc.)
* Primary keys and foreign keys
* JOINs: `INNER JOIN`, `LEFT JOIN`, etc.
* Aggregation: `COUNT`, `AVG`, `SUM`, `GROUP BY`, `HAVING`
* Constraints: `NOT NULL`, `UNIQUE`, `CHECK`

## Example PSETs and Files

### `movies.db`

Explore a database of films, actors, and directors. Write SQL queries to:

* Find all movies by a specific director
* List actors who have appeared together
* Rank films based on ratings or release year

### `fiftyville.db`

Solve a fictional crime using SQL queries to:

* Track movements via license plates and ATM logs
* Filter suspects by matching evidence
* Analyze timelines and narrow down suspects

## Usage

Run queries in the SQLite command line interface:

```bash
sqlite3 database.db
```

Or execute SQL scripts directly:

```bash
sqlite3 database.db < query.sql
```

## Tips

* Plan your queries in steps: start with broad results and refine
* Use `EXPLAIN QUERY PLAN` to optimize queries
* Always back up the database before modifying it
* Think about how tables relate to one another when writing JOINs

## Resources

* CS50 Week 7 lectures and shorts
* SQLite Docs: [https://sqlite.org/docs.html](https://sqlite.org/docs.html)
* SQLBolt: [https://sqlbolt.com/](https://sqlbolt.com/)
* Mode SQL Tutorial: [https://mode.com/sql-tutorial/](https://mode.com/sql-tutorial/)

## Author

Gabriel Rassi – CS50 Week 7 Student
