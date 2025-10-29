// ========================================
// MAIN JAVASCRIPT - HOME PAGE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Robust image fallback to always show a food image
function fallbackFoodImage(imgEl, step = 0) {
    const fallbacks = [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400', // Chocolate cake
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400', // Pizza
        'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400', // Biryani
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', // Burger
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400', // Restaurant
        'https://source.unsplash.com/400x300/?food,dessert,cake',
        'https://picsum.photos/400/300?random=' + Math.floor(Math.random() * 1000)
    ];
    if (step >= fallbacks.length) return;
    imgEl.onerror = function() { fallbackFoodImage(imgEl, step + 1); };
    imgEl.src = fallbacks[step] + (fallbacks[step].includes('?') ? '&' : '?') + 't=' + Date.now();
}

// Logo click to home
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    
    // Load popular dishes
    loadPopularDishes();
    
    // Load trending restaurants
    loadTrendingRestaurants();
    
    // Animate elements on scroll
    observeElements();
});

// Load popular dishes
function loadPopularDishes() {
    const container = document.getElementById('popularDishes');
    if (!container) return;
    
    // Get top rated dishes (show 9 dishes for 3 rows x 3 columns)
    const popularDishes = menuItems
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 9);
    
    container.innerHTML = popularDishes.map(dish => `
        <div class="dish-card">
            <div class="dish-image">
                <img src="${dish.image}" alt="${dish.name}" onerror="fallbackFoodImage(this);">
                <span class="diet-badge ${dish.diet}-badge">${dish.diet.toUpperCase()}</span>
                <button class="quick-view-btn" onclick="showQuickView(${dish.id})">Quick View</button>
            </div>
            <div class="dish-content">
                <h3>${dish.name}</h3>
                <div class="dish-rating">
                    <div class="stars">
                        ${getStarRating(dish.rating)}
                    </div>
                    <span class="rating-count">(${dish.reviews})</span>
                </div>
                <p class="restaurant-info">
                    <i class="fas fa-store"></i> ${dish.restaurant}
                </p>
                <div class="dish-price">$${dish.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${JSON.stringify(dish).replace(/"/g, '&quot;')})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Load trending restaurants
function loadTrendingRestaurants() {
    const container = document.getElementById('trendingRestaurants');
    if (!container) return;
    
    // Get top rated restaurants
    const trending = restaurants
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);
    
    container.innerHTML = trending.map(restaurant => `
        <div class="restaurant-card">
            <div class="restaurant-image">
                <img src="${restaurant.image}" alt="${restaurant.name}">
            </div>
            <div class="restaurant-content">
                <h3>${restaurant.name}</h3>
                <div class="restaurant-rating">
                    <div class="stars">
                        ${getStarRating(restaurant.rating)}
                    </div>
                    <span class="rating-count">(${restaurant.reviews})</span>
                </div>
                <p class="restaurant-info">
                    <i class="fas fa-utensils"></i> ${restaurant.cuisine}
                </p>
                <p class="restaurant-info">
                    <i class="fas fa-clock"></i> ${restaurant.deliveryTime}
                </p>
                <p class="restaurant-info">
                    <i class="fas fa-dollar-sign"></i> ${restaurant.costForTwo} for two
                </p>
                <a href="restaurant-detail.html?id=${restaurant.id}" class="view-menu-btn">
                    <i class="fas fa-eye"></i> View Menu
                </a>
            </div>
        </div>
    `).join('');
}

// Generate star rating HTML
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Show quick view modal
function showQuickView(dishId) {
    const dish = menuItems.find(item => item.id === dishId);
    if (!dish) return;
    
    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewDetails');
    
    content.innerHTML = `
        <div class="quick-view-layout">
            <div class="quick-view-image">
                <img src="${dish.image}" alt="${dish.name}" onerror="fallbackFoodImage(this);">
            </div>
            <div class="quick-view-info">
                <h2>${dish.name}</h2>
                <div class="dish-rating">
                    <div class="stars">${getStarRating(dish.rating)}</div>
                    <span>${dish.rating} (${dish.reviews} reviews)</span>
                </div>
                <p class="restaurant-info">
                    <i class="fas fa-store"></i> ${dish.restaurant}
                </p>
                <p class="diet-info">
                    <span class="${dish.diet}-badge">${dish.diet.toUpperCase()}</span>
                    <span class="cuisine-tag">${dish.cuisine}</span>
                </p>
                <p class="description">${dish.description}</p>
                <div class="price-section">
                    <span class="price">$${dish.price.toFixed(2)}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${JSON.stringify(dish).replace(/"/g, '&quot;')}); closeModal()">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');
}

// Modal close handlers
document.addEventListener('DOMContentLoaded', function() {
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.onclick = closeModal;
    });
    
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    };
});

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('heroSearch');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        window.location.href = `menu.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Allow Enter key to search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('heroSearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});

// Intersection Observer for scroll animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.dish-card, .restaurant-card, .offer-card, .step-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Scroll to top button (only on pages that have it)
window.addEventListener('scroll', function() {
    // Don't run on auth pages
    if (document.body.classList.contains('no-navbar')) {
        return;
    }
    
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    }
});

// Add scroll to top button (only on pages that need it)
document.addEventListener('DOMContentLoaded', function() {
    // Don't add scroll button on auth pages (no-navbar class)
    if (!document.body.classList.contains('no-navbar')) {
        const scrollBtn = document.createElement('div');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.appendChild(scrollBtn);
    }
    
    // Initialize newsletter forms
    initializeNewsletterForms();
});

// Newsletter subscription functionality
function subscribeNewsletter(event) {
    if (event) {
        event.preventDefault();
    }
    
    const form = event ? event.target : document.querySelector('.newsletter-form');
    if (!form) return;
    
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput ? emailInput.value.trim() : '';
    
    if (!email) {
        showNewsletterMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate newsletter subscription
    // In a real application, this would send the email to your backend
    const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
    
    if (subscribers.includes(email)) {
        showNewsletterMessage('This email is already subscribed!', 'error');
    } else {
        subscribers.push(email);
        localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
        showNewsletterMessage('Thank you for subscribing! You will receive our latest offers and updates.', 'success');
        if (emailInput) emailInput.value = '';
    }
}

// Show newsletter subscription message
function showNewsletterMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.newsletter-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `newsletter-message ${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        padding: 0.8rem 1rem;
        margin-top: 0.8rem;
        border-radius: 8px;
        font-size: 0.9rem;
        animation: slideDown 0.3s ease;
    `;
    
    if (type === 'success') {
        messageEl.style.background = '#d3f9d8';
        messageEl.style.color = '#2b8a3e';
        messageEl.style.border = '1px solid #8ce99a';
    } else {
        messageEl.style.background = '#ffe3e3';
        messageEl.style.color = '#c92a2a';
        messageEl.style.border = '1px solid #ffa8a8';
    }
    
    // Find the form and append message
    const forms = document.querySelectorAll('.newsletter-form');
    forms.forEach(form => {
        const newsletterDiv = form.closest('.newsletter');
        if (newsletterDiv) {
            newsletterDiv.appendChild(messageEl);
            // Auto-remove after 5 seconds
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.style.opacity = '0';
                    messageEl.style.transition = 'opacity 0.3s ease';
                    setTimeout(() => messageEl.remove(), 300);
                }
            }, 5000);
        }
    });
}

// Initialize all newsletter forms on page
function initializeNewsletterForms() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        // Check if already has onsubmit handler
        if (!form.hasAttribute('onsubmit')) {
            form.addEventListener('submit', subscribeNewsletter);
        }
    });
}




