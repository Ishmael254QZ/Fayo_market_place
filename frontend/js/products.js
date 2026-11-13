const allProducts = [
  {
    id: 1,
    title: 'Dell Inspiron 15 Laptop',
    description: 'High-performance business laptop with solid battery life, 16GB RAM and a 512GB SSD, ideal for remote work and study.',
    category: 'Electronics',
    price: 28500,
    condition: 'Like New',
    seller: 'Asha Traders',
    location: 'Embu Town',
    date: '2026-11-13',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Featured',
    status: 'Approved'
  },
  {
    id: 2,
    title: 'Samsung Galaxy A54',
    description: 'A sleek smartphone with a bright AMOLED display and dependable camera features for everyday use.',
    category: 'Mobile Phones',
    price: 24500,
    condition: 'Good',
    seller: 'Mwangangi Mobile',
    location: 'Runyenjes',
    date: '2026-11-10',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1601784551446-20c9e07f0a4d?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Popular',
    status: 'Approved'
  },
  {
    id: 3,
    title: 'Solid Oak Coffee Table',
    description: 'Minimalist coffee table made from sturdy oak with a clean finish and elegant profile for modern homes.',
    category: 'Furniture',
    price: 9500,
    condition: 'Good',
    seller: 'Home Haven',
    location: 'Kangaru',
    date: '2026-11-09',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    badge: 'New',
    status: 'Approved'
  },
  {
    id: 4,
    title: 'Bajaj Boxer Motorcycle',
    description: 'Reliable commuter motorcycle with strong mileage and practical styling for everyday transport.',
    category: 'Motorcycles',
    price: 95000,
    condition: 'Fair',
    seller: 'Nyaga Motors',
    location: 'Kiritiri',
    date: '2026-11-08',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1558980664-10e7170b5df9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558980664-10e7170b5df9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558980664-10e7170b5df9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1558980664-10e7170b5df9?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Hot',
    status: 'Approved'
  },
  {
    id: 5,
    title: 'LG Fridge 250L',
    description: 'Energy-efficient refrigerator with generous storage for family home use and everyday convenience.',
    category: 'Home Appliances',
    price: 42000,
    condition: 'Like New',
    seller: 'Kiboko Home',
    location: 'Embu Town',
    date: '2026-11-05',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Hot',
    status: 'Approved'
  },
  {
    id: 6,
    title: 'Mountain Bike Trek Pro',
    description: 'Sturdy trail bicycle with responsive handling, ideal for exercise and weekend rides in and around town.',
    category: 'Bicycles',
    price: 18000,
    condition: 'Good',
    seller: 'Trail Edge',
    location: 'Ishiara',
    date: '2026-11-01',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Trend',
    status: 'Approved'
  },
  {
    id: 7,
    title: 'Office Desk Set',
    description: 'Compact work desk with matching chair for home offices and study spaces.',
    category: 'Office Equipment',
    price: 16000,
    condition: 'Good',
    seller: 'Desk Works',
    location: 'Embu Town',
    date: '2026-10-30',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'New',
    status: 'Pending'
  },
  {
    id: 8,
    title: 'Men’s Leather Jacket',
    description: 'Classic outerwear piece with a smart finish and durable design for everyday wear.',
    category: 'Fashion and Clothing',
    price: 6500,
    condition: 'Like New',
    seller: 'Urban Style',
    location: 'Runyenjes',
    date: '2026-10-26',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Fresh',
    status: 'Approved'
  }
];

function formatPrice(value) {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0
  }).format(value);
}

function getProducts() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  const search = params.get('search');

  let filtered = [...allProducts];

  if (category && category !== 'all') {
    filtered = filtered.filter((item) => item.category === category);
  }

  if (search) {
    const term = search.toLowerCase();
    filtered = filtered.filter((item) =>
      item.title.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.seller.toLowerCase().includes(term) ||
      item.location.toLowerCase().includes(term)
    );
  }

  const categoryFilter = document.getElementById('category-filter');
  const locationFilter = document.getElementById('location-filter');
  const priceMin = document.getElementById('price-min');
  const priceMax = document.getElementById('price-max');
  const sortFilter = document.getElementById('sort-filter');

  if (categoryFilter) {
    categoryFilter.value = category || 'all';
  }

  if (locationFilter) {
    locationFilter.value = 'all';
  }

  if (priceMin && priceMax) {
    priceMin.value = '';
    priceMax.value = '';
  }

  if (sortFilter) {
    sortFilter.value = 'recent';
  }

  return filtered;
}

function applyFilters() {
  const category = document.getElementById('category-filter')?.value || 'all';
  const location = document.getElementById('location-filter')?.value || 'all';
  const minPrice = Number(document.getElementById('price-min')?.value || 0);
  const maxPrice = Number(document.getElementById('price-max')?.value || Number.MAX_SAFE_INTEGER);
  const sort = document.getElementById('sort-filter')?.value || 'recent';

  let filtered = [...allProducts].filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    const matchesLocation = location === 'all' || item.location === location;
    const matchesMin = !minPrice || item.price >= minPrice;
    const matchesMax = !maxPrice || item.price <= maxPrice;
    return matchesCategory && matchesLocation && matchesMin && matchesMax;
  });

  switch (sort) {
    case 'low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'popular':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'recent':
    default:
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
  }

  renderProducts(filtered);
}

function renderProducts(items) {
  const grid = document.getElementById('products-grid');
  const countText = document.getElementById('result-count');

  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = '<div class="empty-state">No listings match your filters right now.</div>';
    if (countText) countText.textContent = 'Showing 0 listings';
    return;
  }

  countText.textContent = `Showing ${items.length} listing${items.length === 1 ? '' : 's'}`;

  grid.innerHTML = items
    .map((item) => `
      <article class="product-card" data-id="${item.id}">
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
    `)
    .join('');

  grid.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', () => {
      const productId = card.dataset.id;
      if (productId) {
        window.location.href = `product-details.html?id=${productId}`;
      }
    });
  });
}

function renderProductDetails() {
  const root = document.getElementById('product-detail-root');
  if (!root) return;

  const productId = Number(new URLSearchParams(window.location.search).get('id')) || 1;
  const product = allProducts.find((item) => item.id === productId) || allProducts[0];

  root.innerHTML = `
    <section class="product-details">
      <div>
        <div class="gallery-main">
          <img src="${product.gallery[0]}" alt="${product.title}" id="main-product-image" />
        </div>
        <div class="gallery-thumbs">
          ${product.gallery.map((image) => `
            <img src="${image}" alt="${product.title}" class="thumb-image" />
          `).join('')}
        </div>
      </div>

      <aside class="product-summary">
        <span class="eyebrow">${product.category}</span>
        <h1>${product.title}</h1>
        <div class="price">${formatPrice(product.price)}</div>
        <span class="status-pill status-approved">${product.status}</span>

        <div class="summary-meta">
          <div class="summary-item">
            <span>Condition</span>
            <strong>${product.condition}</strong>
          </div>
          <div class="summary-item">
            <span>Location</span>
            <strong>${product.location}</strong>
          </div>
          <div class="summary-item">
            <span>Seller</span>
            <strong>${product.seller}</strong>
          </div>
          <div class="summary-item">
            <span>Rating</span>
            <strong>${product.rating}/5</strong>
          </div>
        </div>

        <p>${product.description}</p>

        <div class="detail-actions">
          <button type="button" class="btn btn-primary">Contact seller</button>
          <button type="button" class="btn btn-ghost">Save item</button>
        </div>
      </aside>
    </section>
  `;

  document.querySelectorAll('.thumb-image').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const mainImage = document.getElementById('main-product-image');
      if (mainImage) {
        mainImage.src = thumb.src;
      }
    });
  });
}

function initializeProductsPage() {
  const grid = document.getElementById('products-grid');
  if (grid) {
    const initialProducts = getProducts();
    renderProducts(initialProducts);

    ['category-filter', 'location-filter', 'price-min', 'price-max', 'sort-filter'].forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('input', applyFilters);
        element.addEventListener('change', applyFilters);
      }
    });

    const primarySearch = document.getElementById('global-search');
    if (primarySearch) {
      const params = new URLSearchParams(window.location.search);
      const initialSearch = params.get('search');
      if (initialSearch) primarySearch.value = initialSearch;

      primarySearch.addEventListener('input', () => {
        const value = primarySearch.value.trim();
        const category = document.getElementById('category-filter')?.value || 'all';
        const location = document.getElementById('location-filter')?.value || 'all';
        const min = document.getElementById('price-min')?.value || '';
        const max = document.getElementById('price-max')?.value || '';
        const sort = document.getElementById('sort-filter')?.value || 'recent';

        let filtered = [...allProducts].filter((item) => {
          const term = value.toLowerCase();
          const matchesSearch = !value || item.title.toLowerCase().includes(term) || item.category.toLowerCase().includes(term) || item.seller.toLowerCase().includes(term) || item.location.toLowerCase().includes(term);
          const matchesCategory = category === 'all' || item.category === category;
          const matchesLocation = location === 'all' || item.location === location;
          const matchesMin = !min || item.price >= Number(min);
          const matchesMax = !max || item.price <= Number(max);
          const matchesSort = true;
          return matchesSearch && matchesCategory && matchesLocation && matchesMin && matchesMax && matchesSort;
        });

        if (sort === 'low') filtered.sort((a, b) => a.price - b.price);
        if (sort === 'high') filtered.sort((a, b) => b.price - a.price);
        if (sort === 'popular') filtered.sort((a, b) => b.rating - a.rating);
        if (sort === 'recent') filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        renderProducts(filtered);
      });
    }
  }

  if (document.getElementById('product-detail-root')) {
    renderProductDetails();
  }
}

initializeProductsPage();
