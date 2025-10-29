// ========================================
// ORDER TRACKING FUNCTIONALITY
// ========================================

let currentOrderStatus = 'preparing';
let orderStatusIndex = 1;

document.addEventListener('DOMContentLoaded', function() {
    loadOrderTrackingInfo();
    simulateOrderProgress();
});

// Load order tracking information
function loadOrderTrackingInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('id');
    
    // Get order from localStorage
    const lastOrder = JSON.parse(localStorage.getItem('lastOrder') || '{}');
    
    if (orderId || lastOrder.orderId) {
        const displayOrderId = orderId || lastOrder.orderId;
        document.getElementById('orderId').textContent = displayOrderId;
        
        // Load order items
        if (lastOrder.items) {
            loadOrderItems(lastOrder.items, lastOrder.total);
        }
        
        // Load delivery address
        if (lastOrder.deliveryAddress) {
            document.getElementById('deliveryAddress').textContent = lastOrder.deliveryAddress;
        }
    }
}

// Load order items
function loadOrderItems(items, total) {
    const container = document.getElementById('orderItems');
    if (!container) return;
    
    container.innerHTML = items.map(item => `
        <div style="display: flex; justify-content: space-between; padding: 0.8rem 0; border-bottom: 1px solid var(--border-color);">
            <span>${item.name} x ${item.quantity}</span>
            <span style="font-weight: 600;">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    document.getElementById('orderTotal').textContent = `$${total.toFixed(2)}`;
}

// Simulate order progress
function simulateOrderProgress() {
    const statuses = ['placed', 'preparing', 'out-for-delivery', 'delivered'];
    orderStatusIndex = 1; // Start at preparing
    
    // Update status every 5 seconds for demo
    setInterval(() => {
        if (orderStatusIndex < statuses.length - 1) {
            orderStatusIndex++;
            updateOrderStatus(statuses[orderStatusIndex]);
        }
    }, 10000); // 10 seconds for demo (in real app, this would be based on real-time updates)
    
    // Show delivery partner info when out for delivery
    setTimeout(() => {
        if (orderStatusIndex >= 2) {
            showDeliveryPartnerInfo();
        }
    }, 20000);
}

// Update order status
function updateOrderStatus(status) {
    const statusMap = {
        'placed': 'status-placed',
        'preparing': 'status-preparing',
        'out-for-delivery': 'status-out-for-delivery',
        'delivered': 'status-delivered'
    };
    
    // Update timeline items
    Object.keys(statusMap).forEach(key => {
        const element = document.getElementById(statusMap[key]);
        element.classList.remove('active', 'completed');
        
        if (key === status) {
            element.classList.add('active');
            updateTime(element);
        } else if (Object.keys(statusMap).indexOf(key) < Object.keys(statusMap).indexOf(status)) {
            element.classList.add('completed');
        }
    });
    
    // Show delivery partner when out for delivery
    if (status === 'out-for-delivery' || status === 'delivered') {
        showDeliveryPartnerInfo();
    }
    
    currentOrderStatus = status;
}

// Update time for timeline item
function updateTime(element) {
    const timeSpan = element.querySelector('.time');
    const now = new Date();
    timeSpan.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

// Show delivery partner info
function showDeliveryPartnerInfo() {
    const container = document.getElementById('deliveryPartner');
    if (!container) return;
    
    // Get a random delivery partner
    const partner = deliveryPartners[Math.floor(Math.random() * deliveryPartners.length)];
    
    document.getElementById('partnerName').textContent = partner.name;
    document.getElementById('partnerPhone').textContent = partner.phone;
    
    container.style.display = 'block';
}

// Call delivery partner
function callPartner() {
    const phone = document.getElementById('partnerPhone').textContent;
    showNotification(`Calling ${phone}...`, 'info');
}

// Show help modal
function showHelpModal() {
    document.getElementById('helpModal').style.display = 'block';
}

// Call restaurant
function callRestaurant() {
    showNotification('Calling restaurant...', 'info');
}

// Cancel order
function cancelOrder() {
    if (currentOrderStatus === 'delivered') {
        showNotification('Cannot cancel delivered order', 'error');
        return;
    }
    
    if (confirm('Are you sure you want to cancel this order?')) {
        showNotification('Order cancelled successfully', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
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





