# CS50 Week 7 – Fiftyville (fiftyville.db)

## Overview

This project is a mystery-solving exercise that uses SQL to uncover the details of a fictional crime in the town of Fiftyville. You are given a SQLite database containing various tables related to people, phone calls, ATM transactions, flights, and more. Your task is to determine who committed the crime, when and where they did it, and how they escaped.

## Objectives

* Develop SQL querying skills by investigating data
* Apply logical reasoning to solve a complex problem
* Learn how to use JOINs, filters, and subqueries effectively

## Files

### `fiftyville.db`

A SQLite database with tables including:

* `people`
* `phone_calls`
* `atm_transactions`
* `bank_accounts`
* `flights`
* `airports`
* `passengers`

### `log.txt`

Optional notes to track clues and hypotheses.

## Usage

Run the SQLite CLI:

```bash
sqlite3 fiftyville.db
```

You can execute SQL queries interactively or use `.read` to run from a file:

```bash
.read query.sql
```

## Strategy

1. **Read the problem statement carefully.** Understand what happened, when, and where.
2. **Gather clues step-by-step.** Start by identifying the date and location of the crime.
3. **Trace suspects.** Use JOINs and filters to narrow down who could have committed the crime.
4. **Follow the money and calls.** Check ATM withdrawals and phone call records.
5. **Track movements.** Investigate flights and passenger lists to determine the escape route.
6. **Identify the accomplice.** Analyze connections between suspects.

## Tips

* Use temporary tables or common table expressions (CTEs) to organize complex queries
* Be meticulous with filtering (`WHERE`) and joining (`JOIN ON`) logic
* Comment your queries for clarity

## Example Query

```sql
SELECT name FROM people
JOIN bank_accounts ON people.id = bank_accounts.person_id
JOIN atm_transactions ON bank_accounts.account_number = atm_transactions.account_number
WHERE atm_transactions.amount = 100 AND atm_transactions.transaction_type = 'withdrawal';
```

## Resources

* SQLite Documentation: [https://sqlite.org/docs.html](https://sqlite.org/docs.html)
* CS50 Week 7 lecture materials

## Author

Gabriel Rassi – CS50 Week 7 Student
