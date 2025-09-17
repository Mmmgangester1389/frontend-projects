// منو همبرگر برای نسخه موبایل
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// داده‌های منو
const menuItems = [
    {
        name: "پیتزا مارگاریتا",
        category: "pizza",
        price: "120,000 تومان",
        description: "پنیر موزارلا، سس گوجه فرنگی، ریحان تازه",
        emoji: "🍕"
    },
    {
        name: "پیتزا پپرونی",
        category: "pizza",
        price: "150,000 تومان",
        description: "پپرونی، پنیر موزارلا، سس گوجه فرنگی",
        emoji: "🍕"
    },
    {
        name: "اسپاگتی بولونزه",
        category: "pasta",
        price: "110,000 تومان",
        description: "گوشت چرخ کرده، سس گوجه فرنگی، پنیر پارمزان",
        emoji: "🍝"
    },
    {
        name: "فتوچینی آلفردو",
        category: "pasta",
        price: "130,000 تومان",
        description: "خامه، پنیر پارمزان، کره، جعفری",
        emoji: "🍝"
    },
    {
        name: "سالاد سزار",
        category: "salad",
        price: "75,000 تومان",
        description: "کاهو رومی، سس سزار، پنیر پارمزان، کروتون",
        emoji: "🥗"
    },
    {
        name: "سالاد یونانی",
        category: "salad",
        price: "80,000 تومان",
        description: "خیار، گوجه فرنگی، زیتون، پنیر فتا",
        emoji: "🥗"
    },
    {
        name: "تیرامیسو",
        category: "dessert",
        price: "80,000 تومان",
        description: "دسر ایتالیایی با قهوه، ماسکارپونه و کاکائو",
        emoji: "🍰"
    },
    {
        name: "پانا کوتا",
        category: "dessert",
        price: "70,000 تومان",
        description: "دسر ایتالیایی با وانیل و کارامل",
        emoji: "🍮"
    }
];

// نمایش منو
function displayMenuItems(category = "all") {
    const menuContainer = document.querySelector(".menu-items");
    menuContainer.innerHTML = "";
    
    const filteredItems = category === "all" 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    filteredItems.forEach(item => {
        const menuItemElement = document.createElement("div");
        menuItemElement.classList.add("menu-item");
        menuItemElement.setAttribute("data-category", item.category);
        
        menuItemElement.innerHTML = `
            <div class="item-image">${item.emoji}</div>
            <div class="item-content">
                <div class="item-title">
                    <h3>${item.name}</h3>
                    <span class="price">${item.price}</span>
                </div>
                <p class="description">${item.description}</p>
            </div>
        `;
        
        menuContainer.appendChild(menuItemElement);
    });
}

// فیلتر کردن منو
document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        const category = this.getAttribute("data-category");
        displayMenuItems(category);
    });
});

// داده‌های نظرات
const comments = [
    {
        name: "علی محمدی",
        date: "۱۴۰۲/۰۵/۱۰",
        text: "پیتزای بسیار عالی و محیط دنجی داشت. حتما دوباره میرم."
    },
    {
        name: "فاطمه احمدی",
        date: "۱۴۰۲/۰۵/۰۸",
        text: "تیرامیسو اینجا بهترین تیرامیسویی هست که تا حالا خوردم."
    },
    {
        name: "محمد رضایی",
        date: "۱۴۰۲/۰۵/۰۵",
        text: "خدمات عالی و غذاهای خوشمزه. پیشنهاد می‌کنم حتما امتحان کنید."
    }
];

// نمایش نظرات
function displayComments() {
    const commentsContainer = document.querySelector(".comments-container");
    commentsContainer.innerHTML = "";
    
    comments.forEach(comment => {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        
        commentElement.innerHTML = `
            <div class="comment-header">
                <span>${comment.name}</span>
                <span>${comment.date}</span>
            </div>
            <p>${comment.text}</p>
        `;
        
        commentsContainer.appendChild(commentElement);
    });
}

// افزودن نظر جدید
document.getElementById("add-comment-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById("comment-name");
    const textInput = document.getElementById("comment-text");
    
    const today = new Date();
    const date = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
    
    const newComment = {
        name: nameInput.value,
        date: date,
        text: textInput.value
    };
    
    comments.unshift(newComment);
    displayComments();
    
    // پاک کردن فرم
    nameInput.value = "";
    textInput.value = "";
    
    // نمایش پیام موفقیت
    alert("نظر شما با موفقیت ثبت شد. با تشکر!");
});

// اسکرول نرم برای لینک‌های داخلی
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

// مقداردهی اولیه هنگام لود صفحه
document.addEventListener("DOMContentLoaded", function() {
    displayMenuItems();
    displayComments();
});