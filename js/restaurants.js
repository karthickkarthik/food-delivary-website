// ========================================
// RESTAURANTS PAGE FUNCTIONALITY
// ========================================

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    loadRestaurants();
    setupRestaurantFilters();
    setupSearch();
    
    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});

// Load restaurants
function loadRestaurants(filter = 'all', searchTerm = '') {
    const container = document.getElementById('restaurantsList');
    if (!container) return;
    
    let filtered = restaurants;
    
    // Apply type filter
    if (filter !== 'all') {
        filtered = filtered.filter(r => r.type === filter);
    }
    
    // Apply search filter
    if (searchTerm) {
        const search = searchTerm.toLowerCase();
        filtered = filtered.filter(r => 
            r.name.toLowerCase().includes(search) ||
            r.cuisine.toLowerCase().includes(search) ||
            r.address.toLowerCase().includes(search)
        );
    }
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 3rem; color: #999;">No restaurants found</p>';
        return;
    }
    
    container.innerHTML = filtered.map(restaurant => `
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
                    <span class="rating-count">(${restaurant.reviews} reviews)</span>
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
                <p class="restaurant-info">
                    <i class="fas fa-map-marker-alt"></i> ${restaurant.address}
                </p>
                <a href="restaurant-detail.html?id=${restaurant.id}" class="view-menu-btn">
                    <i class="fas fa-eye"></i> View Menu
                </a>
            </div>
        </div>
    `).join('');
}

// Setup filter buttons
function setupRestaurantFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            currentFilter = filter;
            
            // Load filtered restaurants
            const searchInput = document.getElementById('restaurantSearch');
            const searchTerm = searchInput ? searchInput.value : '';
            loadRestaurants(filter, searchTerm);
        });
    });
}

// Setup search
function setupSearch() {
    const searchInput = document.getElementById('restaurantSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            loadRestaurants(currentFilter, this.value);
        });
    }
}





