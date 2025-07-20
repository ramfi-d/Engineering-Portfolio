#!/bin/bash

# Build with the correct jobname
pdflatex -jobname=Rafael_Delwart_CV -interaction=nonstopmode -file-line-error "$1"

# Create a symlink so LaTeX Workshop can find the PDF
if [ -f "Rafael_Delwart_CV.pdf" ]; then
    ln -sf "Rafael_Delwart_CV.pdf" "main.pdf"
fi
