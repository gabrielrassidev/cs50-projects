# 💳 credit.c — Week 1, CS50

### Goal:
Validate credit card numbers and identify the issuer (VISA, AMEX, MASTERCARD) using Luhn’s Algorithm.

### Logic:
- Multiply every other digit by 2 (starting from second-to-last)
- Add resulting digits
- Add the digits not multiplied
- If total ends in 0 → valid
- Identify card type by length and starting digits

### What I learned:
- Processing digits from a long number
- Using modulo/division in loop logic
- Implementing real-world algorithm (Luhn)
- Multiple condition validation

### Output example:
Number: 4003600000000014
VISA
