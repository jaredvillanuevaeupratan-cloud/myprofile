# CarePlus Hospital Website

A professional, fully functional, and responsive medical/hospital website built with HTML5, CSS3, and JavaScript.

## 🏥 Features

### Core Pages & Sections
- **Home Page** - Hero section with call-to-action buttons
- **About Section** - Hospital background, mission, and values
- **Services Section** - Detailed medical services with pricing
- **Team Section** - Medical staff profiles
- **Testimonials** - Patient reviews and experiences
- **FAQ Section** - Interactive accordion-style FAQs
- **Contact Section** - Contact form, information, and embedded map
- **Footer** - Quick links, contact info, and legal pages

### Design Features
- ✅ Clean, professional blue & white color scheme
- ✅ Modern sans-serif typography
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Smooth animations and transitions
- ✅ High-quality emoji icons for visual appeal
- ✅ Consistent navigation across all sections

### Functionality
- ✅ Mobile-responsive hamburger menu
- ✅ Smooth scroll navigation
- ✅ Active navigation highlighting on scroll
- ✅ FAQ accordion functionality
- ✅ Contact form with validation
- ✅ Phone number auto-formatting
- ✅ Form submission notifications
- ✅ Lazy loading for images
- ✅ Accessibility features (ARIA labels, reduced motion support)

### Technical Features
- ✅ SEO-friendly structure with proper meta tags
- ✅ Open Graph meta tags for social sharing
- ✅ Fast loading speed
- ✅ Cross-browser compatible
- ✅ Clean, well-commented code
- ✅ CSS variables for easy customization
- ✅ Print styles included

## 📁 Project Structure

```
medical-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All stylesheets
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Image assets folder
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Local Development
1. Clone or download this repository
2. Open `index.html` in your web browser
3. No build process required - works immediately!

### Option 2: Live Server (Recommended)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Deploy to Web
Upload the entire `medical-website` folder to any web hosting service:
- Netlify
- Vercel
- GitHub Pages
- Traditional web hosting

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
  --primary-color: #0066cc;      /* Main brand color */
  --primary-dark: #004c99;       /* Hover states */
  --secondary-color: #00a8e8;    /* Accent color */
  --accent-color: #00d4aa;       /* Highlights */
}
```

### Updating Content
1. **Text Content**: Edit directly in `index.html`
2. **Images**: Replace placeholder divs with actual `<img>` tags in the `images/` folder
3. **Map**: Update the Google Maps embed URL in the contact section
4. **Contact Info**: Modify address, phone, and email throughout the file

### Adding New Services
Copy an existing service card structure and modify:

```html
<div class="service-card">
  <div class="service-image">🔬</div>
  <div class="service-content">
    <h3>Service Name</h3>
    <p>Description here...</p>
    <div class="service-price">Price info</div>
  </div>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: 992px and above
- **Tablet**: 768px - 991px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Browser Compatibility

Tested and compatible with:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Reduced motion support for users who prefer it
- High contrast color scheme
- Alt text for images (when added)

## 📞 Contact Form Integration

The contact form currently simulates submission. To connect to a backend:

1. **Form Backend Services** (Easy):
   - Formspree: https://formspree.io
   - EmailJS: https://www.emailjs.com
   - Netlify Forms (if hosted on Netlify)

2. **Custom Backend**:
   Modify the `submitForm()` function in `js/main.js` to send data to your API endpoint.

## 📄 License

This template is free to use for personal and commercial projects. Attribution appreciated but not required.

## 🤝 Support

For questions or issues:
1. Check the code comments for guidance
2. Review the customization section above
3. Consult MDN Web Docs for HTML/CSS/JS reference

## 🎯 Next Steps

1. Replace placeholder content with actual hospital information
2. Add real images to the `images/` folder
3. Update the Google Maps embed with actual location
4. Connect the contact form to your email/backend
5. Customize colors to match your brand
6. Add additional pages as needed (Privacy Policy, Terms, etc.)
7. Test on multiple devices and browsers
8. Deploy to your hosting provider

---

**Built with ❤️ for better healthcare**

*CarePlus Hospital - Your Health, Our Priority*
