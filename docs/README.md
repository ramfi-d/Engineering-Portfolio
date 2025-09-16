# Rafael Delwart Portfolio Website

## Overview
This website has been refactored for better organization and maintainability by separating concerns into multiple files.


### External Dependencies
- Font Awesome 5.15.4 (icons)
- PDF.js 3.11.174 (PDF rendering)
- jQuery and existing theme scripts


## Automated Build Integration

The existing LaTeX build system (`build-cv.sh`) continues to work:
- Generates `Rafael_Delwart_CV.pdf`
- Copies to `docs/Resume/` for GitHub Pages
- Auto-commits changes to git

Website automatically displays updated PDFs without any manual intervention.
