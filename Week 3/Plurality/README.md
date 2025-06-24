# Plurality – CS50 Week 3

## Overview
This program simulates a **plurality election**, where the candidate with the most votes wins. It was designed to handle multiple candidates, validate input, and handle ties.

---

## Problem Requirements
- Accept command-line arguments for candidate names
- Accept multiple votes from users
- Count valid votes only
- Print the name(s) of the candidate(s) with the highest vote count
- Handle ties by printing all winners

---

## Concepts Practiced
- Arrays and structs
- String comparison and validation
- Vote tallying and input handling
- Control structures and conditionals
- Handling ties and edge cases

---

## Implementation Details
- Created a `candidate` struct with `name` and `votes`
- Used an array of `candidate` structs to store all contenders
- Implemented a `vote()` function to check and count valid names
- Implemented a `print_winner()` function to find the candidate(s) with the highest vote count
- Used linear search and iteration for both validation and winner determination

---

## Key Learnings
- Importance of **validating user input** before acting on it
- Basic **data modeling** with structs
- How to **iterate and compare string values** reliably in C
- The reality of **handling ties and exceptions** even in simple systems

---

## Sample Output
```bash
$ ./plurality Alice Bob Charlie
Number of voters: 5
Vote: Alice
Vote: Bob
Vote: Charlie
Vote: Alice
Vote: Bob
Bob

