# CS50 Week 5

## Overview

This week focuses on **data structures**, specifically **hash tables**, to implement a spell checker. The goal is to write a C program that reads text files, checks each word against a dictionary, and reports any misspellings, along with performance statistics.

## Objectives

* Understand and implement a **hash table** data structure
* Use **linked lists** to handle hash collisions
* Practice with **file I/O** and **dynamic memory allocation** in C
* Write efficient, readable, and well-structured code

## Problem Set: Speller

You are to implement a program that spell-checks a file, using a dictionary implemented as a hash table. The program must:

1. Load words from a dictionary file into memory
2. Read a text file word by word
3. Check if each word exists in the dictionary
4. Output misspelled words
5. Display performance statistics

## Files

* `speller.c`: The main driver program
* `dictionary.h`: Defines the interface for dictionary functions
* `dictionary.c`: Your implementation of the dictionary using a hash table
* `Makefile`: Compilation instructions
* `texts/`: Sample texts to spell-check
* `dictionaries/`: Provided dictionaries of varying sizes

## Requirements

Your program must implement the following functions:

### `bool load(const char *dictionary)`

Loads the dictionary into memory. Returns true if successful, false otherwise.

### `unsigned int size(void)`

Returns the number of words in the dictionary.

### `bool check(const char *word)`

Returns true if the word is in the dictionary.

### `bool unload(void)`

Unloads the dictionary from memory and frees all allocated space.

### `unsigned int hash(const char *word)`

Maps a word to a bucket using a hash function.

## Hash Table Design

* Define a constant `N` for the number of buckets.
* Use a linked list for each bucket to handle collisions.
* Choose or design a hash function that balances speed and distribution.

## Compilation and Usage

### Compile the program:

```bash
make speller
```

### Run the spell checker:

```bash
./speller [dictionary] text
```

* If no dictionary is specified, the program uses `dictionaries/default/dictionary` by default.

Example:

```bash
./speller dictionaries/large texts/lalaland.txt
```

## Output

* List of misspelled words (printed to `stdout`)
* Execution times for:

  * Loading the dictionary
  * Checking words
  * Determining dictionary size
  * Unloading dictionary

## Notes

* Use `valgrind` to check for memory leaks:

```bash
valgrind ./speller texts/lalaland.txt
```

* The performance of your spell checker will be evaluated based on speed and memory usage.
* Strive for clarity and modularity in your code. Add comments where necessary.

## Resources

* CS50 Week 5 lectures
* `man fopen`, `fgetc`, `strtok`, `tolower`
* Hash function design guides

## Author

\Gabriel Rassi – CS50 Week 5 Student

