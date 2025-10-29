# 🍔 FoodHub - Food Delivery Web Application

A modern, fully-featured food delivery web application built with **HTML**, **CSS**, and **JavaScript**. Order delicious food from your favorite restaurants with a beautiful, responsive interface.

![FoodHub](https://img.shields.io/badge/FoodHub-v1.0-orange)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Table of Contents

- [Features](#features)
- [Demo Pages](#demo-pages)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Key Features](#key-features)
- [Screenshots](#screenshots)
- [Default Credentials](#default-credentials)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### 🏠 **Home Page**
- Beautiful hero banner with search functionality
- Popular dishes showcase
- Trending restaurants
- Special offers and discount coupons
- Customer testimonials
- How it works section

### 🍕 **Menu / Food Listing**
- **40+ Food Items** from various cuisines
- Advanced filtering system:
  - Search by name, restaurant, or cuisine
  - Filter by cuisine type (Italian, Chinese, Indian, Mexican, American, Japanese)
  - Dietary preference (Vegetarian/Non-Vegetarian)
  - Price range filters
  - Rating filters (4+, 3+)
- Multiple sorting options (Popularity, Price, Rating, Name)
- Quick view modal for item details
- Add to cart functionality

### 🛒 **Shopping Cart & Checkout**
- Real-time cart updates
- Quantity adjustment (add/remove items)
- Automatic price calculation
- Apply discount coupons
- Multi-step checkout process:
  - **Step 1:** Delivery details
  - **Step 2:** Payment method selection
- Payment options:
  - Cash on Delivery (COD)
  - Credit/Debit Card
  - UPI Payment
  - Digital Wallet

### 👤 **User Account Module**
- User registration and login
- Profile management
- Order history with status tracking
- Saved addresses management
- Review and rating system
- Password change functionality

### 📍 **Restaurant Module**
- Restaurant listing with filters
- Individual restaurant pages
- Menu display by restaurant
- Restaurant ratings and reviews
- Working hours and delivery time
- Cost for two information

### 🚚 **Order Tracking**
- Live order status updates:
  - Order Placed
  - Preparing Food
  - Out for Delivery
  - Delivered
- Animated timeline
- Delivery partner information
- Estimated delivery time
- Contact options (Call restaurant/delivery partner)

### 💳 **Payment Module**
- Multiple payment methods
- Payment success confirmation
- Order summary display
- Email confirmation (simulated)

### ⭐ **Review & Rating System**
- Rate food items and restaurants
- Write detailed reviews
- View average ratings
- Customer testimonials

### 🧑‍💼 **Admin Dashboard**
- Dashboard with statistics
- Manage restaurants (Add/Edit/Delete)
- Manage menu items (Add/Edit/Delete)
- Order management and status updates
- User management
- Delivery partner management
- Analytics and reports

### 📱 **Additional Features**
- Contact page with FAQ section
- Blog page with food articles and tips
- Fully responsive design (Mobile, Tablet, Desktop)
- Beautiful animations and transitions
- LocalStorage for data persistence
- Notification system

---

## 📄 Demo Pages

| Page | Description |
|------|-------------|
| `index.html` | Home page with hero banner and featured items |
| `menu.html` | Complete menu with filters and sorting |
| `cart.html` | Shopping cart and checkout |
| `restaurants.html` | Restaurant listing |
| `restaurant-detail.html` | Individual restaurant page |
| `login.html` | User login page |
| `register.html` | User registration |
| `profile.html` | User profile and account management |
| `order-tracking.html` | Live order tracking |
| `payment.html` | Payment success page |
| `contact.html` | Contact form and FAQ |
| `blog.html` | Food blog and offers |
| `admin.html` | Admin dashboard |

---

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.) - Optional

### Steps

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/yourusername/foodhub.git
   cd foodhub
   ```

2. **Open the Project**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):

   **Using VS Code Live Server:**
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   Then open `http://localhost:8000` in your browser

3. **Start Exploring!**
   - Browse the menu
   - Add items to cart
   - Create an account
   - Place an order
   - Try the admin dashboard

---

## 📖 Usage

### For Customers

1. **Browse Menu**
   - Click on "Menu" in the navigation
   - Use filters to find your favorite food
   - Click "Quick View" for details
   - Click "Add to Cart" to order

2. **Place an Order**
   - Add items to cart
   - Click cart icon (top right)
   - Apply coupon codes if available
   - Click "Proceed to Checkout"
   - Fill in delivery details
   - Select payment method
   - Place order

3. **Track Your Order**
   - After placing order, go to "Track Order"
   - Watch real-time status updates
   - Contact delivery partner if needed

4. **Manage Account**
   - Login to your account
   - View order history
   - Save delivery addresses
   - Write reviews for delivered orders

### For Admins

1. **Access Admin Dashboard**
   - Go to `admin.html`
   - Default credentials:
     - Email: `admin@foodhub.com`
     - Password: `admin123`

2. **Manage Content**
   - Add/Edit/Delete restaurants
   - Manage menu items
   - Update order status
   - View analytics

---

## 📁 Project Structure

```
FoodHub/
│
├── index.html              # Home page
├── menu.html              # Menu listing page
├── cart.html              # Shopping cart
├── restaurants.html       # Restaurant listing
├── restaurant-detail.html # Restaurant details
├── login.html            # Login page
├── register.html         # Registration page
├── profile.html          # User profile
├── order-tracking.html   # Order tracking
├── payment.html          # Payment success
├── contact.html          # Contact page
├── blog.html            # Blog page
├── admin.html           # Admin dashboard
│
├── css/
│   └── style.css        # Main stylesheet (2900+ lines)
│
├── js/
│   ├── data.js          # Sample data (40 menu items, restaurants)
│   ├── cart.js          # Shopping cart functionality
│   ├── auth.js          # Authentication system
│   ├── main.js          # Home page functions
│   ├── menu.js          # Menu page with filters
│   ├── checkout.js      # Checkout process
│   ├── restaurants.js   # Restaurant listing
│   ├── restaurant-detail.js  # Restaurant details
│   ├── profile.js       # User profile management
│   ├── tracking.js      # Order tracking
│   └── admin.js         # Admin dashboard
│
└── README.md           # This file
```

---

## 🛠 Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling and animations
  - CSS Grid & Flexbox
  - CSS Variables
  - Keyframe Animations
  - Media Queries (Responsive Design)
- **JavaScript (ES6+)** - Functionality and interactivity
  - LocalStorage API
  - DOM Manipulation
  - Event Handling
  - Dynamic Content Loading
- **Font Awesome** - Icons
- **Unsplash** - Food images

---

## 🎯 Key Features

### 🎨 Design Features
- Modern gradient backgrounds
- Smooth animations and transitions
- Card-based layouts
- Hover effects
- Responsive grid system
- Mobile-first approach

### ⚡ Functional Features
- **Cart Management**: Add, remove, update quantities
- **Search & Filter**: Multiple filter combinations
- **Coupon System**: Apply discount codes
- **User Authentication**: Login, Register, Logout
- **Order Tracking**: Real-time status simulation
- **Data Persistence**: LocalStorage integration
- **Notifications**: Toast notifications for actions
- **Modal Windows**: Quick view, checkout forms

### 🎭 Animations
- Fade in animations
- Slide in from left/right
- Scale in effects
- Bounce animations
- Pulse effects
- Hover transitions
- Loading animations

---

## 🔐 Default Credentials

### Admin Account
- **Email**: `admin@foodhub.com`
- **Password**: `admin123`

### Test User Account
- **Email**: `john@example.com`
- **Password**: `password123`

### Sample Coupons
- `FIRST50` - 50% off on first order (Min order: $20)
- `WEEKEND30` - 30% off on weekend orders (Min order: $15)
- `FREEDEL` - Free delivery (Min order: $30)
- `STUDENT25` - 25% student discount (Min order: $10)
- `SAVE10` - $10 off on orders above $50

---

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

**Responsive Breakpoints:**
- 📱 Mobile: < 480px
- 📱 Tablet: 480px - 768px
- 💻 Laptop: 768px - 1024px
- 🖥️ Desktop: > 1024px

---

## 🎨 Color Scheme

```css
Primary Color:    #ff6b6b (Red/Pink)
Secondary Color:  #4ecdc4 (Teal)
Accent Color:     #ffe66d (Yellow)
Dark Color:       #2d3436 (Dark Gray)
Light Color:      #f8f9fa (Light Gray)
Success Color:    #51cf66 (Green)
Error Color:      #ff6b6b (Red)
```

---

## 📸 Features Overview

### 🍕 40 Menu Items Including:
- **Pizzas**: Margherita, Pepperoni, Veggie, BBQ Chicken
- **Burgers**: Beef Burger, Veggie Burger, Cheeseburger Deluxe
- **Indian**: Chicken Biryani, Butter Chicken, Paneer Tikka, Dal Makhani
- **Japanese**: Sushi Platter, California Roll, Chicken Teriyaki, Shrimp Tempura
- **Mexican**: Tacos, Quesadilla, Nachos, Guacamole
- **Chinese**: Pad Thai, Fried Rice, Spring Rolls, Tom Yum Soup
- **Pasta**: Chicken Alfredo, Mushroom Risotto
- **Desserts**: Chocolate Brownie, Tiramisu, Ice Cream Sundae
- **And much more!**

### 🏪 8 Restaurants:
1. Pizza Palace (Italian)
2. Spice Garden (Indian)
3. Burger House (American)
4. Thai Delight (Asian)
5. Sakura Sushi (Japanese)
6. El Mexicano (Mexican)
7. Sweet Treats (Desserts)
8. Fresh Bakes (Bakery)

---

## 🚧 Future Enhancements

- [ ] Backend integration (Node.js/PHP)
- [ ] Database integration (MySQL/MongoDB)
- [ ] Real payment gateway integration
- [ ] Google Maps integration for delivery tracking
- [ ] Real-time notifications with WebSockets
- [ ] Image upload for reviews
- [ ] Social media sharing
- [ ] Email notifications
- [ ] Advanced analytics dashboard
- [ ] Multi-language support

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Developer

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for beautiful food images
- [Font Awesome](https://fontawesome.com) for icons
- Inspiration from popular food delivery apps

---

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact via email
- Check the FAQ section in the Contact page

---

<div align="center">

### ⭐ If you like this project, please give it a star! ⭐

**Made with ❤️ for food lovers everywhere**

</div>

---

## 🎉 Quick Start Guide

### New User Journey

1. **Open** `index.html` in your browser
2. **Browse** popular dishes on the home page
3. **Click** "Menu" to see all 40 food items
4. **Filter** by cuisine, diet, price, or rating
5. **Add** items to your cart
6. **Register** a new account (or use test credentials)
7. **Checkout** and place your order
8. **Track** your order in real-time
9. **Review** your order after delivery

### Admin Journey

1. **Open** `admin.html`
2. **Login** with admin credentials
3. **View** dashboard statistics
4. **Manage** restaurants, menu items, and orders
5. **Update** order statuses
6. **View** user data and delivery partners

---

**Happy Ordering! 🍕🍔🍜**










