# CS50 Recover — JPEG Recovery from Forensic Image

## Overview

This program recovers JPEG images from a forensic memory card image (`.raw` file). It scans the file block-by-block (512 bytes at a time), looking for JPEG signatures, and writes each discovered image into a separate `.jpg` file.

This simulates digital forensics and teaches you how file formats and raw memory work.

## Usage

```
./recover card.raw
```

- `card.raw`: A binary memory dump containing one or more JPEG images

Output: Files named `000.jpg`, `001.jpg`, ..., one for each JPEG found.

## JPEG Signature

Each JPEG file begins with a specific 4-byte pattern:

```
0xff 0xd8 0xff 0xe0 → 0xef
```

In code:
```c
if (buffer[0] == 0xff &&
    buffer[1] == 0xd8 &&
    buffer[2] == 0xff &&
    (buffer[3] & 0xf0) == 0xe0)
```

This indicates the start of a new JPEG image.

## Implementation Details

- Reads 512-byte blocks using `fread()`
- Uses a buffer (`BYTE buffer[512]`) to hold each block
- When a JPEG header is detected:
  - Closes the previous file (if open)
  - Opens a new file with formatted name (`000.jpg`, `001.jpg`, etc.)
- Continues writing blocks to the current JPEG until a new header is found

### Core File Functions

```c
FILE *input = fopen("card.raw", "rb");
fread(buffer, sizeof(BYTE), 512, input);
fwrite(buffer, sizeof(BYTE), 512, output);
fclose(file);
```

## Skills Practiced

- Reading and writing binary files
- Detecting file signatures
- File naming and I/O stream management
- Understanding memory and block-level data
- Working with pointers and raw byte arrays
