/* ========================================
   Medical Hospital Website - JavaScript
   Interactive Features & Functionality
   ======================================== */

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const faqItems = document.querySelectorAll('.faq-item');
const contactForm = document.querySelector('.contact-form');
const scrollElements = document.querySelectorAll('.animate-on-scroll');

// Mobile Navigation Toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    if (hamburger) {
      hamburger.textContent = '☰';
    }
  });
});

// FAQ Accordion Functionality
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Close all other FAQ items
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current item
    item.classList.toggle('active');
  });
});

// Contact Form Submission with Validation
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate form
    const errors = [];
    
    if (!name) {
      errors.push('Name is required');
    }
    
    if (!email) {
      errors.push('Email is required');
    } else if (!isValidEmail(email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (!message) {
      errors.push('Message is required');
    }
    
    // Display errors or submit form
    if (errors.length > 0) {
      showNotification(errors.join('<br>'), 'error');
    } else {
      // Simulate form submission (replace with actual backend integration)
      await submitForm({ name, email, phone, subject, message });
    }
  });
}

// Email Validation Helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Form Submission Handler
async function submitForm(formData) {
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Show loading state
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  try {
    // Simulate API call (replace with actual endpoint)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Log form data (in production, send to backend)
    console.log('Form submitted:', formData);
    
    // Show success message
    showNotification('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
    
    // Reset form
    contactForm.reset();
  } catch (error) {
    showNotification('Sorry, there was an error sending your message. Please try again later.', 'error');
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
}

// Notification System
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <span>${message}</span>
    <button class="notification-close" onclick="this.parentElement.remove()">×</button>
  `;
  
  // Add styles
  Object.assign(notification.style, {
    position: 'fixed',
    top: '100px',
    right: '20px',
    padding: '15px 25px',
    borderRadius: '5px',
    color: '#fff',
    fontWeight: '500',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    zIndex: '9999',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    maxWidth: '400px',
    animation: 'slideIn 0.3s ease'
  });
  
  // Set background color based on type
  if (type === 'success') {
    notification.style.backgroundColor = '#00d4aa';
  } else if (type === 'error') {
    notification.style.backgroundColor = '#ff4757';
  } else {
    notification.style.backgroundColor = '#0066cc';
  }
  
  // Style close button
  const closeBtn = notification.querySelector('.notification-close');
  Object.assign(closeBtn.style, {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0'
  });
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// Add slide-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Skip if it's just "#"
    if (href === '#') return;
    
    e.preventDefault();
    
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Active Navigation Link on Scroll
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinksList = document.querySelectorAll('.nav-links a');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinksList.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);

// Header Shadow on Scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  }
});

// Animate Elements on Scroll
function checkScrollAnimations() {
  const triggerBottom = window.innerHeight * 0.8;
  
  scrollElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < triggerBottom) {
      element.classList.add('animate-on-scroll');
    }
  });
}

window.addEventListener('scroll', checkScrollAnimations);
checkScrollAnimations(); // Check on initial load

// Phone Number Formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length >= 6) {
      value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    } else if (value.length >= 3) {
      value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    }
    
    e.target.value = value;
  });
}

// Loading Animation for Images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
});

// Console welcome message
console.log('%c Welcome to CarePlus Hospital Website! ', 
  'background: #0066cc; color: #fff; font-size: 16px; padding: 10px;',
  'Built with ❤️ for better healthcare'
);

// Service Worker Registration (for PWA support - optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment below to enable service worker
    // navigator.serviceWorker.register('/sw.js')
    //   .then(reg => console.log('Service Worker registered'))
    //   .catch(err => console.log('Service Worker registration failed'));
  });
}
