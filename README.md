# E-Commerce React App

A modern, responsive e-commerce web application built with React js, Redux Toolkit, and Tailwind CSS. This project features a clean UI, shopping cart functionality, product browsing, and a complete checkout process.

## 🚀 Features

- **Product Catalog**: Browse and search through products
- **Product Details**: Detailed product pages with images and descriptions
- **Shopping Cart**: Add, remove, and manage cart items
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **State Management**: Redux Toolkit for efficient state management
- **Routing**: React Router for navigation
- **Form Handling**: React Hook Form with Yup validation
- **Carousel**: Swiper.js for image carousels
- **Toast Notifications**: React Toastify for user feedback
<!--- **SEO Friendly**: React Helmet for meta tags-->

## 🌐 Live Preview

Experience the app live on Vercel!

**🔗 [[View Live Demo]](https://your-app-name.vercel.app)**


## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **Yup** - Form validation
- **Swiper** - Touch slider/carousel
- **React Toastify** - Notifications
- **Lucide React** - Icons

### API
- **RTK Query** - Data fetching and caching
- **FakeStore API** - External product data source

## 📁 Project Structure

```
src/
├── api/                    # API configuration and endpoints
│   └── productsApi.js     # RTK Query API slice
├── app/                   # Redux store configuration
├── assets/                # Static assets (images, icons)
├── components/            # Reusable UI components
│   ├── Breadcrumb/        # Navigation breadcrumbs
│   ├── Carousel/          # Image carousel
│   ├── Footer/            # Footer component
│   ├── Footer Stripe/     # Footer stripe section
│   ├── Header/            # Header and navigation
│   ├── Hero Section/      # Landing page hero
│   ├── Product Card/      # Product display card
│   ├── Product Detail/    # Product details view
│   └── Related Products/  # Related products section
├── features/              # Redux slices and features
│   └── productToCart.js   # Cart functionality
├── pages/                 # Page components
│   ├── Home.jsx          # Home page
│   ├── Shop.jsx          # Products listing
│   ├── SingleProduct.jsx # Product detail page
│   ├── Cart.jsx          # Shopping cart
│   ├── Checkout.jsx      # Checkout process
│   ├── About.jsx         # About page
│   └── Contact.jsx       # Contact page
├── util/                 # Utility functions
│   └── Scroll to Top/    # Scroll to top component
├── App.jsx              # Root component
├── index.css            # Root component styles
└── main.jsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

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

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### API Configuration
The app uses RTK Query to fetch data from an external API. The base URL is configured in `src/api/productsApi.js`:

```javascript
baseUrl: 'https://api.escuelajs.co/api/v1/'
```

<!--### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_API_BASE_URL=https://api.escuelajs.co/api/v1/
```-->

## 📱 Pages and Features

### Home Page
- Hero section with featured products
- Product categories
- Latest products showcase

### Shop Page
- Product filtering and sorting
- Pagination support
<!--- Search functionality-->

### Product Detail Page
- High-resolution product images
- Detailed product information
- Add to cart functionality
- Related products suggestions

### Cart Page
- View cart items
- Update quantities
- Remove items
- Calculate totals

### Checkout Page
- Customer information form
- Order summary
- Form validation

## 🎨 Styling

The project uses **Tailwind CSS** for styling with a mobile-first approach. Custom styles are defined in `src/index.css`.

### Key Design Features
- Responsive grid layouts
- Modern color palette
- Smooth animations and transitions
- Accessible form elements
- Consistent spacing and typography

## 🔄 State Management

Redux Toolkit is used for state management with the following structure:

- **Products**: Fetched via RTK Query
- **Cart**: Managed with Redux slice
- **UI State**: Loading states, modals, notifications

<!--## 🔮 Future Enhancements

### Planned Features
- [ ] User authentication and login
- [ ] User profiles and order history
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Advanced filtering (price, category, brand)
- [ ] Payment gateway integration
- [ ] Order tracking
- [ ] Admin panel for product management
- [ ] Multi-language support
- [ ] Dark mode toggle

### Technical Improvements
- [ ] Add unit and integration tests
- [ ] Implement caching strategies
- [ ] Add PWA capabilities
- [ ] Optimize bundle size
- [ ] Add error boundaries
- [ ] Implement lazy loading

## 🐛 Known Issues

- No known critical issues at this time
- Report bugs in the GitHub Issues section-->

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **FakeStore API** for providing product data
- **React Community** for excellent documentation
- **Tailwind CSS** for the utility-first CSS framework
- **Redux Toolkit** team for simplified state management

---

**Happy Shopping! 🛒**

Made with ❤️ using React and modern web technologies.
