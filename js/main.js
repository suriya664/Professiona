// Main JavaScript file for TutorHub
const THEME_STORAGE_KEY = 'tutorhub-theme';

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-target');
            const data = +counter.innerText;
            const time = value / speed;

            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value.toLocaleString();
            }
        }
        animate();
    });
}

// Theme Toggle
function initializeThemeToggle() {
    const toggles = document.querySelectorAll('.theme-toggle');
    if (!toggles.length) {
        return;
    }

    let currentTheme = localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light';

    const updateToggleControls = () => {
        toggles.forEach((toggle) => {
            toggle.setAttribute('aria-pressed', currentTheme === 'dark');
            toggle.setAttribute('title', currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
            toggle.setAttribute('aria-label', currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');

            const icon = toggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-moon', currentTheme !== 'dark');
                icon.classList.toggle('fa-sun', currentTheme === 'dark');
            }
        });
    };

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            currentTheme = 'dark';
        } else {
            document.body.removeAttribute('data-theme');
            currentTheme = 'light';
        }

        localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
        updateToggleControls();
    };

    updateToggleControls();
    applyTheme(currentTheme);

    toggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    });
}

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(11, 19, 43, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'var(--navy)';
        }
    });
}

// Search Functionality
function handleSearch() {
    const searchButton = document.querySelector('.btn-gold');
    const searchInputs = document.querySelectorAll('.search-container input, .search-container select');
    
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchData = {};
            searchInputs.forEach((input, index) => {
                if (input.value) {
                    const keys = ['subject', 'location', 'mode', 'budget'];
                    searchData[keys[index]] = input.value;
                }
            });
            
            // Redirect to find tutors page with search parameters
            const params = new URLSearchParams(searchData);
            window.location.href = `find-tutors.html?${params.toString()}`;
        });
    }
}

// Subject Card Interactions
function handleSubjectCards() {
    const subjectCards = document.querySelectorAll('.subject-card');
    
    subjectCards.forEach(card => {
        card.addEventListener('click', () => {
            const subject = card.querySelector('h4').innerText;
            window.location.href = `find-tutors.html?subject=${encodeURIComponent(subject)}`;
        });
    });
}

// Tutor Card Interactions
function handleTutorCards() {
    const tutorCards = document.querySelectorAll('.tutor-card');
    
    tutorCards.forEach(card => {
        const viewProfileBtn = card.querySelector('.btn-gold');
        if (viewProfileBtn) {
            viewProfileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const tutorName = card.querySelector('h5').innerText;
                // In a real app, this would navigate to the tutor's profile
                console.log(`Viewing profile for: ${tutorName}`);
                // window.location.href = `tutor-profile.html?tutor=${encodeURIComponent(tutorName)}`;
            });
        }
    });
}

// Newsletter Subscription
function handleNewsletter() {
    const newsletterForm = document.querySelector('.input-group');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            if (email) {
                // Show success message
                showNotification('Thank you for subscribing!', 'success');
                newsletterForm.querySelector('input[type="email"]').value = '';
            }
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                min-width: 300px;
                background: var(--white);
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                animation: slideIn 0.3s ease;
            }
            
            .notification-success {
                border-left: 4px solid var(--gold);
            }
            
            .notification-content {
                padding: 15px 20px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .notification-success i {
                color: var(--gold);
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 20px;
                cursor: pointer;
                margin-left: auto;
                color: #999;
            }
            
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
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
    
    // Manual close
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
}

// Smooth Scroll for Anchor Links
function handleSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form Validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}

// Loading State
function showLoading(element, text = 'Loading...') {
    element.disabled = true;
    element.innerHTML = `<i class="fas fa-spinner fa-spin me-2"></i>${text}`;
}

function hideLoading(element, originalText) {
    element.disabled = false;
    element.innerHTML = originalText;
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start counter animation when stats section is visible
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const statsSection = document.querySelector('.counter');
    if (statsSection) {
        statsObserver.observe(statsSection.parentElement);
    }
    
    // Initialize other features
    handleNavbarScroll();
    handleSearch();
    handleSubjectCards();
    handleTutorCards();
    handleNewsletter();
    handleSmoothScroll();
    initializeThemeToggle();
    
    // Add reveal class to elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.subject-card, .tutor-card, .trust-card');
    animatedElements.forEach(element => {
        element.classList.add('reveal');
    });
    
    // Initialize scroll reveal
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check initial state
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Export functions for use in other files
window.TutorHub = {
    showNotification,
    showLoading,
    hideLoading,
    validateForm,
    debounce,
    throttle
};
