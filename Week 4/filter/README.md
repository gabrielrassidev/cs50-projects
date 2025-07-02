# CS50 Filter — Image Processing in C

## Overview

This program applies various image filters to bitmap (.bmp) images. It manipulates pixels directly using a 2D array of RGB values and supports the following filters:

- Grayscale
- Sepia
- Reflect (horizontal flip)
- Blur

This version corresponds to **`filter more`**, where the filters involve deeper pixel transformations (especially blur).

## Usage

```
./filter [filter] infile.bmp outfile.bmp
```

- `[filter]`: One of `b`, `g`, `r`, `s` (blur, grayscale, reflect, sepia)
- `infile.bmp`: Input BMP image
- `outfile.bmp`: Resulting image after applying the filter

## File Format

Only works with 24-bit uncompressed BMP 4.0 files (standard test images provided by CS50).

## Filters Explained

### Grayscale

Average the RGB values of a pixel and set all components to that value.

```c
average = round((pixel.rgbtRed + pixel.rgbtGreen + pixel.rgbtBlue) / 3.0);
```

### Sepia

Apply weighted transformation to simulate vintage photography:

```c
sepiaRed   = 0.393 * R + 0.769 * G + 0.189 * B;
sepiaGreen = 0.349 * R + 0.686 * G + 0.168 * B;
sepiaBlue  = 0.272 * R + 0.534 * G + 0.131 * B;
```

Clamp all values to 255 (max RGB).

### Reflect

Flip image horizontally by swapping pixels symmetrically across the center of each row.

### Blur

Apply a **box blur**: average each pixel with its neighboring pixels in a 3x3 box. Requires using a **copy** of the image to avoid using modified pixels during computation.

## Skills Practiced

- Working with structs and multidimensional arrays
- Implementing image filters manually
- Handling edge cases (borders during blur)
- Type conversion and value clamping
- Manipulating binary file structures (BMP)

## Bonus

You get exposed to:
- Bitwise file formats
- Real-world image processing logic
