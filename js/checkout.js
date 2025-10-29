// ========================================
// CHECKOUT FUNCTIONALITY
// ========================================

let appliedCoupon = null;
let currentStep = 1;

document.addEventListener('DOMContentLoaded', function() {
    loadCartItems();
    setupCheckout();
});

// Load cart items on cart page
function loadCartItems() {
    const container = document.getElementById('cartItemsArea');
    const emptyCart = document.getElementById('emptyCart');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
        document.querySelector('.order-summary').style.display = 'none';
        return;
    }
    
    container.style.display = 'block';
    if (emptyCart) emptyCart.style.display = 'none';
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="restaurant-info">
                    <i class="fas fa-store"></i> ${item.restaurant}
                </p>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span style="margin: 0 1rem; font-weight: bold;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    updateOrderSummary();
}

// Update order summary
function updateOrderSummary() {
    const subtotal = getCartTotal();
    let deliveryFee = subtotal > 30 ? 0 : 5.00;
    const tax = subtotal * 0.10;
    let discount = 0;
    
    // Apply coupon discount
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percentage') {
            discount = subtotal * (appliedCoupon.discount / 100);
        } else if (appliedCoupon.type === 'fixed') {
            discount = appliedCoupon.discount;
            if (appliedCoupon.code === 'FREEDEL') {
                deliveryFee = 0;
                discount = 5; // Show delivery fee as discount
            }
        }
    }
    
    const total = subtotal + deliveryFee + tax - discount;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('deliveryFee').textContent = deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    
    // Show/hide discount row
    const discountRow = document.getElementById('discountRow');
    if (discount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('discount').textContent = `-$${discount.toFixed(2)}`;
    } else {
        discountRow.style.display = 'none';
    }
}

// Apply coupon
function applyCoupon() {
    const couponInput = document.getElementById('couponInput');
    const couponCode = couponInput.value.trim().toUpperCase();
    const messageEl = document.getElementById('couponMessage');
    
    if (!couponCode) {
        showCouponMessage('Please enter a coupon code', 'error');
        return;
    }
    
    const coupon = coupons.find(c => c.code === couponCode);
    
    if (!coupon) {
        showCouponMessage('Invalid coupon code', 'error');
        return;
    }
    
    const subtotal = getCartTotal();
    if (subtotal < coupon.minOrder) {
        showCouponMessage(`Minimum order of $${coupon.minOrder} required`, 'error');
        return;
    }
    
    appliedCoupon = coupon;
    showCouponMessage(`Coupon applied! ${coupon.description}`, 'success');
    updateOrderSummary();
}

// Show coupon message
function showCouponMessage(message, type) {
    const messageEl = document.getElementById('couponMessage');
    messageEl.textContent = message;
    messageEl.className = `message ${type}`;
    messageEl.style.display = 'block';
    
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 3000);
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'error');
        return;
    }
    
    if (!isLoggedIn()) {
        showNotification('Please login to continue', 'error');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return;
    }
    
    // Show checkout modal
    const modal = document.getElementById('checkoutModal');
    modal.style.display = 'block';
    currentStep = 1;
    showStep(1);
    
    // Pre-fill user data if available
    const currentUser = getCurrentUser();
    if (currentUser) {
        document.getElementById('deliveryName').value = currentUser.name || '';
        document.getElementById('deliveryEmail').value = currentUser.email || '';
        document.getElementById('deliveryPhone').value = currentUser.phone || '';
    }
}

// Setup checkout form
function setupCheckout() {
    const checkoutForm = document.getElementById('checkoutForm');
    if (!checkoutForm) return;
    
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        placeOrder();
    });
    
    // Payment method change handler
    const paymentMethods = document.querySelectorAll('input[name="payment"]');
    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            const cardDetails = document.getElementById('cardDetails');
            if (this.value === 'card') {
                cardDetails.style.display = 'block';
            } else {
                cardDetails.style.display = 'none';
            }
        });
    });
}

// Show checkout step
function showStep(step) {
    document.querySelectorAll('.checkout-step-content').forEach(content => {
        content.style.display = 'none';
    });
    
    document.getElementById(`step${step}`).style.display = 'block';
    
    document.querySelectorAll('.step').forEach((stepEl, index) => {
        if (index < step) {
            stepEl.classList.add('active');
        } else {
            stepEl.classList.remove('active');
        }
    });
    
    currentStep = step;
}

// Next step
function nextStep() {
    if (currentStep === 1) {
        // Validate delivery details
        const name = document.getElementById('deliveryName').value;
        const phone = document.getElementById('deliveryPhone').value;
        const email = document.getElementById('deliveryEmail').value;
        const address = document.getElementById('deliveryAddress').value;
        const city = document.getElementById('deliveryCity').value;
        const zip = document.getElementById('deliveryZip').value;
        const state = document.getElementById('deliveryState').value;
        
        if (!name || !phone || !email || !address || !city || !zip || !state) {
            showNotification('Please fill all required fields', 'error');
            return;
        }
        
        // Update checkout total
        const total = calculateFinalTotal();
        document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
        
        showStep(2);
    }
}

// Previous step
function previousStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}

// Calculate final total
function calculateFinalTotal() {
    const subtotal = getCartTotal();
    let deliveryFee = subtotal > 30 ? 0 : 5.00;
    const tax = subtotal * 0.10;
    let discount = 0;
    
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percentage') {
            discount = subtotal * (appliedCoupon.discount / 100);
        } else if (appliedCoupon.type === 'fixed') {
            discount = appliedCoupon.discount;
            if (appliedCoupon.code === 'FREEDEL') {
                deliveryFee = 0;
            }
        }
    }
    
    return subtotal + deliveryFee + tax - discount;
}

// Place order
function placeOrder() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const total = calculateFinalTotal();
    
    // Create order object
    const order = {
        orderId: 'ORD-' + Date.now(),
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        total: total,
        paymentMethod: getPaymentMethodName(paymentMethod),
        deliveryAddress: `${document.getElementById('deliveryAddress').value}, ${document.getElementById('deliveryCity').value}, ${document.getElementById('deliveryState').value} ${document.getElementById('deliveryZip').value}`,
        customerName: document.getElementById('deliveryName').value,
        customerPhone: document.getElementById('deliveryPhone').value,
        customerEmail: document.getElementById('deliveryEmail').value,
        status: 'placed',
        date: new Date().toISOString()
    };
    
    // Save order to localStorage
    localStorage.setItem('lastOrder', JSON.stringify(order));
    
    // Add to orders list
    let allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    allOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(allOrders));
    
    // Clear cart
    clearCart();
    
    // Close modal
    document.getElementById('checkoutModal').style.display = 'none';
    
    // Show success notification
    showNotification('Order placed successfully!', 'success');
    
    // Redirect to payment page
    setTimeout(() => {
        window.location.href = 'payment.html';
    }, 1500);
}

// Get payment method name
function getPaymentMethodName(method) {
    const methods = {
        'cod': 'Cash on Delivery',
        'card': 'Credit/Debit Card',
        'upi': 'UPI Payment',
        'wallet': 'Digital Wallet'
    };
    return methods[method] || 'Cash on Delivery';
}

// Close modal handlers
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





