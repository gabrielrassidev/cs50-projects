# CS50 Volume — Audio Manipulation

## Overview

This program reads a `.wav` audio file, scales its audio samples by a user-defined factor (e.g. 0.5, 2.0), and writes a new `.wav` file with the adjusted volume.

## Usage

```
./volume input.wav output.wav 1.5
```

- `input.wav`: Source audio file (must be PCM-encoded, 16-bit)
- `output.wav`: New file to create
- `1.5`: Volume scaling factor (e.g., 0.5 = half volume, 2.0 = double volume)

## Key Concepts

- **WAV File Format**: First 44 bytes are a header, followed by audio data.
- **Header Copying**: `fread()` and `fwrite()` used to copy header bytes directly.
- **Sample Scaling**: Each 16-bit audio sample is read, multiplied by the factor, and written back.
- **Data Types**:
  - `uint8_t` for byte-level operations (header)
  - `int16_t` for audio samples

## Implementation

- Open files using `fopen()`
- Copy the 44-byte header
- Use a loop to read each `int16_t` sample:
  ```c
  fread(&sample, sizeof(int16_t), 1, input);
  sample *= factor;
  fwrite(&sample, sizeof(int16_t), 1, output);
  ```

## Skills Practiced

- Binary file I/O in C
- Working with audio file formats
- Type safety and scaling arithmetic
- Memory-safe data manipulation

