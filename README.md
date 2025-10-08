# 🛍️ E-Commerce React App
<div align="center">
A modern, full-featured e-commerce web application built with <b>React 19</b>, <b>Redux Toolkit</b>, <b>Appwrite authentication</b>, and <b>Tailwind CSS</b>. This project demonstrates a complete shopping experience with user authentication, cart management, product browsing, and responsive design.

&nbsp;

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.8.2-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Appwrite](https://img.shields.io/badge/Appwrite-20.0.0-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)](https://appwrite.io/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)


## 🚀 Live Demo

**[View Live Application →](https://ecommerce-web-app1.vercel.app/)**
</div>


## ✨ Features

### 🔐 Authentication System
- **User Registration & Login** - Complete auth flow with Appwrite
- **Profile Management** - User dashboard and account settings
- **Protected Routes** - Secure access control for authenticated users
- **Session Persistence** - Automatic login state management

### 🛒 E-Commerce Functionality
- **Product Catalog** - Browse products with loading states and error handling
- **Category Filtering** - Filter products by categories with session storage
- **Search Functionality** - Real-time product search
- **Product Details** - Individual product pages with slug-based routing
- **Shopping Cart** - Add/remove items with quantity management
- **Cart Persistence** - Cart data saved in localStorage
- **Checkout Process** - Complete checkout workflow

### 🎨 User Interface
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Top Discount Bar** - Promotional banner component
- **Navigation** - Sticky header with mobile hamburger menu
- **Loading Skeletons** - Smooth loading states for better UX
- **Hero Section** - Engaging homepage banner
- **Product Carousels** - Featured product displays

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Frontend** | React | 19.1.1 |
| **Build Tool** | Vite | 7.1.2 |
| **Styling** | Tailwind CSS | 4.1.12 |
| **State Management** | Redux Toolkit | 2.8.2 |
| **Routing** | React Router DOM | 7.8.1 |
| **Authentication** | Appwrite | 20.0.0 |
| **Forms** | React Hook Form | 7.62.0 |
| **Validation** | Yup | 1.7.0 |
| **UI Components** | Swiper | 11.2.10 |
| **Notifications** | React Toastify | 11.0.5 |
| **Icons** | Lucide React | 0.540.0 |

## 📁 Project Structure

```
src/
├── api/
│   └── productsApi.js          # RTK Query API slice
├── app/
│   └── store.js                # Redux store configuration
├── appwrite/
│   └── auth.js                 # Appwrite authentication service
├── components/
│   ├── Header/NavBar/          # Navigation with mobile menu
│   ├── Hero Section/           # Homepage hero banner
│   ├── Product Card/           # Individual product cards
│   ├── Search Bar/             # Search functionality
│   ├── Top Discount Bar/       # Promotional top banner
│   └── ...                     # Other UI components
├── features/
│   ├── authSlice.js            # Authentication state management
│   ├── categorySlice.js        # Category state (sessionStorage)
│   └── productToCart.js        # Cart management (localStorage)
├── pages/
│   ├── Home.jsx                # Homepage with hero & products
│   ├── Shop.jsx                # All products page
│   ├── SingleProduct.jsx       # Product detail page
│   ├── Cart.jsx                # Shopping cart page
│   ├── Login.jsx               # Login page
│   ├── Profile.jsx             # User profile page
│   └── ...                     # Other pages
├── App.jsx                     # Root component with auth check
└── main.jsx                    # App entry point with routing
```

## 🏗️ Architecture Overview

### Routing Structure
```
/ (App Layout)
├── / (Home)
├── /products (Shop - All Products)
├── /products/category (Category Products)
├── /products/slug/:slug (Single Product)
├── /cart (Shopping Cart)
├── /checkout (Checkout Process)
├── /login (User Login)
├── /sign-up (User Registration)
└── /profile (User Profile)
```

### State Management
- **Auth Slice**: User authentication status and data
- **Cart Slice**: Shopping cart with localStorage persistence
- **Category Slice**: Active category with sessionStorage
- **RTK Query**: Product data fetching with automatic caching

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn package manager
- Appwrite account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd e-commerce_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
   VITE_APPWRITE_PROJECT_ID=your_project_id_here
   ```

4. **Configure Appwrite**
   - Create a new project at [Appwrite Console](https://cloud.appwrite.io/)
   - Enable **Email/Password** authentication
   - Add your domain to **Platforms → Web**
   - Copy the Project ID to your `.env` file

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🛍️ Key Features Implementation

### Shopping Cart
- **Add to Cart**: Products added with quantity selection
- **Quantity Management**: Update item quantities in cart
- **Remove Items**: Individual item removal
- **Persistence**: Cart maintained in localStorage
- **Cart Counter**: Live cart count in navigation

### Authentication Flow
1. **Registration** - New users can sign up with email/password
2. **Login** - Existing users can authenticate
3. **Profile** - Authenticated users can view/edit profiles
4. **Auto-login** - Session persistence across browser refreshes
5. **Logout** - Secure session termination

### User Interface
- **Responsive Navigation**: Mobile hamburger menu + desktop navigation
- **Search Integration**: Expandable search bar in header
- **Loading States**: Skeleton loaders during API calls
- **Error Handling**: Graceful error messages for failed requests

## 📱 Responsive Design

### Breakpoints & Mobile Features
- **Mobile**: < 640px - Hamburger menu navigation
- **Tablet**: 640px - 1024px - Touch-friendly cart controls
- **Desktop**: > 1024px - Full navigation menu
- Optimized image sizes and responsive product grids

## 🚀 Deployment

### Production Build
```bash
npm run build
```

Creates an optimized build in the `dist/` folder with:
- Minified JavaScript and CSS
- Optimized asset bundling
- Image optimization for WebP format

### Environment Variables
```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_production_project_id
```

### Deployment Platforms
- **Vercel** (Recommended) - Automatic deployments from Git
- **Netlify** - Drag & drop or Git integration
- **GitHub Pages** - Static hosting


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Platzi Fake Store API](https://fakeapi.platzi.com/)** - Product data source
- **[Appwrite](https://appwrite.io/)** - Authentication and backend services
- **[React Team](https://reactjs.org/)** - Amazing UI library and ecosystem
- **[Redux Toolkit Team](https://redux-toolkit.js.org/)** - Simplified state management
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling

---

**Made with ❤️ using React 19, Redux Toolkit, Appwrite, and modern web technologies.**

