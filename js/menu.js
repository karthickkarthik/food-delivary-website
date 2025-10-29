// ========================================
// MENU PAGE FUNCTIONALITY
// ========================================

let filteredItems = [...menuItems];

// Ensure getStarRating is available on this page
// Some pages don't load main.js where it's originally defined
if (typeof getStarRating !== 'function') {
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
let currentFilters = {
    search: '',
    cuisines: [],
    diet: 'all',
    priceRanges: [],
    rating: 'all'
};

document.addEventListener('DOMContentLoaded', function() {
    // Load menu items
    loadMenuItems();
    
    // Setup filter listeners
    setupFilters();
    
    // Setup sort listener
    setupSort();
    
    // Check for search parameter in URL
    checkSearchParam();
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});

// Load and display menu items
function loadMenuItems() {
    const container = document.getElementById('menuGrid');
    if (!container) return;
    
    container.innerHTML = filteredItems.map(dish => `
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
                <p class="cuisine-info">
                    <i class="fas fa-utensils"></i> ${dish.cuisine}
                </p>
                <div class="dish-price">$${dish.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${JSON.stringify(dish).replace(/"/g, '&quot;')})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
    
    // Update results count
    document.getElementById('resultsCount').textContent = filteredItems.length;
}

// Setup filter listeners
function setupFilters() {
    // Search filter
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentFilters.search = e.target.value.toLowerCase();
            applyFilters();
        });
    }
    
    // Cuisine filters
    const cuisineFilters = document.querySelectorAll('.cuisine-filter');
    cuisineFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            if (this.value === 'all') {
                if (this.checked) {
                    currentFilters.cuisines = [];
                    cuisineFilters.forEach(f => {
                        if (f.value !== 'all') f.checked = false;
                    });
                }
            } else {
                document.querySelector('.cuisine-filter[value="all"]').checked = false;
                updateCuisineFilters();
            }
            applyFilters();
        });
    });
    
    // Diet filters
    const dietFilters = document.querySelectorAll('.diet-filter');
    dietFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            currentFilters.diet = this.value;
            applyFilters();
        });
    });
    
    // Price filters
    const priceFilters = document.querySelectorAll('.price-filter');
    priceFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            updatePriceFilters();
            applyFilters();
        });
    });
    
    // Rating filters
    const ratingFilters = document.querySelectorAll('.rating-filter');
    ratingFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            currentFilters.rating = this.value;
            applyFilters();
        });
    });
}

// Update cuisine filters array
function updateCuisineFilters() {
    const selected = Array.from(document.querySelectorAll('.cuisine-filter:checked'))
        .filter(f => f.value !== 'all')
        .map(f => f.value);
    currentFilters.cuisines = selected;
}

// Update price filters array
function updatePriceFilters() {
    const selected = Array.from(document.querySelectorAll('.price-filter:checked'))
        .map(f => f.value);
    currentFilters.priceRanges = selected;
}

// Apply all filters
function applyFilters() {
    filteredItems = menuItems.filter(item => {
        // Search filter
        if (currentFilters.search) {
            const searchLower = currentFilters.search;
            if (!item.name.toLowerCase().includes(searchLower) &&
                !item.restaurant.toLowerCase().includes(searchLower) &&
                !item.cuisine.toLowerCase().includes(searchLower)) {
                return false;
            }
        }
        
        // Cuisine filter
        if (currentFilters.cuisines.length > 0) {
            if (!currentFilters.cuisines.includes(item.cuisine)) {
                return false;
            }
        }
        
        // Diet filter
        if (currentFilters.diet !== 'all') {
            if (item.diet !== currentFilters.diet) {
                return false;
            }
        }
        
        // Price filter
        if (currentFilters.priceRanges.length > 0) {
            const itemPrice = item.price;
            let matchesPrice = false;
            
            currentFilters.priceRanges.forEach(range => {
                if (range === 'low' && itemPrice < 12) matchesPrice = true;
                if (range === 'medium' && itemPrice >= 12 && itemPrice <= 20) matchesPrice = true;
                if (range === 'high' && itemPrice > 20) matchesPrice = true;
            });
            
            if (!matchesPrice) return false;
        }
        
        // Rating filter
        if (currentFilters.rating !== 'all') {
            const minRating = parseFloat(currentFilters.rating);
            if (item.rating < minRating) {
                return false;
            }
        }
        
        return true;
    });

    // If no items match, auto-reset filters to show all dishes
    if (filteredItems.length === 0) {
        resetFiltersUI();
        filteredItems = [...menuItems];
    }

    loadMenuItems();
}

// Setup sort functionality
function setupSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortItems(this.value);
        });
    }
}

// Sort items
function sortItems(sortBy) {
    switch (sortBy) {
        case 'popularity':
            filteredItems.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'price-low':
            filteredItems.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredItems.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredItems.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            filteredItems.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    loadMenuItems();
}

// Clear all filters
function clearFilters() {
    // Reset search
    document.getElementById('searchInput').value = '';
    
    // Reset checkboxes and radios
    document.querySelectorAll('.cuisine-filter, .price-filter').forEach(f => f.checked = false);
    document.querySelector('.cuisine-filter[value="all"]').checked = true;
    document.querySelector('.diet-filter[value="all"]').checked = true;
    document.querySelector('.rating-filter[value="all"]').checked = true;
    
    // Reset filters object
    currentFilters = {
        search: '',
        cuisines: [],
        diet: 'all',
        priceRanges: [],
        rating: 'all'
    };
    
    applyFilters();
}

// Reset filter controls in the UI to default (All)
function resetFiltersUI() {
    const searchEl = document.getElementById('searchInput');
    if (searchEl) searchEl.value = '';

    const allCuisine = document.querySelector('.cuisine-filter[value="all"]');
    if (allCuisine) allCuisine.checked = true;
    document.querySelectorAll('.cuisine-filter').forEach(f => {
        if (f.value !== 'all') f.checked = false;
    });

    const dietAll = document.querySelector('.diet-filter[value="all"]');
    if (dietAll) dietAll.checked = true;

    document.querySelectorAll('.price-filter').forEach(f => (f.checked = false));
    const ratingAll = document.querySelector('.rating-filter[value="all"]');
    if (ratingAll) ratingAll.checked = true;
}

// Check for search parameter in URL
function checkSearchParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    
    if (searchTerm) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = searchTerm;
            currentFilters.search = searchTerm.toLowerCase();
            applyFilters();
        }
    }
}

// Show quick view (reuse from main.js)
function showQuickView(dishId) {
    const dish = menuItems.find(item => item.id === dishId);
    if (!dish) return;
    
    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewDetails');
    
    content.innerHTML = `
        <div class="quick-view-layout" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div class="quick-view-image">
                <img src="${dish.image}" alt="${dish.name}" style="width: 100%; border-radius: 8px;">
            </div>
            <div class="quick-view-info">
                <h2>${dish.name}</h2>
                <div class="dish-rating">
                    <div class="stars">${getStarRating(dish.rating)}</div>
                    <span>${dish.rating} (${dish.reviews} reviews)</span>
                </div>
                <p style="margin: 1rem 0;">
                    <i class="fas fa-store"></i> ${dish.restaurant}
                </p>
                <p style="margin: 0.5rem 0;">
                    <span class="${dish.diet}-badge">${dish.diet.toUpperCase()}</span>
                    <span style="background: #f0f0f0; padding: 0.3rem 0.8rem; border-radius: 15px; margin-left: 0.5rem;">${dish.cuisine}</span>
                </p>
                <p style="margin: 1rem 0; color: #666;">${dish.description}</p>
                <div style="font-size: 2rem; color: var(--primary-color); font-weight: bold; margin: 1rem 0;">
                    $${dish.price.toFixed(2)}
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
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

// Modal handlers
document.addEventListener('DOMContentLoaded', function() {
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(btn => {
        btn.onclick = closeModal;
    });
    
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    };
});



