import csv
import sys

def main():
    if len(sys.argv) != 3:
        print("Usage: python dna.py data.csv sequence.txt")
        sys.exit(1)

    # Read the DNA database into memory
    with open(sys.argv[1], newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        str_sequences = reader.fieldnames[1:]  # skip 'name'
        people = [row for row in reader]

    # Read the DNA sequence file
    with open(sys.argv[2], 'r') as txtfile:
        dna_sequence = txtfile.read()

    # Calculate the longest run of each STR in the DNA sequence
    str_counts = {}
    for STR in str_sequences:
        str_counts[STR] = longest_match(dna_sequence, STR)

    # Compare STR counts against each person in the database
    for person in people:
        if all(int(person[STR]) == str_counts[STR] for STR in str_sequences):
            print(person['name'])
            return

    print("No match")


def longest_match(sequence, subsequence):
    """Returns length of longest run of subsequence in sequence"""
    longest = 0
    length = len(subsequence)

    for i in range(len(sequence)):
        count = 0
        while sequence[i + count * length: i + (count + 1) * length] == subsequence:
            count += 1
        longest = max(longest, count)

    return longest


if __name__ == "__main__":
    main()
