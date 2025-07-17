# Speller

## Overview

This project implements a spell checker using a hash table. It is part of Week 5 of Harvard's CS50 course. The program loads a dictionary into memory, checks a given text file for misspelled words, and reports performance statistics including how many words were misspelled and the time spent on various operations.

## Objectives

* Practice with data structures (hash tables, linked lists)
* Implement dictionary loading and word checking
* Understand file I/O and dynamic memory management in C

## Files

* `dictionary.c`: Contains logic for loading the dictionary, checking words, hashing, and unloading.
* `dictionary.h`: Header file with function prototypes.
* `speller.c`: The main program that uses functions from `dictionary.c`.
* `Makefile`: Automates compilation.
* `texts/`: Contains example input text files to test the spell checker.

## Functionality

The spell checker works in the following steps:

1. **Load** a dictionary file into memory.
2. **Process** a text file word by word.
3. **Check** if each word is in the dictionary.
4. **Report** all misspelled words and performance stats.

## Usage

To compile the program:

```bash
make speller
```

To run the program:

```bash
./speller [dictionary] text
```

* `dictionary` is an optional argument specifying the dictionary file.
* `text` is the file containing the text to be spell-checked.

Example:

```bash
./speller dictionaries/large texts/lalaland.txt
```

## Key Concepts Practiced

* Hash table implementation
* Custom string parsing
* Dynamic memory allocation
* File reading and writing
* Performance benchmarking

## Notes

* The number of buckets in the hash table can significantly affect performance.
* Be careful with memory management: avoid memory leaks by freeing all allocated memory.

## Author

\Gabriel Rassi – CS50 Student, Week 5 PSET
