# Readability

Calculates the reading level of a block of text using the **Coleman-Liau index**.

### 🧠 What it does:
- Counts letters, words and sentences
- Applies formula to estimate U.S. grade level
- Outputs something like: `Grade 5`, `Grade 16+`, or `Before Grade 1`

### 🔍 Logic used:
- String traversal
- Conditionals with `isalpha()`, `isspace()`, and punctuation checks
- Floating point math and rounding

### 🧪 Example:

Text: Congratulations! Today is your day.
Output: Grade 3
