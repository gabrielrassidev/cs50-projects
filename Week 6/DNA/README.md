# CS50 Week 6 – DNA (dna.py)

## Overview

This project implements a DNA sequence analyzer that identifies individuals based on their DNA. Each person has a unique combination of Short Tandem Repeats (STRs) in their DNA, and your task is to compare a given DNA sequence against a CSV database of STR counts for known individuals to find a match.

## Objectives

* Parse and manipulate CSV files using Python
* Analyze and compare DNA sequences
* Practice string manipulation and iteration
* Implement basic pattern recognition

## Files

### `dna.py`

The main Python script that:

* Reads a database CSV file containing individuals and STR counts
* Reads a DNA sequence file
* Identifies the STR counts in the sequence
* Compares the counts against the database to find a matching profile

### `databases/`

Contains sample database files like `small.csv` and `large.csv`, each listing names and STR counts.

### `sequences/`

Contains DNA sequence files to be analyzed.

## Usage

To run the program:

```bash
python dna.py data.csv sequence.txt
```

* `data.csv`: The CSV file containing names and STR counts.
* `sequence.txt`: The DNA sequence to analyze.

Example:

```bash
python dna.py databases/small.csv sequences/1.txt
```

## How It Works

1. Load the database using the `csv` module.
2. Read the DNA sequence file into a string.
3. For each STR in the database:

   * Find the longest run of consecutive repeats in the DNA sequence.
4. Compare the STR counts with each individual in the database.
5. Output the name if a match is found, or "No match" otherwise.

## Key Concepts Practiced

* File reading with `open()`
* CSV parsing using `csv.DictReader`
* String analysis (finding substrings and repetitions)
* Data comparison and matching logic

## Tips

* Use helper functions to keep the logic modular and testable
* Be sure to cast STR values to `int` when comparing with computed counts
* Consider using regular expressions for STR analysis (optional)

## Resources

* CS50 Week 6 lecture materials
* Python `csv` documentation: [https://docs.python.org/3/library/csv.html](https://docs.python.org/3/library/csv.html)
* Python string methods: [https://docs.python.org/3/library/stdtypes.html#string-methods](https://docs.python.org/3/library/stdtypes.html#string-methods)

## Author

Gabriel Rassi – CS50 Week 6 Student
