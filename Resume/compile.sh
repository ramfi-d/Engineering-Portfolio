#!/bin/bash
# Compile LaTeX to Rafael_Delwart_CV.pdf

# Compile the LaTeX file with custom output name
pdflatex -jobname="Rafael_Delwart_CV" main.tex

# Check if compilation was successful
if [ -f "Rafael_Delwart_CV.pdf" ]; then
    echo "PDF compiled successfully as Rafael_Delwart_CV.pdf"
else
    echo "Error: Rafael_Delwart_CV.pdf was not generated"
fi

# Clean up auxiliary files
rm -f Rafael_Delwart_CV.aux Rafael_Delwart_CV.log Rafael_Delwart_CV.out Rafael_Delwart_CV.fdb_latexmk Rafael_Delwart_CV.fls Rafael_Delwart_CV.synctex.gz
