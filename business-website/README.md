# Business Website

A fully functional, responsive business website built with modern HTML5, CSS3, and JavaScript.

## 📁 Project Structure

```
business-website/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services/Products page
├── blog.html           # Blog/Resources page
├── contact.html        # Contact page
├── faq.html            # FAQ page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
└── images/             # Image assets folder
```

## ✨ Features

### Core Features
- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **SEO Optimized** - Proper meta tags, semantic HTML, and structured content
- **Fast Loading** - Optimized code and lazy loading for images
- **Cross-Browser Compatible** - Works on all major browsers

### Pages Included
1. **Home Page**
   - Hero section with call-to-action
   - Features overview
   - About snippet with stats
   - Testimonials
   - CTA section

2. **About Page**
   - Company story
   - Mission & values
   - Team section
   - Statistics

3. **Services Page**
   - Detailed service listings
   - Pricing information
   - Feature lists
   - CTA sections

4. **Blog Page**
   - Article grid layout
   - Search functionality
   - Category sidebar
   - Newsletter signup

5. **Contact Page**
   - Contact form with validation
   - Contact information
   - Embedded Google Map
   - Social media links
   - FAQ preview

6. **FAQ Page**
   - Accordion-style Q&A
   - Categorized questions
   - Contact CTA

### Interactive Features
- Mobile-responsive navigation with hamburger menu
- Smooth scroll animations
- Contact form validation
- FAQ accordion functionality
- Back-to-top button
- Notification system
- Counter animations for statistics
- Lazy loading for images
- Active navigation highlighting

## 🎨 Design Specifications

### Color Scheme
- Primary: `#2c3e50` (Dark Blue-Gray)
- Secondary: `#3498db` (Bright Blue)
- Accent: `#e74c3c` (Red)
- Background: `#f8f9fa` (Light Gray)
- Text: `#333` (Dark Gray)

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Clean, professional sans-serif typeface

## 🚀 Getting Started

### Installation
1. Download or clone this repository
2. Open the project folder
3. Open `index.html` in your web browser

### Customization

#### Update Business Information
Edit the following files to customize content:
- Replace "Your Business Name" with your actual business name
- Update contact information in all pages
- Modify service descriptions and pricing
- Add your actual images to the `images/` folder

#### Replace Images
1. Add your images to the `images/` folder
2. Update image paths in HTML files:
   ```html
   <!-- Change from placeholder to your image -->
   <img src="images/your-image.jpg" alt="Description">
   ```

#### Update Google Maps
1. Go to [Google Maps](https://www.google.com/maps)
2. Find your business location
3. Click "Share" → "Embed a map"
4. Copy the embed URL
5. Replace the iframe `src` in `contact.html`

#### Customize Colors
Edit `css/style.css` and modify the CSS variables:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... */
}
```

## 📧 Contact Form Integration

The contact form is set up with client-side validation. To enable actual email sending:

1. **Option 1: Use a Form Service**
   - Sign up for Formspree, Netlify Forms, or similar
   - Update the form action in `contact.html`

2. **Option 2: Backend Integration**
   - Create a backend endpoint (PHP, Node.js, etc.)
   - Update the `simulateFormSubmission()` function in `js/main.js`

Example with Formspree:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

## 🔒 Browser Compatibility

Tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📱 Responsive Breakpoints

- Desktop: `> 992px`
- Tablet: `768px - 992px`
- Mobile: `< 768px`
- Small Mobile: `< 576px`

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, CSS Variables)
- Vanilla JavaScript (ES6+)
- Google Fonts
- Placeholder images via placeholder.com

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or issues:
- Check the FAQ page
- Review the code comments
- Contact the development team

---

**Built with ❤️ using modern web technologies**
