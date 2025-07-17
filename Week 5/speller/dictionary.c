// Implements a dictionary's functionality

#include <ctype.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
} node;

const unsigned int N = 26;

unsigned int word_count = 0;

// Hash table
node *table[N];

// Returns true if word is in dictionary, else false
bool check(const char *word)
{
    // Step 1: Normalize to lowecase
    char lower[LENGTH + 1];
    int i = 0;
    for (; word[i] && i < LENGTH; i++)
    {
        lower[i] = tolower(word[i]);
    }
    lower[i] = '\0';

    // Step 2: Hash the lower case word
    int index = hash(lower);

    // Step 3: Traverse the linked list at the index
    node *cursor = table[index];
    while (cursor != NULL)
    {
        if (strcmp(cursor->word, lower) == 0)
        {
            return true;
        }
        cursor = cursor->next;
    }

    return false;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    unsigned int sum = 0;
    for (int i = 0; word[i] != '\0'; i++)
    {
        sum += tolower(word[i]);
    }
    return sum % N; // N is the size of the table
}

// Loads dictionary into memory, returning true if successful, else false
bool load(const char *dictionary)
{
    // Open dictionary file
    FILE *dict = fopen(dictionary, "r");

    if (dict == NULL)
    {
        return false;
    }

    // Temporary buffer for a word
    char word[LENGTH + 1];

    // Read each word
    while (fscanf(dict, "%s", word) != EOF)
    {
        // Allocate memory for a node
        node *n = malloc(sizeof(node));
        if (n == NULL)
        {
            fclose(dict);
            return false;
        }

        // Copy word into node
        strcpy(n->word, word);

        // Hash the word to get index
        int index = hash(word);

        // Insert node at the head of the list
        n->next = table[index];
        table[index] = n;

        word_count++; // <–– count the successfully loaded word
    }
    fclose(dict);
    return true;
}

// Returns number of words in dictionary if loaded, else 0 if not yet loaded
unsigned int size(void)
{
    return word_count;
}

// Unloads dictionary from memory, returning true if successful, else false
bool unload(void)
{
    for (int i = 0; i < N; i++)
    {
        node *cursor = table[i];
        while (cursor != NULL)
        {
            node *tmp = cursor;
            cursor = cursor->next;
            free(tmp);
        }
    }
    return true;
}
