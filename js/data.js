// ========================================
// SAMPLE DATA FOR FOODHUB
// ========================================

// Menu Items Data
const menuItems = [
    {
        id: 1,
        name: "Margherita Pizza",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
        rating: 4.5,
        reviews: 128,
        cuisine: "Italian",
        diet: "veg",
        restaurantId: 1,
        restaurant: "Pizza Palace",
        category: "Pizza",
        description: "Classic pizza with fresh mozzarella and basil"
    },
    {
        id: 2,
        name: "Chicken Biryani",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
        rating: 4.8,
        reviews: 256,
        cuisine: "Indian",
        diet: "non-veg",
        restaurantId: 2,
        restaurant: "Spice Garden",
        category: "Main Course",
        description: "Aromatic basmati rice with tender chicken"
    },
    {
        id: 3,
        name: "Beef Burger",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
        rating: 4.6,
        reviews: 189,
        cuisine: "American",
        diet: "non-veg",
        restaurantId: 3,
        restaurant: "Burger House",
        category: "Burgers",
        description: "Juicy beef patty with fresh vegetables"
    },
    {
        id: 4,
        name: "Pad Thai",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400",
        rating: 4.7,
        reviews: 145,
        cuisine: "Chinese",
        diet: "non-veg",
        restaurantId: 4,
        restaurant: "Thai Delight",
        category: "Noodles",
        description: "Stir-fried rice noodles with shrimp and peanuts"
    },
    {
        id: 5,
        name: "Caesar Salad",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
        rating: 4.3,
        reviews: 92,
        cuisine: "American",
        diet: "veg",
        restaurantId: 3,
        restaurant: "Burger House",
        category: "Salads",
        description: "Fresh romaine lettuce with Caesar dressing"
    },
    {
        id: 6,
        name: "Sushi Platter",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
        rating: 4.9,
        reviews: 312,
        cuisine: "Japanese",
        diet: "non-veg",
        restaurantId: 5,
        restaurant: "Sakura Sushi",
        category: "Japanese",
        description: "Assorted fresh sushi and sashimi"
    },
    {
        id: 7,
        name: "Paneer Tikka",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
        rating: 4.6,
        reviews: 178,
        cuisine: "Indian",
        diet: "veg",
        restaurantId: 2,
        restaurant: "Spice Garden",
        category: "Appetizers",
        description: "Grilled cottage cheese with aromatic spices"
    },
    {
        id: 8,
        name: "Tacos Al Pastor",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400",
        rating: 4.7,
        reviews: 203,
        cuisine: "Mexican",
        diet: "non-veg",
        restaurantId: 6,
        restaurant: "El Mexicano",
        category: "Mexican",
        description: "Three tacos with marinated pork and pineapple"
    },
    {
        id: 9,
        name: "Veggie Pizza",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400",
        rating: 4.4,
        reviews: 156,
        cuisine: "Italian",
        diet: "veg",
        restaurantId: 1,
        restaurant: "Pizza Palace",
        category: "Pizza",
        description: "Loaded with fresh vegetables and cheese"
    },
    {
        id: 10,
        name: "Chocolate Brownie",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400",
        rating: 4.8,
        reviews: 267,
        cuisine: "American",
        diet: "veg",
        restaurantId: 7,
        restaurant: "Sweet Treats",
        category: "Desserts",
        description: "Warm chocolate brownie with vanilla ice cream"
    },
    {
        id: 11,
        name: "Chicken Wings",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400",
        rating: 4.5,
        reviews: 198,
        cuisine: "American",
        diet: "non-veg",
        restaurantId: 3,
        restaurant: "Burger House",
        category: "Appetizers",
        description: "Crispy wings with your choice of sauce"
    },
    {
        id: 12,
        name: "Veg Fried Rice",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400",
        rating: 4.4,
        reviews: 134,
        cuisine: "Chinese",
        diet: "veg",
        restaurantId: 4,
        restaurant: "Thai Delight",
        category: "Rice",
        description: "Flavorful fried rice with mixed vegetables"
    },
    {
        id: 13,
        name: "Pepperoni Pizza",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
        rating: 4.7,
        reviews: 215,
        cuisine: "Italian",
        diet: "non-veg",
        restaurantId: 1,
        restaurant: "Pizza Palace",
        category: "Pizza",
        description: "Classic pepperoni with extra cheese"
    },
    {
        id: 14,
        name: "Grilled Salmon",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
        rating: 4.9,
        reviews: 178,
        cuisine: "American",
        diet: "non-veg",
        restaurantId: 5,
        restaurant: "Sakura Sushi",
        category: "Main Course",
        description: "Fresh Atlantic salmon with lemon butter sauce"
    },
    {
        id: 15,
        name: "Vegetable Spring Rolls",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1584714268709-c3dd9c92b3d3?w=400",
        rating: 4.3,
        reviews: 98,
        cuisine: "Chinese",
        diet: "veg",
        restaurantId: 4,
        restaurant: "Thai Delight",
        category: "Appetizers",
        description: "Crispy spring rolls with sweet chili sauce"
    },
    {
        id: 16,
        name: "Chicken Alfredo Pasta",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
        rating: 4.6,
        reviews: 187,
        cuisine: "Italian",
        diet: "non-veg",
        restaurantId: 1,
        restaurant: "Pizza Palace",
        category: "Pasta",
        description: "Creamy alfredo sauce with grilled chicken"
    },
    {
        id: 17,
        name: "Lamb Kebab Platter",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400",
        rating: 4.8,
        reviews: 234,
        cuisine: "Indian",
        diet: "non-veg",
        restaurantId: 2,
        restaurant: "Spice Garden",
        category: "Main Course",
        description: "Tender lamb kebabs with mint chutney"
    },
    {
        id: 18,
        name: "Fish Tacos",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400",
        rating: 4.5,
        reviews: 156,
        cuisine: "Mexican",
        diet: "non-veg",
        restaurantId: 6,
        restaurant: "El Mexicano",
        category: "Mexican",
        description: "Crispy fish with cabbage slaw and sauce"
    },
    {
        id: 19,
        name: "Mushroom Risotto",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1476124369491-c4b3c5f45f7e?w=400",
        rating: 4.7,
        reviews: 142,
        cuisine: "Italian",
        diet: "veg",
        restaurantId: 1,
        restaurant: "Pizza Palace",
        category: "Main Course",
        description: "Creamy risotto with wild mushrooms"
    },
    {
        id: 20,
        name: "BBQ Chicken Pizza",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
        rating: 4.6,
        reviews: 201,
        cuisine: "Italian",
        diet: "non-veg",
        restaurantId: 1,
        restaurant: "Pizza Palace",
        category: "Pizza",
        description: "BBQ sauce, grilled chicken, and red onions"
    },
    {
        id: 21,
        name: "Veggie Burger",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400",
        rating: 4.4,
        reviews: 123,
        cuisine: "American",
        diet: "veg",
        restaurantId: 3,
        restaurant: "Burger House",
        category: "Burgers",
        description: "Plant-based patty with all the fixings"
    },
    {
        id: 22,
        name: "Butter Chicken",
        price: 17.99,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
        rating: 4.9,
        reviews: 312,
        cuisine: "Indian",
        diet: "non-veg",
        restaurantId: 2,
        restaurant: "Spice Garden",
        category: "Main Course",
        description: "Creamy tomato-based curry with tender chicken"
    },
    {
        id: 23,
        name: "California Roll",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400",
        rating: 4.5,
        reviews: 167,
        cuisine: "Japanese",
        diet: "non-veg",
        restaurantId: 5,
        restaurant: "Sakura Sushi",
        category: "Sushi",
        description: "Crab, avocado, and cucumber roll"
    },
    {
        id: 24,
        name: "Chicken Quesadilla",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400",
        rating: 4.6,
        reviews: 189,
        cuisine: "Mexican",
        diet: "non-veg",
        restaurantId: 6,
        restaurant: "El Mexicano",
        category: "Mexican",
        description: "Grilled chicken with melted cheese"
    },
    {
        id: 25,
        name: "Tiramisu",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
        rating: 4.8,
        reviews: 198,
        cuisine: "Italian",
        diet: "veg",
        restaurantId: 1,
        restaurant: "Pizza Palace",
        category: "Desserts",
        description: "Classic Italian coffee-flavored dessert"
    },
    {
        id: 26,
        name: "Chicken Noodle Soup",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
        rating: 4.4,
        reviews: 145,
        cuisine: "Chinese",
        diet: "non-veg",
        restaurantId: 4,
        restaurant: "Thai Delight",
        category: "Soups",
        description: "Homemade chicken soup with noodles"
    },
    {
        id: 27,
        name: "Falafel Wrap",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400",
        rating: 4.5,
        reviews: 134,
        cuisine: "Mexican",
        diet: "veg",
        restaurantId: 6,
        restaurant: "El Mexicano",
        category: "Wraps",
        description: "Crispy falafel with tahini sauce"
    },
    {
        id: 28,
        name: "Shrimp Tempura",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
        rating: 4.7,
        reviews: 176,
        cuisine: "Japanese",
        diet: "non-veg",
        restaurantId: 5,
        restaurant: "Sakura Sushi",
        category: "Appetizers",
        description: "Lightly battered and fried shrimp"
    },
    {
        id: 29,
        name: "Cheese Fries",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1630431341973-02e1c72e2294?w=400",
        rating: 4.3,
        reviews: 201,
        cuisine: "American",
        diet: "veg",
        restaurantId: 3,
        restaurant: "Burger House",
        category: "Sides",
        description: "Crispy fries loaded with melted cheese"
    },
    {
        id: 30,
        name: "Mango Lassi",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400",
        rating: 4.6,
        reviews: 112,
        cuisine: "Indian",
        diet: "veg",
        restaurantId: 2,
        restaurant: "Spice Garden",
        category: "Beverages",
        description: "Sweet mango yogurt drink"
    },
    {
        id: 31,
        name: "Garlic Bread",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1617093727343-374698b8c9ae?w=400",
        rating: 4.4,
        reviews: 156,
        cuisine: "Italian",
        diet: "veg",
        restaurantId: 1,
        restaurant: "Pizza Palace",
        category: "Sides",
        description: "Toasted bread with garlic butter"
    },
    {
        id: 32,
        name: "Chicken Teriyaki",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1604908176997-4313c93450cc?w=400",
        rating: 4.7,
        reviews: 189,
        cuisine: "Japanese",
        diet: "non-veg",
        restaurantId: 5,
        restaurant: "Sakura Sushi",
        category: "Main Course",
        description: "Grilled chicken with teriyaki glaze"
    },
    {
        id: 33,
        name: "Nachos Supreme",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400",
        rating: 4.5,
        reviews: 167,
        cuisine: "Mexican",
        diet: "veg",
        restaurantId: 6,
        restaurant: "El Mexicano",
        category: "Appetizers",
        description: "Tortilla chips with cheese, salsa, and guacamole"
    },
    {
        id: 34,
        name: "Cheeseburger Deluxe",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400",
        rating: 4.7,
        reviews: 223,
        cuisine: "American",
        diet: "non-veg",
        restaurantId: 3,
        restaurant: "Burger House",
        category: "Burgers",
        description: "Double cheese, bacon, and special sauce"
    },
    {
        id: 35,
        name: "Dal Makhani",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
        rating: 4.6,
        reviews: 178,
        cuisine: "Indian",
        diet: "veg",
        restaurantId: 2,
        restaurant: "Spice Garden",
        category: "Main Course",
        description: "Creamy black lentils with butter"
    },
    {
        id: 36,
        name: "Ice Cream Sundae",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
        rating: 4.7,
        reviews: 145,
        cuisine: "American",
        diet: "veg",
        restaurantId: 7,
        restaurant: "Sweet Treats",
        category: "Desserts",
        description: "Vanilla ice cream with chocolate sauce and nuts"
    },
    {
        id: 37,
        name: "Tom Yum Soup",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
        rating: 4.5,
        reviews: 132,
        cuisine: "Chinese",
        diet: "non-veg",
        restaurantId: 4,
        restaurant: "Thai Delight",
        category: "Soups",
        description: "Spicy and sour Thai soup with shrimp"
    },
    {
        id: 38,
        name: "Caprese Salad",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400",
        rating: 4.4,
        reviews: 98,
        cuisine: "Italian",
        diet: "veg",
        restaurantId: 1,
        restaurant: "Pizza Palace",
        category: "Salads",
        description: "Fresh mozzarella, tomatoes, and basil"
    },
    {
        id: 39,
        name: "Chicken Satay",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400",
        rating: 4.6,
        reviews: 154,
        cuisine: "Chinese",
        diet: "non-veg",
        restaurantId: 4,
        restaurant: "Thai Delight",
        category: "Appetizers",
        description: "Grilled chicken skewers with peanut sauce"
    },
    {
        id: 40,
        name: "Guacamole & Chips",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400",
        rating: 4.5,
        reviews: 176,
        cuisine: "Mexican",
        diet: "veg",
        restaurantId: 6,
        restaurant: "El Mexicano",
        category: "Appetizers",
        description: "Fresh guacamole with tortilla chips"
    },
    // --- Newly added dishes ---
    {
        id: 41,
        name: "Penne Arrabbiata",
        price: 13.49,
        image: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=400",
        rating: 4.6,
        reviews: 121,
        cuisine: "Italian",
        diet: "veg",
        restaurantId: 1,
        restaurant: "Pizza Palace",
        category: "Pasta",
        description: "Spicy tomato sauce tossed with penne"
    },
    {
        id: 42,
        name: "Honey Garlic Chicken Wings",
        price: 12.49,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
        rating: 4.7,
        reviews: 164,
        cuisine: "American",
        diet: "non-veg",
        restaurantId: 3,
        restaurant: "Burger House",
        category: "Appetizers",
        description: "Crispy wings glazed with honey garlic sauce"
    },
    {
        id: 43,
        name: "Veg Hakka Noodles",
        price: 11.49,
        image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=400",
        rating: 4.4,
        reviews: 132,
        cuisine: "Chinese",
        diet: "veg",
        restaurantId: 4,
        restaurant: "Thai Delight",
        category: "Noodles",
        description: "Stir-fried noodles with crunchy veggies"
    },
    {
        id: 44,
        name: "Prawn Tempura Udon",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
        rating: 4.8,
        reviews: 147,
        cuisine: "Japanese",
        diet: "non-veg",
        restaurantId: 5,
        restaurant: "Sakura Sushi",
        category: "Noodles",
        description: "Udon in broth topped with prawn tempura"
    },
    {
        id: 45,
        name: "Veggie Nacho Bowl",
        price: 10.49,
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400",
        rating: 4.5,
        reviews: 118,
        cuisine: "Mexican",
        diet: "veg",
        restaurantId: 6,
        restaurant: "El Mexicano",
        category: "Snacks",
        description: "Nachos loaded with beans, salsa and cheese"
    },
    {
        id: 46,
        name: "Chocolate Lava Cake",
        price: 7.49,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
        rating: 4.9,
        reviews: 204,
        cuisine: "American",
        diet: "veg",
        restaurantId: 7,
        restaurant: "Sweet Treats",
        category: "Desserts",
        description: "Warm chocolate cake with molten center"
    },
    {
        id: 47,
        name: "Greek Salad",
        price: 9.49,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400",
        rating: 4.3,
        reviews: 96,
        cuisine: "American",
        diet: "veg",
        restaurantId: 3,
        restaurant: "Burger House",
        category: "Salads",
        description: "Crisp veggies with feta and olives"
    },
    {
        id: 48,
        name: "Tandoori Paneer Wrap",
        price: 11.49,
        image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=400",
        rating: 4.6,
        reviews: 139,
        cuisine: "Indian",
        diet: "veg",
        restaurantId: 2,
        restaurant: "Spice Garden",
        category: "Wraps",
        description: "Grilled paneer with veggies in soft wrap"
    }
];

// Restaurants Data
const restaurants = [
    {
        id: 1,
        name: "Pizza Palace",
        cuisine: "Italian",
        rating: 4.5,
        reviews: 450,
        deliveryTime: "30-40 mins",
        costForTwo: "$25",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500",
        type: "fast-food",
        address: "123 Main St, Downtown",
        workingHours: "10:00 AM - 11:00 PM"
    },
    {
        id: 2,
        name: "Spice Garden",
        cuisine: "Indian",
        rating: 4.7,
        reviews: 623,
        deliveryTime: "35-45 mins",
        costForTwo: "$30",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500",
        type: "fine-dining",
        address: "456 Park Ave, Midtown",
        workingHours: "11:00 AM - 10:30 PM"
    },
    {
        id: 3,
        name: "Burger House",
        cuisine: "American",
        rating: 4.4,
        reviews: 389,
        deliveryTime: "25-35 mins",
        costForTwo: "$20",
        image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500",
        type: "fast-food",
        address: "789 Broadway, City Center",
        workingHours: "9:00 AM - 12:00 AM"
    },
    {
        id: 4,
        name: "Thai Delight",
        cuisine: "Asian",
        rating: 4.6,
        reviews: 512,
        deliveryTime: "40-50 mins",
        costForTwo: "$28",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500",
        type: "fine-dining",
        address: "321 Oak St, Eastside",
        workingHours: "11:30 AM - 10:00 PM"
    },
    {
        id: 5,
        name: "Sakura Sushi",
        cuisine: "Japanese",
        rating: 4.8,
        reviews: 701,
        deliveryTime: "35-45 mins",
        costForTwo: "$35",
        image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=500",
        type: "fine-dining",
        address: "555 Sunset Blvd, Westside",
        workingHours: "12:00 PM - 11:00 PM"
    },
    {
        id: 6,
        name: "El Mexicano",
        cuisine: "Mexican",
        rating: 4.5,
        reviews: 445,
        deliveryTime: "30-40 mins",
        costForTwo: "$22",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500",
        type: "fast-food",
        address: "888 River Rd, Northside",
        workingHours: "10:00 AM - 11:30 PM"
    },
    {
        id: 7,
        name: "Sweet Treats",
        cuisine: "Desserts",
        rating: 4.7,
        reviews: 567,
        deliveryTime: "20-30 mins",
        costForTwo: "$15",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500",
        type: "cafe",
        address: "234 Coffee Lane, Downtown",
        workingHours: "8:00 AM - 10:00 PM"
    },
    {
        id: 8,
        name: "Fresh Bakes",
        cuisine: "Bakery",
        rating: 4.6,
        reviews: 423,
        deliveryTime: "25-35 mins",
        costForTwo: "$18",
        image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=500",
        type: "bakery",
        address: "777 Bread St, Southside",
        workingHours: "7:00 AM - 9:00 PM"
    }
];

// Coupons Data
const coupons = [
    {
        code: "FIRST50",
        discount: 50,
        type: "percentage",
        description: "50% off on first order",
        minOrder: 20
    },
    {
        code: "WEEKEND30",
        discount: 30,
        type: "percentage",
        description: "30% off on weekend orders",
        minOrder: 15
    },
    {
        code: "FREEDEL",
        discount: 5,
        type: "fixed",
        description: "Free delivery",
        minOrder: 30
    },
    {
        code: "STUDENT25",
        discount: 25,
        type: "percentage",
        description: "25% student discount",
        minOrder: 10
    },
    {
        code: "SAVE10",
        discount: 10,
        type: "fixed",
        description: "$10 off on orders above $50",
        minOrder: 50
    }
];

// Sample Users Data
let users = [
    {
        id: 1,
        name: "Admin User",
        email: "admin@foodhub.com",
        phone: "+1234567890",
        password: "admin123",
        role: "admin",
        addresses: []
    },
    {
        id: 2,
        name: "John Doe",
        email: "john@example.com",
        phone: "+1234567891",
        password: "password123",
        role: "user",
        addresses: [
            {
                id: 1,
                label: "Home",
                fullAddress: "123 Main Street, Apt 4B",
                city: "New York",
                zipCode: "10001"
            }
        ]
    }
];

// Sample Orders Data
let orders = [
    {
        id: "ORD-001",
        userId: 2,
        items: [
            { id: 1, name: "Margherita Pizza", price: 12.99, quantity: 2 },
            { id: 5, name: "Caesar Salad", price: 8.99, quantity: 1 }
        ],
        total: 34.97,
        status: "delivered",
        date: "2025-10-10",
        deliveryAddress: "123 Main Street, Apt 4B, New York, USA 10001",
        paymentMethod: "Cash on Delivery"
    },
    {
        id: "ORD-002",
        userId: 2,
        items: [
            { id: 2, name: "Chicken Biryani", price: 15.99, quantity: 1 }
        ],
        total: 20.99,
        status: "preparing",
        date: "2025-10-14",
        deliveryAddress: "123 Main Street, Apt 4B, New York, USA 10001",
        paymentMethod: "Credit Card"
    }
];

// Delivery Partners Data
let deliveryPartners = [
    {
        id: 1,
        name: "Mike Johnson",
        phone: "+1234567892",
        status: "available",
        ordersDelivered: 234
    },
    {
        id: 2,
        name: "Sarah Williams",
        phone: "+1234567893",
        status: "busy",
        ordersDelivered: 189
    },
    {
        id: 3,
        name: "David Brown",
        phone: "+1234567894",
        status: "available",
        ordersDelivered: 312
    }
];

// Reviews Data
let reviews = [
    {
        id: 1,
        userId: 2,
        itemId: 1,
        itemName: "Margherita Pizza",
        rating: 5,
        comment: "Absolutely delicious! Best pizza in town.",
        date: "2025-10-11"
    },
    {
        id: 2,
        userId: 2,
        itemId: 2,
        itemName: "Chicken Biryani",
        rating: 5,
        comment: "Authentic taste, loved it!",
        date: "2025-10-12"
    }
];

