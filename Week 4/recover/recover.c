#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

typedef uint8_t BYTE;         // Define BYTE as unsigned 8-bit int

int main(int argc, char *argv[])
{
    if (argc != 2) // Check for correct command-line usage
    {
        printf("Usage: ./recover filename\n");
        return 1;
    }

    FILE *input = fopen(argv[1], "rb"); // Try to open file
    if (input == NULL) // Check if file exists
    {
        printf("Could not open file.\n");
        return 1;
    }

    BYTE buffer[512];             // 512-byte buffer
    FILE *img = NULL;             // File pointer for the JPEG we're writing
    int file_count = 0;           // Counter for naming files

    // Read 512-byte chunks until end of file
    while (fread(buffer, sizeof(BYTE), 512, input) == 512)
    {
        if  (buffer[0] == 0xff &&
             buffer[1] == 0xd8 &&
             buffer[2] == 0xff &&
            (buffer[3] & 0xf0) == 0xe0)

        {
            // If already writing, close current file
            if (img != NULL)
            {
                fclose(img);
            }

            // Create new filename
            char filename[8];
            sprintf(filename, "%03i.jpg", file_count++);;

            // Open new JPEG file
            img = fopen(filename, "wb");

            // Write first block
            fwrite(buffer, sizeof(BYTE), 512, img);
        }

        else if (img != NULL)
        {
            // Continue writing if JPEG is open
            fwrite(buffer, sizeof(BYTE), 512, img);
        }
    }

    // Close any remaining open files
    if (img != NULL)
    {
        fclose(img);
    }

    fclose(input);
    return 0;
}
