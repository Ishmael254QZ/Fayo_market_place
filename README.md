# FAYO Marketplace

FAYO is a Kenyan second-hand marketplace for buying and selling trusted goods locally. This project is being developed in phases and the frontend foundation is now in place.

## Project structure

```text
fayo-marketplace/
├── frontend/
│   ├── index.html
│   ├── css/
│   │   ├── style.css
│   │   ├── dashboard.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── auth.js
│   │   ├── main.js
│   │   ├── products.js
│   │   └── seller.js
│   ├── pages/
│   │   ├── admin-dashboard.html
│   │   ├── buyer-dashboard.html
│   │   ├── login.html
│   │   ├── product-details.html
│   │   ├── products.html
│   │   ├── register.html
│   │   └── seller-dashboard.html
│   └── assets/
│       ├── images/
│       └── icons/
├── backend/
│   ├── app.js
│   ├── server.js
│   └── ...
├── database/
├── .env.example
├── .gitignore
└── README.md
```

## Run locally

Open the project root in a browser and serve the frontend with a small static server. For example:

```bash
cd C:/Users/User/OneDrive/Desktop/Reuse_market/fayo-marketplace
python -m http.server 8000
```

Then visit:

- http://localhost:8000/frontend/
- http://localhost:8000/frontend/pages/products.html

## Phase 1 status

Done:

- Main homepage with modern market branding
- Responsive navigation and category cards
- Product discovery and product detail pages
- Search/filter functionality with category, location, and price controls
- Sign in and registration forms
- Seller, buyer, and admin dashboard layouts

Remaining for the next phase,this is fronted part:(this is a pending part,a later to do)

- Backend configuration and Express server
- MySQL schema and migrations
- Authentication and JWT implementation
- Admin moderation endpoints
- Payment preparation and M-Pesa integration scaffolding

## Notes

This phase intentionally focuses on the frontend foundation and UI architecture. It does not claim full marketplace backend functionality yet.
