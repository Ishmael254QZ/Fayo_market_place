const products = [
  {
    id: 1,
    title: 'Dell Inspiron 15 Laptop',
    price: 28500,
    condition: 'Like New',
    category: 'Electronics',
    seller: 'Asha Traders',
    location: 'Embu Town',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80',
    badge: 'Featured',
    rating: 4.9
  },
  {
    id: 2,
    title: 'Samsung Galaxy A54',
    price: 24500,
    condition: 'Good',
    category: 'Mobile Phones',
    seller: 'Mwangangi Mobile',
    location: 'Runyenjes',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    badge: 'Popular',
    rating: 4.7
  },
  {
    id: 3,
    title: 'Solid Oak Coffee Table',
    price: 9500,
    condition: 'Good',
    category: 'Furniture',
    seller: 'Home Haven',
    location: 'Kangaru',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    badge: 'New',
    rating: 4.8
  },
  {
    id: 4,
    title: 'Bajaj Boxer Motorcycle',
    price: 95000,
    condition: 'Fair',
    category: 'Motorcycles',
    seller: 'Nyaga Motors',
    location: 'Kiritiri',
    image: 'https://images.unsplash.com/photo-1558980664-10e7170b5df9?auto=format&fit=crop&w=1200&q=80',
    badge: 'Hot',
    rating: 4.6
  },
  {
    id: 5,
    title: 'LG Fridge 250L',
    price: 42000,
    condition: 'Like New',
    category: 'Home Appliances',
    seller: 'Kiboko Home',
    location: 'Embu Town',
    image: 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?auto=format&fit=crop&w=1200&q=80',
    badge: 'Hot',
    rating: 4.7
  },
  {
    id: 6,
    title: 'Mountain Bike Trek Pro',
    price: 18000,
    condition: 'Good',
    category: 'Bicycles',
    seller: 'Trail Edge',
    location: 'Ishiara',
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1200&q=80',
    badge: 'Trend',
    rating: 4.9
  }
];

const sellers = [
  {
    name: 'Asha Traders',
    location: 'Embu Town',
    sales: '245 sales',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    rating: 4.9
  },
  {
    name: 'Mwangangi Mobile',
    location: 'Runyenjes',
    sales: '119 sales',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    rating: 4.8
  },
  {
    name: 'Home Haven',
    location: 'Kangaru',
    sales: '98 sales',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80',
    rating: 4.7
  },
  {
    name: 'Nyaga Motors',
    location: 'Kiritiri',
    sales: '162 sales',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    rating: 4.9
  }
];

function formatPrice(value) {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0
  }).format(value);
}

function renderCards(targetId, items, type = 'product') {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.innerHTML = items
    .map((item) => {
      if (type === 'product') {
        return `
          <article class="product-card">
            <div class="product-card__image">
              <img src="${item.image}" alt="${item.title}" />
              <span class="product-card__badge">${item.badge}</span>
            </div>
            <div class="product-card__body">
              <div class="product-info">
                <span class="price">${formatPrice(item.price)}</span>
                <span class="condition">${item.condition}</span>
              </div>
              <h3>${item.title}</h3>
              <div class="meta-row">
                <span>${item.category}</span>
                <span>${item.location}</span>
              </div>
              <div class="seller-row">
                <img class="avatar" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" alt="Seller avatar" />
                <div class="seller-meta">
                  <strong>${item.seller}</strong>
                  <span>${item.rating}/5 rating</span>
                </div>
              </div>
            </div>
          </article>
        `;
      }

      return `
        <article class="seller-card">
          <img src="${item.image}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <span>${item.location}</span>
          <span class="rating">★ ${item.rating}</span>
          <p>${item.sales}</p>
        </article>
      `;
    })
    .join('');

  root.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', () => {
      const cardProduct = items.find((product) => product.title === card.querySelector('h3')?.textContent);
      if (cardProduct) {
        window.location.href = `pages/product-details.html?id=${cardProduct.id}`;
      }
    });
  });
}

function initializeHomePage() {
  renderCards('recent-products', products.slice(0, 4));
  renderCards('recommended-products', products.slice(2, 6));
  renderCards('featured-sellers', sellers, 'seller');

  const searchInput = document.querySelector('.hero-search input');
  const searchButton = document.querySelector('.hero-search button');

  if (searchInput && searchButton) {
    searchButton.addEventListener('click', () => {
      const value = searchInput.value.trim();
      if (value) {
        window.location.href = `pages/products.html?search=${encodeURIComponent(value)}`;
      } else {
        window.location.href = 'pages/products.html';
      }
    });
  }
}

initializeHomePage();
