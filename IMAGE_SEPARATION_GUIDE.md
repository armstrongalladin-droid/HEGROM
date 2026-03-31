# Image Separation Guide

## Overview
This guide will help you create two separate individual photos from the group photo `Screenshot 2026-03-30 182910.png`.

## Required Tools
Choose one of the following options:
- **Adobe Photoshop** (Professional)
- **GIMP** (Free, open-source)
- **Canva** (Web-based, easy to use)
- **Photopea** (Web-based, Photoshop-like)
- **Remove.bg** (AI-powered background removal)

## Step-by-Step Instructions

### Option 1: Using Adobe Photoshop
1. **Open the image** in Photoshop
2. **Duplicate the layer** twice (Ctrl+J twice)
3. **Hide one duplicate** and work on the other
4. **Use the Pen Tool** to carefully trace around the Reverend (left person)
5. **Create a selection** from the path
6. **Add a Layer Mask** to hide the Pastor
7. **Use Content-Aware Fill** to reconstruct the background
8. **Save as** `reverend-photo.jpg`
9. **Repeat steps 3-8** for the Pastor (right person), saving as `pastor-photo.jpg`

### Option 2: Using GIMP (Free)
1. **Open the image** in GIMP
2. **Duplicate the layer** twice
3. **Use the Free Select Tool** (lasso) to select the Reverend
4. **Refine the selection** with the Select → Refine Edges tool
5. **Add Layer Mask** to hide the Pastor
6. **Use the Clone Tool** to reconstruct the background
7. **Save as** `reverend-photo.jpg`
8. **Repeat for the Pastor**

### Option 3: Using Remove.bg (Easiest)
1. **Go to remove.bg**
2. **Upload the image**
3. **Download the result** (background removed)
4. **Open in any photo editor**
5. **Add a new background** (solid color or gradient)
6. **Duplicate and crop** to create two separate images
7. **Save as** `reverend-photo.jpg` and `pastor-photo.jpg`

### Option 4: Using Canva
1. **Upload the image** to Canva
2. **Use the Background Remover** tool
3. **Add a new background** (solid color works well)
4. **Download the result**
5. **Use any photo editor** to split into two individual images

## Final Image Requirements
- **Size**: 150x150 pixels (circular crop will be applied)
- **Format**: JPG or PNG
- **Naming**: 
  - Reverend: `reverend-photo.jpg`
  - Pastor: `pastor-photo.jpg`
- **Location**: Place both files in `Assets/images/` folder

## Tips for Best Results
1. **Maintain consistent lighting** across both images
2. **Use similar background colors** for both photos
3. **Ensure head and shoulders are properly framed**
4. **Keep the subjects sharp and in focus**
5. **Match the color balance** between both images

## After Creating the Images
1. **Place both images** in the `Assets/images/` folder
2. **Test the website** to ensure they display correctly
3. **The website will automatically** apply:
   - Circular cropping
   - Professional filters and enhancements
   - Hover effects
   - Responsive sizing

## Website Integration
The leadership section is already updated to use:
- `Assets/images/reverend-photo.jpg` for Reverend Elias Mucangi
- `Assets/images/pastor-photo.jpg` for Pastor Edwin Wafula

Both images will receive the same professional styling as the Bishop's photo.
