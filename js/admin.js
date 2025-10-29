// ========================================
// ADMIN DASHBOARD FUNCTIONALITY
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Setup navigation
    setupAdminNavigation();
    
    // Load initial data
    loadDashboardData();
    loadRestaurantsData();
    loadMenuData();
    loadOrdersData();
    loadUsersData();
    loadDeliveryPartnersData();
});

// Setup admin navigation
function setupAdminNavigation() {
    const navItems = document.querySelectorAll('.admin-nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const section = this.getAttribute('data-section');
            if (!section) return;
            
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active to clicked item
            this.classList.add('active');
            
            // Hide all sections
            document.querySelectorAll('.admin-section').forEach(sec => {
                sec.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(section).classList.add('active');
            
            // Update section title
            const titles = {
                'dashboard': 'Dashboard',
                'restaurants': 'Manage Restaurants',
                'menu': 'Manage Menu Items',
                'orders': 'Manage Orders',
                'users': 'Manage Users',
                'delivery': 'Delivery Partners',
                'analytics': 'Analytics & Reports'
            };
            document.getElementById('sectionTitle').textContent = titles[section] || 'Dashboard';
        });
    });
}

// Load dashboard data
function loadDashboardData() {
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    // Load recent orders table
    const tableBody = document.querySelector('#recentOrdersTable');
    if (tableBody && allOrders.length > 0) {
        const recentOrders = allOrders.slice(-5).reverse();
        tableBody.innerHTML = recentOrders.map(order => `
            <tr>
                <td>${order.orderId}</td>
                <td>${order.customerName || 'Customer'}</td>
                <td>$${order.total.toFixed(2)}</td>
                <td><span class="status-badge ${order.status}">${order.status}</span></td>
            </tr>
        `).join('');
    }
}

// Load restaurants data
function loadRestaurantsData() {
    const tableBody = document.querySelector('#restaurantsTable tbody');
    if (!tableBody) return;
    
    tableBody.innerHTML = restaurants.map(restaurant => `
        <tr>
            <td>${restaurant.name}</td>
            <td>${restaurant.cuisine}</td>
            <td>${restaurant.rating} ⭐</td>
            <td><span class="status-badge delivered">Active</span></td>
            <td>
                <button class="icon-btn" onclick="editRestaurant(${restaurant.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="icon-btn" onclick="deleteRestaurant(${restaurant.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Load menu data
function loadMenuData() {
    const tableBody = document.querySelector('#menuTable tbody');
    if (!tableBody) return;
    
    tableBody.innerHTML = menuItems.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.restaurant}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.category}</td>
            <td>
                <button class="icon-btn" onclick="editMenuItem(${item.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="icon-btn" onclick="deleteMenuItem(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Load orders data
function loadOrdersData() {
    const tableBody = document.querySelector('#ordersTable tbody');
    if (!tableBody) return;
    
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    if (allOrders.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 2rem;">No orders yet</td></tr>';
        return;
    }
    
    tableBody.innerHTML = allOrders.reverse().map(order => `
        <tr>
            <td>${order.orderId}</td>
            <td>${order.customerName || 'Customer'}</td>
            <td>${order.items.length} items</td>
            <td>$${order.total.toFixed(2)}</td>
            <td><span class="status-badge ${order.status}">${order.status}</span></td>
            <td>
                <button class="icon-btn" onclick="viewOrderDetails('${order.orderId}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="icon-btn" onclick="updateOrderStatus('${order.orderId}')">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Load users data
function loadUsersData() {
    const tableBody = document.querySelector('#usersTable tbody');
    if (!tableBody) return;
    
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const displayUsers = storedUsers.length > 0 ? storedUsers : users.filter(u => u.role === 'user');
    
    tableBody.innerHTML = displayUsers.map(user => `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone || 'N/A'}</td>
            <td>-</td>
            <td>
                <button class="icon-btn" onclick="viewUserDetails(${user.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="icon-btn" onclick="deleteUser(${user.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Load delivery partners data
function loadDeliveryPartnersData() {
    const tableBody = document.querySelector('#deliveryTable tbody');
    if (!tableBody) return;
    
    tableBody.innerHTML = deliveryPartners.map(partner => `
        <tr>
            <td>${partner.name}</td>
            <td>${partner.phone}</td>
            <td><span class="status-badge ${partner.status === 'available' ? 'delivered' : 'preparing'}">${partner.status}</span></td>
            <td>${partner.ordersDelivered}</td>
            <td>
                <button class="icon-btn" onclick="editDeliveryPartner(${partner.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="icon-btn" onclick="deleteDeliveryPartner(${partner.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Admin action functions
function showAddRestaurantModal() {
    alert('Add Restaurant Modal - Feature coming soon!');
}

function editRestaurant(id) {
    alert(`Edit Restaurant ID: ${id} - Feature coming soon!`);
}

function deleteRestaurant(id) {
    if (confirm('Are you sure you want to delete this restaurant?')) {
        alert('Restaurant deleted');
    }
}

function showAddMenuModal() {
    alert('Add Menu Item Modal - Feature coming soon!');
}

function editMenuItem(id) {
    alert(`Edit Menu Item ID: ${id} - Feature coming soon!`);
}

function deleteMenuItem(id) {
    if (confirm('Are you sure you want to delete this menu item?')) {
        alert('Menu item deleted');
    }
}

function viewOrderDetails(orderId) {
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = allOrders.find(o => o.orderId === orderId);
    
    if (order) {
        let details = `Order ID: ${order.orderId}\n`;
        details += `Customer: ${order.customerName}\n`;
        details += `Total: $${order.total.toFixed(2)}\n`;
        details += `Status: ${order.status}\n\n`;
        details += `Items:\n`;
        order.items.forEach(item => {
            details += `- ${item.name} x ${item.quantity}: $${(item.price * item.quantity).toFixed(2)}\n`;
        });
        
        alert(details);
    }
}

function updateOrderStatus(orderId) {
    const newStatus = prompt('Enter new status (placed/preparing/out-for-delivery/delivered):');
    if (newStatus) {
        alert(`Order ${orderId} status updated to: ${newStatus}`);
        loadOrdersData();
    }
}

function viewUserDetails(id) {
    const user = users.find(u => u.id === id);
    if (user) {
        alert(`User: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone || 'N/A'}`);
    }
}

function deleteUser(id) {
    if (confirm('Are you sure you want to delete this user?')) {
        alert('User deleted');
    }
}

function showAddDeliveryPartnerModal() {
    alert('Add Delivery Partner Modal - Feature coming soon!');
}

function editDeliveryPartner(id) {
    alert(`Edit Delivery Partner ID: ${id} - Feature coming soon!`);
}

function deleteDeliveryPartner(id) {
    if (confirm('Are you sure you want to delete this delivery partner?')) {
        alert('Delivery partner deleted');
    }
}





