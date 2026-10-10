# Group Capstone Project - E-Commerce Website

We built a pixel-perfect e-commerce frontend from the Melsoft Academy Figma design. It's React + Tailwind CSS + React Router + Redux Toolkit. All data is client-side, no backend.

Figma: E-Commerce Store - Melsoft Academy

## Pages & Routes

- / - Home - product grid, sidebar, search, cart overview
- /product/:id - Product Detail
- /cart - Cart - view items, change qty, remove
- /checkout - Checkout - shipping, payment, Order Summary
- /order-success - Order Successful

## Team Members & Roles

**A - Durandt Boshoff - Setup, Router & Cart Logic**
Set up the whole project. Created React app, installed Tailwind, react-router-dom and Redux Toolkit. Made the folder structure, App.jsx router, Navbar and Footer. Built cartSlice with addItem, removeItem, increaseQty, decreaseQty, clearCart, plus selectors and localStorage so cart stays after refresh. Also did the Cart page.

**B - Lusizo - Home Page**
Built the Home page fully responsive. Did ProductList, ProductCard, toggle Menu Sidebar, search that filters locally, and CartSummary widget.

**C - Neo - Checkout**
Built Checkout. Made CheckoutForm with shipping and payment sections, form validation, and Order Summary that calculates totals from cart.

**D - Ntombifuthi - Product Data, Product Detail, Order Success & README**
This was my task on feature/product-page branch.

- Created src/data/products.js with 10 products from Figma. Each has id, name, variant, price, rating, category, description, details, image. Also added getProductById helper.
- Built src/pages/ProductDetail.jsx matching Figma - image with thumbnails, name, variant, rating, price, description, Add to Bag button, Description section.
- Product is passed via Link state from Home. If user refreshes, it finds product by id in URL so it doesn't break.
- Add to Bag dispatches addItem to Redux.
- If id doesn't exist, shows Product not found with link back to shop.
- Built src/pages/OrderSuccess.jsx - confirmation after placing order. Figma doesn't have this screen so we designed it in same style.
- Product images are in public/assets.

## Tech Stack
- React (functional components, hooks)
- Tailwind CSS
- react-router-dom
- Redux Toolkit
- Git / GitHub

## How We Managed State
- useState for small UI things like sidebar open/close, search input, form inputs
- Redux for global cart
- Totals derived with selectors / useMemo
- Cart saved to localStorage

## Folder Structure
src/
  data/products.js
  pages/Home.jsx, ProductDetail.jsx, CartPage.jsx, Checkout.jsx, OrderSuccess.jsx
  components/Navbar.jsx, Sidebar.jsx, ProductCard.jsx, ProductList.jsx, CartSummary.jsx
  redux/store.js, cartSlice.js
public/assets/

## Known Issues / Notes
- No backend, payment is just dummy validation
- Mobile responsiveness still being polished
- Search filters locally only
- Descriptions are placeholder text as per Figma
- Order Success is our own design since Figma didn't include it