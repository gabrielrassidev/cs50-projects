#include <cs50.h>
#include <stdio.h>

int main(void)
{
    long number = get_long("Number: ");
    long temp = number;
    int sum = 0;
    int position = 0;

    while (temp > 0)
    {
        int digit = temp % 10;

        if (position % 2 == 0)
        {
            sum += digit;
        }
        else
        {
            int doubled = digit * 2;
            sum += (doubled / 10) + (doubled % 10);
        }

        temp /= 10;
        position++;
    }

    if (sum % 10 != 0)
    {
        printf("INVALID\n");
        return 0;
    }

    long start = number;
    while (start >= 100)
    {
        start /= 10;
    }

    if ((start == 34 || start == 37) && position == 15)
    {
        printf("AMEX\n");
    }
    else if (start >= 51 && start <= 55 && position == 16)
    {
        printf("MASTERCARD\n");
    }
    else if ((start / 10 == 4) && (position == 13 || position == 16))
    {
        printf("VISA\n");
    }
    else
    {
        printf("INVALID\n");
    }
}
