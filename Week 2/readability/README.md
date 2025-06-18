## 📁 `readability/README.md`

```markdown
# Readability

This program analyzes a block of text and determines its U.S. grade reading level using the **Coleman-Liau index**.

### 🧠 What it calculates:
- Number of letters
- Number of words
- Number of sentences
- Uses the formula:  
  `index = 0.0588 * L - 0.296 * S - 15.8`

Where:
- `L` = average letters per 100 words
- `S` = average sentences per 100 words

### 📦 How to run:
```bash
make readability
./readability

