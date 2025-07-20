# Rafael Delwart Portfolio Website - File Structure

## Overview
This website has been refactored for better organization and maintainability by separating concerns into multiple files.

## File Structure

### Main Files
- `index.html` - Main HTML file (cleaned and organized)
- `index-backup.html` - Backup of original monolithic file

### CSS Files
- `assets/css/main.css` - Original theme CSS
- `assets/css/custom.css` - Custom styles for portfolio features

### JavaScript Files
- `assets/js/projects.js` - Project data and configuration
- `assets/js/pdf-handler.js` - PDF display functionality with fallbacks
- `assets/js/navigation.js` - Tab navigation and page management
- `assets/js/project-manager.js` - Project generation and display logic

### Template Files (for future use)
- `templates/home-content.html` - Home tab content
- `templates/cv-content.html` - CV tab content  
- `templates/projects-content.html` - Projects tab content

### External Dependencies
- Font Awesome 5.15.4 (icons)
- PDF.js 3.11.174 (PDF rendering)
- jQuery and existing theme scripts

## Benefits of New Structure

### ✅ Maintainability
- Separate concerns for easier editing
- Modular JavaScript functions
- Organized CSS rules

### ✅ Performance
- Better browser caching
- Smaller individual file sizes
- Lazy loading potential

### ✅ Scalability
- Easy to add new projects in `projects.js`
- Simple to extend functionality
- Clean separation of data and presentation

### ✅ Debugging
- Easier to locate and fix issues
- Clear error boundaries
- Better console logging

## How to Add New Projects

1. Edit `assets/js/projects.js`
2. Add new project object to the array
3. Create corresponding project detail section in `index.html`
4. No other changes needed - the system will automatically display it

## How to Modify Styles

1. Edit `assets/css/custom.css` for portfolio-specific styles
2. Avoid modifying `main.css` (theme file)
3. Use semantic class names and comments

## Automated Build Integration

The existing LaTeX build system (`build-cv.sh`) continues to work:
- Generates `Rafael_Delwart_CV.pdf`
- Copies to `docs/Resume/` for GitHub Pages
- Auto-commits changes to git

Website automatically displays updated PDFs without any manual intervention.
