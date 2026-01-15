# 🐾 PawMart – Pet Adoption & Supply Portal

PawMart is a community-driven web platform where pet owners, breeders, and pet shops can list pets for adoption or sell pet-related products such as food, accessories, and care items. Users can browse listings, place adoption or purchase orders, and manage their own listings and orders easily.

🌐 **Live Website:** https://pawmart-pet-n-supplies-ham004.netlify.app
🛠 **Server API:** https://pawmart-backend-eight.vercel.app  

---

## 🚀 Key Features

- 🐶 **Pet Adoption & Product Marketplace**  
  Browse pets for adoption and shop pet food, accessories, and care products in one place.

- 🔍 **Category-wise Filtering & Search**  
  Filter listings by category and search by product or pet name.

- 🔐 **Secure Authentication**  
  Login and registration using Firebase Authentication (Email/Password & Google Login).

- 🧺 **Add & Manage Listings (Private)**  
  Logged-in users can add, update, and delete their own listings.

- 🛒 **Adopt / Order System**  
  Users can place adoption requests or product orders through a secure order modal.

- 🧾 **My Orders & PDF Report**  
  View all personal orders and download them as a PDF report.

- 🌗 **Dark / Light Mode Toggle**  
  User-friendly theme switcher for better accessibility.

- 📱 **Fully Responsive Design**  
  Optimized for mobile, tablet, and desktop devices.

---

## 🧩 Pages Overview

- **Home Page** – Banner slider, categories, recent listings, awareness sections  
- **Pets & Supplies** – All listings with filters and search  
- **Category Filter Page** – Listings filtered by selected category  
- **Listing Details (Private)** – Full listing details with order option  
- **Add Listing (Private)** – Add new pets or products  
- **My Listings (Private)** – Manage user’s own listings  
- **My Orders (Private)** – View orders and download PDF report  
- **Authentication Pages** – Login & Register  
- **404 Page** – Custom page not found  

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Swiper.js (Banner Slider)
- Axios
- Firebase Authentication
- jsPDF & jsPDF-AutoTable
- react-hot-toast
- sweet-alert2

### Backend
- Node.js
- Express.js
- MongoDB
- Vercel (Server Deployment)

---

## 🔐 Authentication & Authorization

- Firebase Authentication for client-side login/register
- Protected routes for private pages
- Logged-in users remain authenticated on page reload
- Only listing owners can update or delete their listings

---

## 📦 Database Collections

### `listings`
- Stores pet adoption and product listings

### `orders`
- Stores adoption requests and purchase orders

---

