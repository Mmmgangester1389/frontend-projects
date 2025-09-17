// داده‌های نمونه رستوران‌ها
const restaurants = [
    {
        id: 1,
        name: "رستوران ایرانی نگین",
        description: "غذاهای اصیل ایرانی در محیطی سنتی",
        image: "🍛",
        rating: 4.7,
        deliveryTime: "35 دقیقه",
        type: ["iranian", "traditional"],
        features: ["delivery", "discount"],
        averagePrice: 45000
    },
    {
        id: 2,
        name: "پیتزای ایتالیایی",
        description: "پیتزاهای ایتالیایی اصل با خمیر مخصوص",
        image: "🍕",
        rating: 4.5,
        deliveryTime: "45 دقیقه",
        type: ["italian", "fastfood"],
        features: ["delivery"],
        averagePrice: 65000
    },
    {
        id: 3,
        name: "برگر هاوس",
        description: "برگرهای خوشمزه با گوشت کبابی",
        image: "🍔",
        rating: 4.3,
        deliveryTime: "25 دقیقه",
        type: ["fastfood"],
        features: ["vegetarian", "discount"],
        averagePrice: 55000
    },
    {
        id: 4,
        name: "رستوران سنتی قصر",
        description: "غذاهای محلی و سنتی در محیطی لوکس",
        image: "🏯",
        rating: 4.8,
        deliveryTime: "50 دقیقه",
        type: ["iranian", "traditional"],
        features: ["discount"],
        averagePrice: 75000
    },
    {
        id: 5,
        name: "سوشی بار",
        description: "غذاهای ژاپنی تازه و سالم",
        image: "🍣",
        rating: 4.6,
        deliveryTime: "40 دقیقه",
        type: [],
        features: ["vegetarian"],
        averagePrice: 85000
    },
    {
        id: 6,
        name: "کافه رستوران مدرن",
        description: "فضای دنج و غذاهای بین المللی",
        image: "☕",
        rating: 4.4,
        deliveryTime: "30 دقیقه",
        type: ["fastfood"],
        features: ["delivery", "vegetarian"],
        averagePrice: 50000
    }
];

// داده‌های منو برای هر رستوران
const menus = {
    1: [
        { id: 101, name: "قورمه سبزی", price: 55000, category: "main", description: "با گوشت گوسفندی و لوبیا قرمز", image: "🍲" },
        { id: 102, name: "چلوکباب کوبیده", price: 68000, category: "main", description: "با برنج ایرانی و کباب کوبیده", image: "🍖" },
        { id: 103, name: "میرزا قاسمی", price: 35000, category: "appetizer", description: "با بادمجان کبابی و گوجه", image: "🍆" },
        { id: 104, name: "دوغ محلی", price: 15000, category: "drink", description: "دوغ سنتی با نعنا", image: "🥛" },
        { id: 105, name: "بستنی سنتی", price: 25000, category: "dessert", description: "با زعفران و پسته", image: "🍨" }
    ],
    2: [
        { id: 201, name: "پیتزا مارگاریتا", price: 75000, category: "main", description: "پنیر موزارلا، سس گوجه فرنگی، ریحان", image: "🍕" },
        { id: 202, name: "پیتزا پپرونی", price: 85000, category: "main", description: "پپرونی، پنیر موزارلا، سس گوجه", image: "🍕" },
        { id: 203, name: "پاستا Carbonara", price: 65000, category: "main", description: "خامه، پنیر پارمزان، تخم مرغ", image: "🍝" },
        { id: 204, name: "سیر رول", price: 30000, category: "appetizer", description: "سیر و پنیر در خمیر", image: "🧄" },
        { id: 205, name: "تیラمیسو", price: 35000, category: "dessert", description: "دسر ایتالیایی با قهوه و ماسکارپونه", image: "🍰" }
    ],
    3: [
        { id: 301, name: "برگر کلاسیک", price: 55000, category: "main", description: "گوشت گاو، پنیر، کاهو، گوجه", image: "🍔" },
        { id: 302, name: "برگر مخصوص", price: 75000, category: "main", description: "دو طبقه گوشت، پنیر چدار، قارچ", image: "🍔" },
        { id: 303, name: "برگر گیاهی", price: 45000, category: "main", description: "سویا، قارچ، سبزیجات تازه", image: "🍔" },
        { id: 304, name: "سیب زمینی سرخ کرده", price: 25000, category: "appetizer", description: "با سس مخصوص", image: "🍟" },
        { id: 305, name: "نوشابه", price: 15000, category: "drink", description: "کوکا کولا، Sprite، Fanta", image: "🥤" }
    ],
    4: [
        { id: 401, name: "دیزی سنتی", price: 45000, category: "main", description: "با نان سنگک و ترشی", image: "🍲" },
        { id: 402, name: "آبگوشت بزباش", price: 55000, category: "main", description: "با گوشت بره و حبوبات", image: "🍖" },
        { id: 403, name: "کله پاچه", price: 85000, category: "main", description: "سحرانه با نان تازه", image: "🥘" },
        { id: 404, name: "ترشی محلی", price: 15000, category: "appetizer", description: "مخلوط سبزیجات خانگی", image: "🥗" },
        { id: 405, name: "چای سنتی", price: 10000, category: "drink", description: "در قوری مسی با نبات", image: "🍵" }
    ],
    5: [
        { id: 501, name: "سوشی California", price: 85000, category: "main", description: "خرچنگ، خیار، آووکادو", image: "🍣" },
        { id: 502, name: "ساشیمی سالمون", price: 95000, category: "main", description: "ماهی سالمون تازه", image: "🐟" },
        { id: 503, name: "رامن", price: 45000, category: "main", description: "نودل ژاپنی با سبزیجات", image: "🍜" },
        { id: 504, name: "سوپ میسو", price: 25000, category: "appetizer", description: "سوپ سنتی ژاپنی", image: "🍲" },
        { id: 505, name: "چای سبز", price: 15000, category: "drink", description: "چای سبز ژاپنی", image: "🍵" }
    ],
    6: [
        { id: 601, name: "استیک گریل", price: 95000, category: "main", description: "گوشت راسته با سس قارچ", image: "🥩" },
        { id: 602, name: "سالاد سزار", price: 45000, category: "main", description: "کاهو، سس سزار، پنیر پارمزان", image: "🥗" },
        { id: 603, name: "سوپ قارچ", price: 35000, category: "appetizer", description: "سوپ خامه ای قارچ", image: "🍲" },
        { id: 604, name: "پنکیک", price: 40000, category: "dessert", description: "با عسل و بستنی", image: "🥞" },
        { id: 605, name: "لاته", price: 30000, category: "drink", description: "اسپرسو با شیر بخارپز", image: "☕" }
    ]
};

// متغیرهای全局
let currentRestaurantId = null;
let currentMenuCategory = 'all';

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
    document.querySelector('.rating').textContent = `⭐ ${restaurant.rating}`;
    document.querySelector('.delivery-time').textContent = `${restaurant.deliveryTime}`;
    document.querySelector('.delivery-price').textContent = `هزینه ارسال: ${(restaurant.averagePrice / 3).toLocaleString()} تومان`;

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

    const restaurantMenu = menus[currentRestaurantId];
    if (!restaurantMenu) return;

    const filteredItems = currentMenuCategory === 'all'
        ? restaurantMenu
        : restaurantMenu.filter(item => item.category === currentMenuCategory);

    filteredItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';

        menuItemElement.innerHTML = `
            <div class="item-image">${item.image}</div>
            <div class="item-content">
                <div class="item-title">
                    <h3>${item.name}</h3>
                    <span class="price">${item.price.toLocaleString()} تومان</span>
                </div>
                <p class="description">${item.description}</p>
                <button class="add-to-cart">افزودن به سبد خرید</button>
            </div>
        `;

        menuItemsContainer.appendChild(menuItemElement);
    });
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
    const selectedTypes = Array.from(document.querySelectorAll('input[type="checkbox"][value]:checked'))
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

// راه‌اندازی اولیه
document.addEventListener('DOMContentLoaded', function () {
    // نمایش رستوران‌ها
    displayRestaurants();

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

    // مقدار اولیه برای نمایش محدوده قیمت
    document.getElementById('price-value').textContent = `${parseInt(document.getElementById('price-range').value).toLocaleString()} تومان`;
});