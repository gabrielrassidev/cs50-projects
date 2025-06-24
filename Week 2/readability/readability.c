#include <cs50.h>
#include <ctype.h>
#include <math.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
   // Prompt user for input text
   string text = get_string("Text: ");

   // Initialize counters
   int letter_count = 0;
   int word_count = 1; // Starts counting every each space after last word letter
   int sentence_count = 0;

   int length = strlen(text);       // Count the length of one
   for (int i = 0; i < length; i++) // Loop the count
   {
        char c = text[i];

      if (isalpha(c)) // Check for letters
      {
         letter_count++;
      }
      else if (c == ' ')
      {
         word_count++;
      }
      else if (c == '.' || c == '!' || c == '?') // Check for sentence endings
      {
         sentence_count++;
      }
   }

   // Calculates average per 100 words
   float L = (float) letter_count / word_count * 100;
   float S = (float) sentence_count / word_count * 100;

   // Coleman-Liau index formula
   float index = 0.0588 * L - 0.296 * S - 15.8;
   int grade = round(index);

   // Print/output grade level
   if (grade < 1)
   {
      printf("Before Grade 1\n");
   }
   else if (grade >= 16)
   {
      printf("Grade 16+\n");
   }
   else
   {
      printf("Grade %i\n", grade);
   }
}
