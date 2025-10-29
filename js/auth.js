// ========================================
// AUTHENTICATION FUNCTIONALITY
// ========================================

// Get current user from localStorage
function getCurrentUser() {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
}

// Save current user to localStorage
function saveCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Register new user
function registerUser(name, email, phone, password) {
    // Check if email already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return false;
    }
    
    // Create new user
    const newUser = {
        id: users.length + 1,
        name,
        email,
        phone,
        password,
        role: 'user',
        addresses: [],
        orders: []
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    return true;
}

// Login user
function loginUser(email, password) {
    // Load users from localStorage if available
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Remove password before saving to localStorage
        const { password: _, ...userWithoutPassword } = user;
        saveCurrentUser(userWithoutPassword);
        return true;
    }
    
    return false;
}

// Logout user
function logoutUser() {
    localStorage.removeItem('currentUser');
    showNotification('Logged out successfully', 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Check if user is logged in
function isLoggedIn() {
    return getCurrentUser() !== null;
}

// Update auth button
function updateAuthButton() {
    const authBtn = document.getElementById('authBtn');
    if (!authBtn) return;
    
    const currentUser = getCurrentUser();
    
    if (currentUser) {
        authBtn.textContent = currentUser.name.split(' ')[0];
        authBtn.href = 'profile.html';
    } else {
        authBtn.textContent = 'Login';
        authBtn.href = 'login.html';
    }
}

// Require authentication
function requireAuth() {
    if (!isLoggedIn()) {
        showNotification('Please login to continue', 'error');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return false;
    }
    return true;
}

// Initialize auth on page load
document.addEventListener('DOMContentLoaded', function() {
    updateAuthButton();
});





