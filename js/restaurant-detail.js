// ========================================
// RESTAURANT DETAIL PAGE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = parseInt(urlParams.get('id'));
    
    if (restaurantId) {
        loadRestaurantDetails(restaurantId);
        loadRestaurantMenu(restaurantId);
        loadRestaurantReviews(restaurantId);
    } else {
        window.location.href = 'restaurants.html';
    }
});

// Load restaurant details
function loadRestaurantDetails(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) {
        window.location.href = 'restaurants.html';
        return;
    }
    
    const headerContainer = document.getElementById('restaurantHeader');
    headerContainer.innerHTML = `
        <div class="container">
            <div style="display: flex; align-items: center; gap: 2rem;">
                <img src="${restaurant.image}" alt="${restaurant.name}" 
                     style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 5px solid white;">
                <div>
                    <h1>${restaurant.name}</h1>
                    <div class="restaurant-rating" style="margin: 1rem 0;">
                        <div class="stars">${getStarRating(restaurant.rating)}</div>
                        <span style="margin-left: 1rem;">${restaurant.rating} (${restaurant.reviews} reviews)</span>
                    </div>
                    <p style="font-size: 1.1rem; opacity: 0.9;">
                        <i class="fas fa-utensils"></i> ${restaurant.cuisine} Cuisine
                    </p>
                    <p style="font-size: 1.1rem; opacity: 0.9;">
                        <i class="fas fa-map-marker-alt"></i> ${restaurant.address}
                    </p>
                </div>
            </div>
        </div>
    `;
    
    // Update info bar
    document.getElementById('deliveryTime').textContent = restaurant.deliveryTime;
    document.getElementById('costForTwo').textContent = restaurant.costForTwo;
    document.getElementById('cuisines').textContent = restaurant.cuisine;
}

// Load restaurant menu
function loadRestaurantMenu(restaurantId) {
    const menuContainer = document.getElementById('restaurantMenu');
    const restaurantItems = menuItems.filter(item => item.restaurantId === restaurantId);
    
    if (restaurantItems.length === 0) {
        menuContainer.innerHTML = '<p>No menu items available</p>';
        return;
    }
    
    menuContainer.innerHTML = restaurantItems.map(dish => `
        <div class="dish-card">
            <div class="dish-image">
                <img src="${dish.image}" alt="${dish.name}">
                <span class="diet-badge ${dish.diet}-badge">${dish.diet.toUpperCase()}</span>
            </div>
            <div class="dish-content">
                <h3>${dish.name}</h3>
                <div class="dish-rating">
                    <div class="stars">
                        ${getStarRating(dish.rating)}
                    </div>
                    <span class="rating-count">(${dish.reviews})</span>
                </div>
                <p style="color: #666; margin: 0.5rem 0;">${dish.description}</p>
                <p style="color: #999; font-size: 0.9rem;">
                    <i class="fas fa-tag"></i> ${dish.category}
                </p>
                <div class="dish-price">$${dish.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${JSON.stringify(dish).replace(/"/g, '&quot;')})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Load restaurant reviews
function loadRestaurantReviews(restaurantId) {
    const reviewsContainer = document.getElementById('reviewsContainer');
    const restaurantItems = menuItems.filter(item => item.restaurantId === restaurantId);
    
    // Sample reviews (in a real app, these would be from a database)
    const sampleReviews = [
        {
            userName: "John Smith",
            rating: 5,
            comment: "Excellent food and fast delivery! Highly recommended.",
            date: "2025-10-12"
        },
        {
            userName: "Emma Wilson",
            rating: 4,
            comment: "Great taste, but delivery took a bit longer than expected.",
            date: "2025-10-10"
        },
        {
            userName: "Mike Johnson",
            rating: 5,
            comment: "Best restaurant on this platform. Food is always fresh!",
            date: "2025-10-08"
        }
    ];
    
    reviewsContainer.innerHTML = sampleReviews.map(review => `
        <div class="review-card">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                <div>
                    <h4 style="margin-bottom: 0.3rem;">${review.userName}</h4>
                    <div class="stars">${getStarRating(review.rating)}</div>
                </div>
                <span style="color: #999; font-size: 0.9rem;">${review.date}</span>
            </div>
            <p style="color: #666;">${review.comment}</p>
        </div>
    `).join('');
}





