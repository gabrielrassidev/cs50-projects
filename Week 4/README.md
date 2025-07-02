# CS50 Week 4: Memory

## Overview

This week introduces how computers manage memory and how C allows us to manipulate it directly. It covers:

- Pointers
- Dynamic memory allocation (`malloc`, `free`)
- Memory safety (avoiding leaks, dangling pointers)
- File I/O (`fopen`, `fread`, `fwrite`, `fclose`)
- Structures and shallow vs deep copy
- Buffer overflows and memory bugs

## Key Concepts

- **Pointers**: Variables storing memory addresses; allow indirect access.
- **`malloc()`**: Allocates memory at runtime on the heap.
- **`free()`**: Releases previously allocated memory to avoid leaks.
- **`fread()` / `fwrite()`**: Used for binary file operations.
- **`typedef`**: Used to create more readable type aliases (e.g., `BYTE`).
- **Memory bugs**: Off-by-one errors, leaks, and segmentation faults.

## Projects

- `recover.c`: Forensically extracts JPEGs from a memory card dump using signatures and block logic.
- `volume.c`: Reads a WAV file, scales audio samples, and writes a new file.
- `filter`: Applies image filters (grayscale, sepia, reflect, blur, edge detect) using pixel manipulation.

## Skills Acquired

- Navigating raw memory
- Using structs and buffers
- Safely manipulating binary files
- Debugging low-level memory issues
