// متغیرهای جهانی
let currentRestaurantId = null;
let currentMenuCategory = 'all';
let restaurants = [];
let cart = [];

// بارگذاری داده‌ها از فایل JSON
async function loadRestaurantsData() {
    try {
        const response = await fetch('../data.json');
        const data = await response.json();
        restaurants = data.restaurants;
        displayRestaurants();
        setupEventListeners();
    } catch (error) {
        console.error('خطا در بارگذاری داده‌ها:', error);
        document.getElementById('restaurants-list').innerHTML = 
            '<p class="error-message">خطا در بارگذاری داده‌ها. لطفا صفحه را مجددا بارگذاری کنید.</p>';
    }
}

// نمایش رستوران‌ها
function displayRestaurants(restaurantsToShow = restaurants) {
    const restaurantsList = document.getElementById('restaurants-list');
    restaurantsList.innerHTML = '';

    if (restaurantsToShow.length === 0) {
        restaurantsList.innerHTML = '<p class="no-result">رستورانی یافت نشد</p>';
        return;
    }

    restaurantsToShow.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.className = 'restaurant-card';
        restaurantCard.dataset.id = restaurant.id;

        restaurantCard.innerHTML = `
            <div class="restaurant-image">${restaurant.image}</div>
            <div class="restaurant-info">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <p class="restaurant-description">${restaurant.description}</p>
                <div class="restaurant-meta">
                    <span class="rating">⭐ ${restaurant.rating}</span>
                    <span class="delivery-time">${restaurant.deliveryTime}</span>
                    <span class="average-price">${restaurant.averagePrice.toLocaleString()} تومان</span>
                </div>
                <div class="restaurant-features">
                    ${restaurant.features.includes('delivery') ? '<span class="feature delivery">ارسال</span>' : ''}
                    ${restaurant.features.includes('discount') ? '<span class="feature discount">تخفیف</span>' : ''}
                    ${restaurant.features.includes('vegetarian') ? '<span class="feature vegetarian">گیاهی</span>' : ''}
                </div>
            </div>
        `;

        restaurantCard.addEventListener('click', () => showRestaurantMenu(restaurant.id));
        restaurantsList.appendChild(restaurantCard);
    });
}

// نمایش منوی رستوران
function showRestaurantMenu(restaurantId) {
    currentRestaurantId = restaurantId;
    const restaurant = restaurants.find(r => r.id === restaurantId);

    if (!restaurant) return;

    // به روز رسانی اطلاعات رستوران در بخش منو
    document.getElementById('restaurant-name').textContent = restaurant.name;
    document.getElementById('menu-rating').textContent = `⭐ ${restaurant.rating}`;
    document.getElementById('menu-delivery-time').textContent = `${restaurant.deliveryTime}`;
    document.getElementById('delivery-price').textContent = `هزینه ارسال: ${Math.round(restaurant.averagePrice / 3).toLocaleString()} تومان`;

    // نمایش منو و مخفی کردن لیست رستوران‌ها
    document.querySelector('.restaurants-section').classList.add('hidden');
    document.querySelector('.filters-section').classList.add('hidden');
    document.getElementById('menu-section').classList.remove('hidden');

    // نمایش آیتم‌های منو
    displayMenuItems();
}

// نمایش آیتم‌های منو
function displayMenuItems() {
    if (!currentRestaurantId) return;

    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = '';

    const restaurant = restaurants.find(r => r.id === currentRestaurantId);
    if (!restaurant || !restaurant.menu) return;

    const filteredItems = currentMenuCategory === 'all'
        ? restaurant.menu
        : restaurant.menu.filter(item => item.category === currentMenuCategory);

    if (filteredItems.length === 0) {
        menuItemsContainer.innerHTML = '<p class="no-result">هیچ آیتمی در این دسته‌بندی وجود ندارد</p>';
        return;
    }

    filteredItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';
        menuItemElement.dataset.id = item.id;

        menuItemElement.innerHTML = `
            <div class="item-image">${item.image}</div>
            <div class="item-content">
                <div class="item-title">
                    <h3>${item.name}</h3>
                    <span class="price">${item.price.toLocaleString()} تومان</span>
                </div>
                <p class="description">${item.description}</p>
                <button class="add-to-cart" onclick="addToCart(${item.id}, ${item.price}, '${item.name.replace(/'/g, "\\'")}')">افزودن به سبد خرید</button>
            </div>
        `;

        menuItemsContainer.appendChild(menuItemElement);
    });
}

// افزودن به سبد خرید
function addToCart(itemId, price, name) {
    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: itemId,
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    updateCartBadge();
    showNotification(`"${name}" به سبد خرید اضافه شد`);
}

// به روزرسانی نشان سبد خرید
function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (totalItems > 0) {
        cartBadge.textContent = totalItems;
        cartBadge.style.display = 'block';
    } else {
        cartBadge.style.display = 'none';
    }
}

// نمایش نوتیفیکیشن
function showNotification(message) {
    // ایجاد عنصر نوتیفیکیشن اگر وجود ندارد
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// بازگشت به لیست رستوران‌ها
function backToRestaurants() {
    document.getElementById('menu-section').classList.add('hidden');
    document.querySelector('.restaurants-section').classList.remove('hidden');
    document.querySelector('.filters-section').classList.remove('hidden');
    currentRestaurantId = null;
}

// فیلتر کردن رستوران‌ها
function filterRestaurants() {
    const selectedTypes = Array.from(document.querySelectorAll('input[type="checkbox"][name="type"]:checked'))
        .map(checkbox => checkbox.value);

    const selectedFeatures = Array.from(document.querySelectorAll('input[type="checkbox"][name="feature"]:checked'))
        .map(checkbox => checkbox.value);

    const priceRange = document.getElementById('price-range').value;
    const searchText = document.getElementById('restaurant-search').value.toLowerCase();
    const sortBy = document.getElementById('sort-by').value;

    let filteredRestaurants = restaurants.filter(restaurant => {
        // فیلتر بر اساس نوع رستوران
        if (selectedTypes.length > 0) {
            const hasSelectedType = selectedTypes.some(type => restaurant.type.includes(type));
            if (!hasSelectedType) return false;
        }

        // فیلتر بر اساس ویژگی‌ها
        if (selectedFeatures.length > 0) {
            const hasSelectedFeature = selectedFeatures.every(feature => restaurant.features.includes(feature));
            if (!hasSelectedFeature) return false;
        }

        // فیلتر بر اساس قیمت
        if (restaurant.averagePrice > priceRange) return false;

        // فیلتر بر اساس متن جستجو
        if (searchText && !restaurant.name.toLowerCase().includes(searchText) &&
            !restaurant.description.toLowerCase().includes(searchText)) {
            return false;
        }

        return true;
    });

    // مرتب‌سازی
    switch (sortBy) {
        case 'rating':
            filteredRestaurants.sort((a, b) => b.rating - a.rating);
            break;
        case 'delivery-time':
            filteredRestaurants.sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime));
            break;
        case 'price-low':
            filteredRestaurants.sort((a, b) => a.averagePrice - b.averagePrice);
            break;
        case 'price-high':
            filteredRestaurants.sort((a, b) => b.averagePrice - a.averagePrice);
            break;
        default:
            // پیش‌فرض: محبوبیت
            filteredRestaurants.sort((a, b) => b.rating - a.rating);
    }

    displayRestaurants(filteredRestaurants);
}

// تنظیم event listeners
function setupEventListeners() {
    // رویداد بازگشت به لیست رستوران‌ها
    document.getElementById('back-to-restaurants').addEventListener('click', backToRestaurants);

    // رویداد تغییر دسته‌بندی منو
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentMenuCategory = this.dataset.category;
            displayMenuItems();
        });
    });

    // رویدادهای فیلتر
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterRestaurants);
    });

    document.getElementById('price-range').addEventListener('input', function () {
        document.getElementById('price-value').textContent = `${parseInt(this.value).toLocaleString()} تومان`;
        filterRestaurants();
    });

    document.getElementById('sort-by').addEventListener('change', filterRestaurants);

    document.getElementById('restaurant-search').addEventListener('input', filterRestaurants);

    // دکمه مشاهده سبد خرید
    document.getElementById('view-cart').addEventListener('click', showCart);
}

// نمایش سبد خرید
function showCart() {
    if (cart.length === 0) {
        showNotification('سبد خرید شما خالی است');
        return;
    }
    
    // اینجا می‌توانید منطق نمایش سبد خرید را پیاده‌سازی کنید
    console.log('سبد خرید:', cart);
    alert('سبد خرید:\n' + cart.map(item => 
        `${item.name} - ${item.quantity} عدد - ${(item.price * item.quantity).toLocaleString()} تومان`
    ).join('\n'));
}

// راه‌اندازی اولیه
document.addEventListener('DOMContentLoaded', function () {
    // بارگذاری داده‌ها
    loadRestaurantsData();

    // مقدار اولیه برای نمایش محدوده قیمت
    const priceRange = document.getElementById('price-range');
    if (priceRange) {
        document.getElementById('price-value').textContent = `${parseInt(priceRange.value).toLocaleString()} تومان`;
    }
});