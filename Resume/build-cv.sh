#!/bin/bash

# Build with the correct jobname
pdflatex -jobname=Rafael_Delwart_CV -interaction=nonstopmode -file-line-error "$1"

# Create a symlink so LaTeX Workshop can find the PDF
if [ -f "Rafael_Delwart_CV.pdf" ]; then
    ln -sf "Rafael_Delwart_CV.pdf" "main.pdf"
    
    # Copy PDF to docs folder for GitHub Pages
    if [ -d "../docs/Resume" ]; then
        cp "Rafael_Delwart_CV.pdf" "../docs/Resume/Rafael_Delwart_CV.pdf"
        echo "Copied PDF to docs/Resume for GitHub Pages"
    fi
    
    # Check if we're in a git repository and if there are changes to commit
    if git rev-parse --git-dir > /dev/null 2>&1; then
        # Check if the PDF file has changed
        if ! git diff --quiet Rafael_Delwart_CV.pdf 2>/dev/null || ! git diff --quiet ../docs/Resume/Rafael_Delwart_CV.pdf 2>/dev/null; then
            echo "PDF has changed, committing to git..."
            git add Rafael_Delwart_CV.pdf ../docs/Resume/Rafael_Delwart_CV.pdf
            git commit -m "Auto-update Rafael_Delwart_CV.pdf from LaTeX compilation"
            echo "Committed updated PDF to git"
        else
            echo "PDF unchanged, no commit needed"
        fi
    fi
fi
