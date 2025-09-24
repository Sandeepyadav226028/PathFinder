// Global error handler
window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});



// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .stat-item, .career-card, .college-card, .resource-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;

    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
            
            // Add error message if not exists
            let errorMsg = input.nextElementSibling;
            if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                errorMsg.textContent = 'This field is required';
                errorMsg.style.color = '#ef4444';
                errorMsg.style.fontSize = '0.8rem';
                errorMsg.style.marginTop = '0.25rem';
                input.parentNode.insertBefore(errorMsg, input.nextSibling);
            }
        } else {
            input.classList.remove('error');
            const errorMsg = input.nextElementSibling;
            if (errorMsg && errorMsg.classList.contains('error-message')) {
                errorMsg.remove();
            }
        }
    });

    return isValid;
}

// Search functionality
function setupSearch(searchInputId, itemSelector, textSelector) {
    const searchInput = document.getElementById(searchInputId);
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const items = document.querySelectorAll(itemSelector);

        items.forEach(item => {
            const text = item.querySelector(textSelector)?.textContent.toLowerCase() || '';
            if (text.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Filter functionality
function setupFilter(filterSelector, itemSelector, categoryAttribute) {
    const filterButtons = document.querySelectorAll(filterSelector);
    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            const items = document.querySelectorAll(itemSelector);

            items.forEach(item => {
                if (filterValue === 'all' || item.getAttribute(categoryAttribute) === filterValue) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Initialize search and filter on relevant pages
document.addEventListener('DOMContentLoaded', () => {
    // Career page search and filter
    setupSearch('careerSearch', '.career-card', '.career-header h3');
    setupFilter('.careers-section .filter-tag', '.career-card', 'data-category');

    // Colleges page search and filter
    setupSearch('collegeSearch', '.college-card', '.college-info h3');
    setupFilter('.colleges-section .filter-tag', '.college-card', 'data-category');

    // Resources page search and filter
    setupSearch('resourceSearch', '.resource-card', '.resource-content h3');
    setupFilter('.resources-section .filter-tag', '.resource-card', 'data-category');
});

// Utility functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for notification animations
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

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .error {
        border-color: #ef4444 !important;
    }

    .error-message {
        color: #ef4444;
        font-size: 0.8rem;
        margin-top: 0.25rem;
    }
`;
document.head.appendChild(style);

// Save to localStorage
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
    }
}

// Get from localStorage
function getFromLocalStorage(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error('Error getting from localStorage:', error);
        return defaultValue;
    }
}

// Initialize user data
function initializeUserData() {
    const defaultUserData = {
        savedColleges: [],
        downloadedResources: [],
        completedQuizzes: [],
        achievements: [],
        progress: {
            mathematics: 0,
            physics: 0,
            chemistry: 0,
            biology: 0,
            computerScience: 0
        }
    };

    const userData = getFromLocalStorage('pathfinderUserData', defaultUserData);
    if (!getFromLocalStorage('pathfinderUserData')) {
        saveToLocalStorage('pathfinderUserData', defaultUserData);
    }
    return userData;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeUserData();
});

// Export functions for global use
window.showNotification = showNotification;
window.saveToLocalStorage = saveToLocalStorage;
window.getFromLocalStorage = getFromLocalStorage;
window.validateForm = validateForm;