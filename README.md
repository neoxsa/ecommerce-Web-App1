# E-Commerce React App

A modern, feature-rich e-commerce web application built with React 19, Redux Toolkit, Appwrite authentication, and Tailwind CSS. This project features a complete shopping experience with user authentication, product browsing, cart management, and a responsive design.

## 🚀 Features

- **User Authentication**: Auth system with Appwrite (Sign up, Login, Logout, Profile)
- **Product Catalog**: Browse products with category filtering and search
- **Product Details**: Detailed product pages with images and descriptions
- **Shopping Cart**: Add, remove, and manage cart items with quantity controls
- **Categories**: Browse products by specific categories
- **Responsive Design**: Mobile-first design with Tailwind CSS 4
- **State Management**: Redux Toolkit for efficient global state
- **Routing**: React Router DOM 7 for seamless navigation
- **Form Handling**: React Hook Form with Yup validation
- **Carousel**: Swiper.js for product image galleries
- **Toast Notifications**: React Toastify for user feedback
- **Modern Icons**: Lucide React icon library

## 🌐 Live Preview

Experience the app live on Vercel!

**🔗 [[View Live Demo]](https://ecommerce-web-app1.vercel.app/)**

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **Vite 7** - Lightning-fast build tool and dev server
- **Redux Toolkit 2.8** - Modern Redux with RTK Query
- **React Router DOM 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Hook Form 7.62** - Performant form library
- **Yup 1.7** - Schema validation
- **Swiper 11** - Modern touch slider
- **React Toastify 11** - Toast notifications
- **Lucide React** - Beautiful icon set

### Backend Services
- **Appwrite 20** - Backend-as-a-Service for authentication
- **Platzi Fake Store API** - Product data source

### Development
- **ESLint 9** - Code linting
- **Vite Plugin React** - React support for Vite

## 📁 Project Structure

```
src/
├── api/                    # API configuration and endpoints
│   └── productsApi.js     # RTK Query API slice with all endpoints
├── app/                   # Redux store configuration
├── appwrite/              # Appwrite authentication services
│   └── auth.js           # Auth service class with all auth methods
├── assets/                # Static assets (images, icons)
├── components/            # Reusable UI components
│   ├── Breadcrumb/        # Navigation breadcrumbs
│   ├── Carousel/          # Image carousel component
│   ├── CategoriesBtns/    # Category filter buttons
│   ├── Category Products/ # Category-specific product display
│   ├── Footer/            # Footer component
│   ├── Footer Stripe/     # Footer stripe section
│   ├── Header/            # Header with navigation and auth
│   ├── Hero Section/      # Landing page hero
│   ├── Log In/            # Login form component
│   ├── Logout Btn/        # Logout button component
│   ├── Product Card/      # Product display card
│   ├── Product Detail/    # Product details view
│   ├── Related Products/  # Related products section
│   ├── Search Bar/        # Search functionality
│   └── Sign Up/           # Registration form component
├── config/                # Configuration files
│   └── config.js         # Environment variables config
├── features/              # Redux slices and features
│   ├── authSlice.js      # Authentication state management
│   ├── categorySlice.js  # Category state management
│   └── productToCart.js  # Shopping cart functionality
├── pages/                 # Page components
│   ├── About.jsx         # About page
│   ├── Cart.jsx          # Shopping cart page
│   ├── CategoryProducts.jsx # Category products page
│   ├── Checkout.jsx      # Checkout process
│   ├── Contact.jsx       # Contact page
│   ├── Home.jsx          # Home page
│   ├── Login.jsx         # Login page
│   ├── ProductsByCategory.jsx # Products by category
│   ├── Profile.jsx       # User profile page
│   ├── Shop.jsx          # All products page
│   ├── Signup.jsx        # Registration page
│   ├── SingleProduct.jsx # Product detail page
│   └── index.js          # Page exports
├── util/                 # Utility functions and components
├── App.jsx              # Root component with routing
├── index.css            # Global styles and Tailwind imports
└── main.jsx             # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Appwrite account (for authentication features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd e-commerce_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_APPWRITE_URL=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_project_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Authentication Setup

The app uses Appwrite for authentication. To set up:

1. Create an Appwrite account at [appwrite.io](https://appwrite.io)
2. Create a new project
3. Enable Email/Password authentication
4. Add your domain to the platforms
5. Copy your endpoint URL and project ID to `.env`

### Authentication Features
- User registration with email verification
- Email/password login
- Secure logout
- User profile management
- Protected routes for authenticated users

## 🛒 E-commerce Features

### Product Management
- Browse all products
- Filter by categories
- Search functionality
- Product detail views with image carousels
- Related products suggestions

### Shopping Cart
- Add/remove products
- Update quantities
- Calculate totals
- Persistent cart state
- Cart item counter in header

### Categories
- Dynamic category filtering
- Category-specific pages
- Category navigation buttons

## 🎨 Styling and UI

The project uses **Tailwind CSS 4** with:
- Mobile-first responsive design
- Custom color palette
- Smooth animations and transitions
- Accessible components
- Modern card-based layouts
- Consistent spacing and typography

## 🔄 State Management

### Redux Store Structure
- **Products**: Managed via RTK Query with caching
- **Authentication**: User state and login status
- **Cart**: Shopping cart items and calculations
- **Categories**: Active category and filtering
- **UI State**: Loading states, modals, notifications

### RTK Query Endpoints
- `getProducts` - Fetch all products
- `getProductById` - Get specific product
- `getProductBySlug` - Get product by slug
- `getProductsPaged` - Paginated products

## 📱 Responsive Design

The application is fully responsive with:
- Mobile navigation menu
- Responsive product grids
- Touch-friendly cart controls
- Optimized images for all screen sizes
- Progressive enhancement

## 🚀 Deployment

The app is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Build Process
```bash
npm run build
```
This creates an optimized production build in the `dist/` folder.

## 🔒 Environment Variables

Required environment variables:
```env
VITE_APPWRITE_URL=https://[HOSTNAME_OR_IP]/v1
VITE_APPWRITE_PROJECT_ID=your_unique_project_id
```

## 📄 API Integration

### Products API
- **Base URL**: `https://api.escuelajs.co/api/v1/`
- **Endpoints**: Products, categories, product details
- **Features**: Pagination, filtering, search

### Authentication API
- **Service**: Appwrite Cloud
- **Features**: User management, session handling, security

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Platzi Fake Store API** for providing comprehensive product data
- **Appwrite Team** for the excellent BaaS platform
- **React Community** for outstanding documentation and support
- **Tailwind CSS** for the utility-first approach
- **Redux Toolkit** team for simplifying state management
- **Vite** for blazing fast development experience

<!--## 🔮 Future Enhancements

- Payment integration (Stripe/PayPal)
- Order history and tracking
- Product reviews and ratings
- Wishlist functionality
- Admin dashboard
- Email notifications
- Multi-language support

----->

**Happy Shopping! 🛒**

Made with ❤️ using React 19, Redux Toolkit, Appwrite, and modern web technologies.
