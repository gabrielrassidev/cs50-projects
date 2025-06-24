# Tideman – CS50 Week 3

## Overview
This program implements the **Tideman ranked-pairs voting algorithm**. It allows voters to rank multiple candidates and determines the winner by analyzing pairwise preferences without introducing cycles.

---

## Problem Requirements
- Accept command-line arguments for candidate names
- Accept ranked votes from users
- Record preferences for all candidate pairs
- Sort pairs by strength of victory
- Lock pairs into a graph, avoiding cycles
- Print the source of the graph as the winner

---

## Concepts Practiced
- 2D arrays and structs
- Recording pairwise preferences
- Sorting structs (selection sort)
- Cycle detection in directed graphs
- Graph-based logic modeling
- Recursion for cycle checking

---

## Implementation Details
- Defined a `pair` struct to hold winner/loser relationships
- Used a 2D `preferences` array to count rank-based preferences
- Implemented a `record_preferences()` function to populate the matrix
- Sorted pairs by strength using custom logic
- Built a `locked` matrix to represent directed edges
- Used a recursive `has_cycle()` function to prevent circular logic
- Printed the graph source (candidate with no incoming edges) as the winner

---

## Key Learnings
- **Structuring logic as a graph** reveals relationships beyond simple counting
- **Sorting and locking** require precise control flow to avoid breaking constraints
- **Cycle detection** is critical in systems that rely on hierarchical logic
- **Complex algorithms demand clarity** in both data structure and decision flow

---

## Sample Output
```bash
$ ./tideman Alice Bob Charlie
Number of voters: 5
Rank 1: Charlie
Rank 2: Alice
Rank 3: Bob
...
Charlie
