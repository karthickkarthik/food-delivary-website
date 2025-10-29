// ========================================
// PROFILE PAGE FUNCTIONALITY
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!requireAuth()) return;
    
    // Load user data
    loadUserProfile();
    
    // Setup tab navigation
    setupProfileTabs();
    
    // Setup forms
    setupProfileForms();
    
    // Load initial tab data
    loadOrders();
    loadAddresses();
    loadReviews();
});

// Load user profile data
function loadUserProfile() {
    const user = getCurrentUser();
    if (!user) return;
    
    document.getElementById('profileUserName').textContent = user.name;
    document.getElementById('profileUserEmail').textContent = user.email;
    
    // Fill edit form
    document.getElementById('editName').value = user.name || '';
    document.getElementById('editEmail').value = user.email || '';
    document.getElementById('editPhone').value = user.phone || '';
    document.getElementById('editDob').value = user.dob || '';
}

// Setup profile tabs
function setupProfileTabs() {
    const tabButtons = document.querySelectorAll('.profile-nav-item');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const tab = this.getAttribute('data-tab');
            if (!tab) return; // Skip logout button
            
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.profile-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.classList.add('active');
            document.getElementById(tab).classList.add('active');
        });
    });
}

// Setup profile forms
function setupProfileForms() {
    // Profile update form
    document.getElementById('profileForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const user = getCurrentUser();
        user.name = document.getElementById('editName').value;
        user.phone = document.getElementById('editPhone').value;
        user.dob = document.getElementById('editDob').value;
        
        saveCurrentUser(user);
        
        // Update display
        document.getElementById('profileUserName').textContent = user.name;
        
        const msgEl = document.getElementById('profileUpdateMessage');
        msgEl.textContent = 'Profile updated successfully!';
        msgEl.className = 'message success';
        
        setTimeout(() => {
            msgEl.textContent = '';
        }, 3000);
    });
    
    // Password update form
    document.getElementById('passwordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmNewPassword').value;
        
        if (newPassword !== confirmPassword) {
            const msgEl = document.getElementById('passwordUpdateMessage');
            msgEl.textContent = 'Passwords do not match!';
            msgEl.className = 'message error';
            return;
        }
        
        const msgEl = document.getElementById('passwordUpdateMessage');
        msgEl.textContent = 'Password updated successfully!';
        msgEl.className = 'message success';
        
        this.reset();
        
        setTimeout(() => {
            msgEl.textContent = '';
        }, 3000);
    });
    
    // Add address form
    const addAddressForm = document.getElementById('addAddressForm');
    if (addAddressForm) {
        addAddressForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newAddress = {
                id: Date.now(),
                label: document.getElementById('addressLabel').value,
                fullAddress: document.getElementById('addressFull').value,
                city: document.getElementById('addressCity').value,
                zipCode: document.getElementById('addressZip').value
            };
            
            const user = getCurrentUser();
            if (!user.addresses) user.addresses = [];
            user.addresses.push(newAddress);
            saveCurrentUser(user);
            
            // Close modal and reload addresses
            document.getElementById('addAddressModal').style.display = 'none';
            this.reset();
            loadAddresses();
            
            showNotification('Address added successfully!', 'success');
        });
    }
}

// Load orders
function loadOrders() {
    const container = document.getElementById('ordersList');
    if (!container) return;
    
    // Get orders from localStorage
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const user = getCurrentUser();
    const userOrders = allOrders.filter(o => o.customerEmail === user.email);
    
    if (userOrders.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: #999;">No orders yet</p>';
        return;
    }
    
    container.innerHTML = userOrders.reverse().map(order => `
        <div class="order-card">
            <div class="order-header">
                <div>
                    <h4>Order ${order.orderId}</h4>
                    <span style="color: #999; font-size: 0.9rem;">${new Date(order.date).toLocaleDateString()}</span>
                </div>
                <span class="status-badge ${order.status}">${order.status}</span>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <span>${item.name} x ${item.quantity}</span>
                        <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 1rem; padding-top: 1rem; border-top: 2px solid var(--border-color);">
                <strong>Total</strong>
                <strong style="color: var(--primary-color); font-size: 1.2rem;">$${order.total.toFixed(2)}</strong>
            </div>
            <div style="margin-top: 1rem; display: flex; gap: 1rem;">
                <a href="order-tracking.html?id=${order.orderId}" class="btn-primary" style="flex: 1; text-align: center;">Track Order</a>
                ${order.status === 'delivered' ? `<button class="btn-secondary" onclick="showReviewModal('${order.orderId}')">Write Review</button>` : ''}
            </div>
        </div>
    `).join('');
}

// Load addresses
function loadAddresses() {
    const container = document.getElementById('addressesList');
    if (!container) return;
    
    const user = getCurrentUser();
    const addresses = user.addresses || [];
    
    if (addresses.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: #999;">No saved addresses</p>';
        return;
    }
    
    container.innerHTML = addresses.map(address => `
        <div class="address-card">
            <div class="address-actions">
                <button class="icon-btn" onclick="editAddress(${address.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="icon-btn" onclick="deleteAddress(${address.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <h4>${address.label}</h4>
            <p>${address.fullAddress}</p>
            <p>${address.city}, ${address.zipCode}</p>
        </div>
    `).join('');
}

// Load reviews
function loadReviews() {
    const container = document.getElementById('reviewsList');
    if (!container) return;
    
    const user = getCurrentUser();
    const userReviews = reviews.filter(r => r.userId === user.id);
    
    if (userReviews.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: #999;">No reviews yet</p>';
        return;
    }
    
    container.innerHTML = userReviews.map(review => `
        <div class="review-card">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                <h4>${review.itemName}</h4>
                <span style="color: #999; font-size: 0.9rem;">${review.date}</span>
            </div>
            <div class="stars">${getStarRating(review.rating)}</div>
            <p style="margin-top: 0.5rem; color: #666;">${review.comment}</p>
        </div>
    `).join('');
}

// Show add address modal
function showAddAddressModal() {
    document.getElementById('addAddressModal').style.display = 'block';
}

// Delete address
function deleteAddress(addressId) {
    if (!confirm('Are you sure you want to delete this address?')) return;
    
    const user = getCurrentUser();
    user.addresses = user.addresses.filter(a => a.id !== addressId);
    saveCurrentUser(user);
    loadAddresses();
    showNotification('Address deleted', 'success');
}

// Show review modal
function showReviewModal(orderId) {
    const modal = document.getElementById('reviewModal');
    modal.style.display = 'block';
    
    // Setup star rating
    const stars = document.querySelectorAll('.star-rating i');
    stars.forEach(star => {
        star.onclick = function() {
            const rating = this.getAttribute('data-rating');
            document.getElementById('reviewRating').value = rating;
            
            // Update star display
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.className = 'fas fa-star';
                } else {
                    s.className = 'far fa-star';
                }
            });
        };
    });
    
    // Handle form submission
    document.getElementById('reviewForm').onsubmit = function(e) {
        e.preventDefault();
        
        const rating = document.getElementById('reviewRating').value;
        const comment = document.getElementById('reviewText').value;
        
        if (!rating) {
            showNotification('Please select a rating', 'error');
            return;
        }
        
        showNotification('Review submitted successfully!', 'success');
        modal.style.display = 'none';
        this.reset();
    };
}

// Modal handlers
document.addEventListener('DOMContentLoaded', function() {
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(btn => {
        btn.onclick = function() {
            this.closest('.modal').style.display = 'none';
        };
    });
    
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
});





