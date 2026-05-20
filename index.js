// مصفوفة الـ 20 منتج كاملة مع روابط صور حقيقية ومباشرة
const products = [
    // مشروبات ساخنة (8 منتجات)
    { id: 1, title: "إسبريسو سينجل", cat: "hot", price: "25 EGP", desc: "جرعة مركزة من البن الغني النقي.", img: "https://images.unsplash.com/photo-1510707577719-eaae8648a25d?w=300" },
    { title: "أمريكانو دافئ", cat: "hot", price: "35 EGP", desc: "إسبريسو مخفف بالماء الساخن لعشاق النكهة الكلاسيكية.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300" },
    { title: "كابتشينو كوفينا", cat: "hot", price: "45 EGP", desc: "توازن مثالي بين الإسبريسو، الحليب المبخر ورغوة غنية.", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=300" },
    { title: "فلات وايت ناعم", cat: "hot", price: "48 EGP", desc: "ملمس حريري مخملي من الحليب مع دبل شوت إسبريسو.", img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=300" },
    { title: "كافيه لاتيه", cat: "hot", price: "45 EGP", desc: "إسبريسو ممزوج بالحليب المبخر بطبقة خفيفة من الرغوة.", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300" },
    { title: "سبانيش لاتيه ساخن", cat: "hot", price: "55 EGP", desc: "لاتيه كلاسيكي محلى بالحليب المكثف الفاخر.", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300" },
    { title: "موكا الشوكولاتة الداكنة", cat: "hot", price: "50 EGP", desc: "مزيج متناغم من الإسبريسو والحليب مع الشوكولاتة الغنية.", img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=300" },
    { title: "قهوة تركي بالوش", cat: "hot", price: "30 EGP", desc: "محضرة بعناية من أجود أنواع البن الفاتح أو المحوج.", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300" },

    // مشروبات باردة (7 منتجات)
    { title: "آيس سبانيش لاتيه", cat: "cold", price: "60 EGP", desc: "مشروبنا الأكثر مبيعاً، بارد ومنعش ومحلى بلطف.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300" },
    { title: "آيس لاتيه كلاسيك", cat: "cold", price: "50 EGP", desc: "إسبريسو بارد مع الحليب ومكعبات الثلج النقي.", img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=300" },
    { title: "آيس كراميل ماكياتو", cat: "cold", price: "58 EGP", desc: "طبقات من الحليب، الإسبريسو، ولمسة غنية من صوص الكراميل.", img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=300" },
    { title: "فرابوتشينو كوفينا", cat: "cold", price: "65 EGP", desc: "قهوة مثلجة ومخفوقة مغطاة بالكريمة الغنية.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },
    { title: "سيروب كولد برو", cat: "cold", price: "55 EGP", desc: "قهوة مقطرة باردة لمدة 16 ساعة لنكهة سلسة للغاية.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300" },
    { title: "آيس موكا منعشة", cat: "cold", price: "55 EGP", desc: "شوكولاتة باردة مع الإسبريسو والحليب وقطع الثلج.", img: "https://images.unsplash.com/photo-1530373255104-cd18efea1618?w=300" },
    { title: "ميلك شيك الفانيليا", cat: "cold", price: "50 EGP", desc: "مخفوق غني ومثلج بنكهة الفانيليا الطبيعية.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300" },

    // حلويات (5 منتجات)
    { title: "كيكة الشوكولاتة الذائبة", cat: "sweet", price: "45 EGP", desc: "كيكة دافئة محشوة بالشوكولاتة السائلة الغنية.", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300" },
    { title: "تشيز كيك الفراولة", cat: "sweet", price: "50 EGP", desc: "طبقة غنية وكريمية بنكهة لطيفة ومربى فراولة طازجة.", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300" },
    { title: "كرواسون سادة بالزبدة", cat: "sweet", price: "25 EGP", desc: "مقرمش وهش ومخبوز طازجاً كل صباح.", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300" },
    { title: "مولتن كيك كراميل", cat: "sweet", price: "48 EGP", desc: "عشاق الكراميل سيعشقون هذا القلب السائل الدافئ.", img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=300" },
    { title: "كوكيز بقطع الشوكولاتة", cat: "sweet", price: "20 EGP", desc: "الحليف المثالي لكوب الإسبريسو الخاص بك.", img: "https://images.unsplash.com/photo-1499636136210-6f4ce9127154?w=300" }
];

// دالة عرض وتوليد بطاقات المنتجات في الصفحة
function renderProducts(items) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img" style="background-image: url('${item.img}')"></div>
            <div class="product-info">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-desc">${item.desc}</p>
                <span class="product-price">${item.price}</span>
                <button class="btn-add-to-cart" onclick="showToast('تم إضافة ${item.title} بنجاح! ☕')">أضف إلى العربة</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// دالة إنشاء وإظهار رسالة التنبيه المريحة أعلى اليسار
function showToast(message) {
    const container = document.getElementById('toast-container');

    // إنشاء عنصر التنبيه
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;

    // إضافة التنبيه للحاوية
    container.appendChild(toast);

    // إزالة التنبيه تلقائياً بعد انتهاء الأنيمنيشن (3 ثوانٍ)
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// دالة التحكم في فلترة القائمة بناءً على الأزرار
function initFilter() {
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            buttons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const category = e.target.getAttribute('data-category');

            if (category === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.cat === category);
                renderProducts(filtered);
            }
        });
    });
}

// تشغيل الأكواد الأساسية عند فتح الموقع
window.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    initFilter();
});

// معالجة فورمة التواصل
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('شكرًا لتواصلك يا فنان! تم استلام رسالتك وسنقوم بالرد عليك قريباً.');
    e.target.reset();
});