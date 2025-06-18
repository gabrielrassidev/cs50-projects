# Substitution

Implements a monoalphabetic cipher with a 26-letter custom key.

### 🧠 What it does:
- Accepts a key via command-line (e.g., `QWERTYUIOPASDFGHJKLZXCVBNM`)
- Substitutes each letter of plaintext with mapped character
- Preserves case and ignores non-letter characters

### 🔍 Logic used:
- Argument validation: length, uniqueness, alphabetic only
- ASCII math for case and index
- Letter-by-letter substitution logic

### 🧪 Example:

$ ./substitution QWERTYUIOPASDFGHJKLZXCVBNM
Plaintext: Hello!
Ciphertext: Itssg!
