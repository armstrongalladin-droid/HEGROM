# Heavenly Glory Revelation Ministries Website

A modern, responsive church website built with HTML, CSS, and vanilla JavaScript for Heavenly Glory Revelation Ministries.

## 🌐 Project Overview

This is a complete, production-ready church website featuring:
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, spiritual design with calming colors
- **No Backend**: Pure static site - easy to deploy on Vercel, Netlify, or any hosting platform
- **Beginner-Friendly**: Simple, well-commented code that's easy to maintain

## 📁 Project Structure

```
/church-website
│── index.html          # Home page
│── about.html          # About us page
│── sermons.html        # Sermons and messages
│── events.html         # Events and calendar
│── contact.html        # Contact and prayer requests
│── /css
│     └── style.css     # Main stylesheet (shared across all pages)
│── /js
│     └── script.js     # JavaScript functionality
│── /images             # Add your church images here
└── README.md           # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Deep Blue (#2c3e50) - Professional and trustworthy
- **Secondary**: Gold (#f39c12) - Represents divine glory
- **Accent**: Purple (#8e44ad) - Spiritual and royal
- **Background**: Light gray (#f8f9fa) - Clean and readable

### Typography
- **Headings**: Playfair Display (Google Fonts) - Elegant serif
- **Body**: Source Sans Pro (Google Fonts) - Clean sans-serif

### Responsive Breakpoints
- **Desktop**: 1200px+ - Full layout
- **Tablet**: 768px-1199px - Adjusted grid
- **Mobile**: <768px - Stacked layout, hamburger menu

## 🧱 Components & Features

### Navigation
- Sticky navigation bar with smooth scroll effect
- Mobile hamburger menu
- Active page highlighting
- Smooth scrolling to sections

### Home Page
- Hero section with background image and call-to-action
- About section with mission/vision
- Service times display
- Latest sermons preview
- Get connected section

### About Page
- Church history and story
- Mission and vision statements
- Core values with icons
- Leadership team profiles
- Statement of faith

### Sermons Page
- Searchable sermon archive
- Category filtering (Recent, Series)
- Video modal for sermon playback
- Download and print functionality
- Speaker and scripture references

### Events Page
- Regular service schedule
- Upcoming special events
- Event filtering by type
- Weekly ministry groups
- Countdown timers for special events

### Contact Page
- Contact information and directions
- Interactive contact form
- Prayer request submission
- Get connected opportunities
- Map integration placeholder

## ⚙️ JavaScript Functionality

### Core Features
- Mobile menu toggle
- Smooth scrolling navigation
- Form submission handling (simulated)
- Scroll-based navbar effects
- Active page detection

### Interactive Elements
- Sermon search and filtering
- Event category filtering
- Modal popups for videos and information
- Form validation
- Print functionality for sermon notes

### User Experience
- Fade-in animations on scroll
- Hover effects and transitions
- Mobile-optimized interactions
- Accessibility features

## 🚀 Deployment Instructions

### 1. Prepare for Deployment
- All files are ready for immediate deployment
- No build process required
- Works with any static hosting service

### 2. Recommended Hosting Platforms

#### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect GitHub to Vercel
3. Deploy automatically

#### Netlify
1. Push code to GitHub repository
2. Connect GitHub to Netlify
3. Deploy automatically

#### Traditional Hosting
1. Upload all files to your web server
2. Ensure the folder structure is maintained
3. Access via your domain

### 3. Customization Before Deployment

#### Update Contact Information
Edit these files to update church details:
- `index.html` - Footer contact info
- `contact.html` - Full contact details
- `about.html` - Church address and info

#### Add Your Own Images
1. Add church images to `/images/` folder
2. Update image references in HTML files
3. Recommended sizes:
   - Hero images: 1920x1080px
   - Team photos: 400x400px
   - Event images: 800x600px

#### Update Church Name
Search and replace "Heavenly Glory Revelation Ministries" with your church name across all files.

## 🔧 Customization Guide

### Colors
Edit `/css/style.css` variables section:
```css
:root {
    --primary-color: #2c3e50;    /* Your primary color */
    --secondary-color: #f39c12;  /* Your secondary color */
    --accent-color: #8e44ad;     /* Your accent color */
}
```

### Fonts
Replace Google Fonts imports in `/css/style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

### Content Updates
- **Sermons**: Update sermon data in `sermons.html`
- **Events**: Modify event information in `events.html`
- **About**: Update church story and leadership in `about.html`

## 📱 Mobile Optimization

The website is fully responsive with:
- Touch-friendly navigation
- Optimized images for mobile
- Readable text sizes
- Proper spacing for touch interactions

## 🌐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## 🔒 Security Considerations

- No server-side processing required
- Contact forms use client-side validation
- Safe for public hosting
- No sensitive data in source code

## 📈 Performance

- Optimized CSS and JavaScript
- Efficient image loading
- Minimal external dependencies
- Fast loading times

## 🤝 Support

This website is designed to be:
- Easy to maintain and update
- Well-documented and commented
- Accessible for developers of all skill levels
- Scalable for future enhancements

## 📄 License

This project is open for use by any church or religious organization. Feel free to modify, customize, and use it for your ministry.

---

**Built with ❤️ for Heavenly Glory Revelation Ministries**
