🐕 Pet Adoption & Supply Portal — “PawMart”

PawMart is a community-driven platform where pet owners, breeders, and shops can list pets for adoption or sell pet-related products (food, toys, accessories, etc.). Buyers and adopters can browse, contact, and order directly — all inside a friendly and modern single-page application.

🌍 Live Demo

Live URL: /

📌 Project Purpose

The platform uses Firebase authentication, secure environment variables, JSON-based service data, modern UI animations, and SPA routing.

✨ Key Features

### Modern & Minimalist UI

- Fully responsive design (mobile → desktop)
- Smooth SPA navigation without reload errors

### Authentication System

- Firebase Email/Password Authentication
- Google Social Login
- Protected Routes (Service Details Page)
- Password Validation (Uppercase, Lowercase, Min 6 chars)
- Password Reset Page
- Login Redirect to Intended Route
- Update Profile (Name + Photo)

### Service Data (JSON)

-
- Displayed as cards on Home Page
- Each card includes image, name, rating, price & details button

### Pages

- Home (Hero slider, popular listings, winter tips, vets section, extra section)
- Service Details (Protected)
- Login
- Signup
- Forget Password
- My Profile (Protected)

### Forms & Toasts

- Toast success/error messages (react-hot-toast)
- Book Service form
- Login/Signup form with password toggle eye icon
- Forgot password email autofill

### Deployment

- SPA-safe hosting (Netlify)
- Firebase authorized domains added
- Environment variables secured (.env.local)

🛠️ Tech Stack

### Frontend

- React + Vite / React Router
- Tailwind CSS / DaisyUI
- Swiper.js for slider
- AOS / Animate.css for animations

### Backend

- Firebase Authentication

### Other Tools

- react-hot-toast
- Environment variables
- GitHub for version control

### NPM Packages Used

- react-hot-toast
- swiper
- AOS / Animate.css / React-Spring

📚 Main Features Breakdown

### Navbar

- Shows Home, Listings, My Profile
- Shows Login/Register if logged out
- Shows user avatar + logout if logged in
- Display user's displayName on hover

### Home Page Sections

- Winter hero slider (Swiper)
- Popular Listings (JSON data)
- Winter Care Tips
- Meet Our Expert Vets

### Protected Service Details Page

- Only logged-in users can view
- Redirect to login if not authenticated
- After login, redirect back to requested page
- Shows full service information
- Book Service form (Name + Email)

### My Profile

- Shows user: Name, Email, Photo
- Update Profile button → lets user edit Name & Photo
