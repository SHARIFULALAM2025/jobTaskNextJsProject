# E-Shopping 🛍️




A modern, full-stack e-commerce application built with Next.js and Express.js, featuring a responsive design, user authentication, and comprehensive product management.

## 📋 Project Description.....

E-Shopping is a complete e-commerce solution that provides users with a seamless online shopping experience. The application features a modern, responsive design with protected routes, user authentication, product browsing, and an intuitive admin panel for product management.

### Key Features

- **🏠 Modern Homepage**: Hero carousel, featured categories, best sellers, special offers, new arrivals, customer reviews, and newsletter signup
- **🔐 Authentication System**: Secure login/register with NextAuth.js and Google OAuth integration
- **🛡️ Protected Routes**: Smart authentication handling with immediate redirects
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **🛒 Product Management**: Add, view, and manage products with detailed information
- **🎨 Professional UI/UX**: Consistent design system with smooth animations and transitions
- **⚡ Performance Optimized**: Fast loading with Next.js 16 and modern React features

## 🚀 Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB database

### Backend Setup

1. **Navigate to Backend directory:**
   ```bash
   cd Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the Backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the backend server:**
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to Frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env.local` file in the frontend directory:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

### Production Build

1. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   npm start
   ```

## 🗺️ Route Summary

### Public Routes
| Route | Description | Features |
|-------|-------------|----------|
| `/` | Homepage | Hero carousel, featured sections, product showcases |
| `/item` | All Products | Product listing with search and filters |
| `/item/[id]` | Product Details | Detailed product information, reviews, related products |
| `/login` | Login Page | Email/password and Google OAuth login |
| `/register` | Registration | User account creation with image upload |

### Protected Routes (Require Authentication)
| Route | Description | Features |
|-------|-------------|----------|
| `/categories` | Categories Page | Browse products by category with filters |
| `/best-sellers` | Best Sellers | Top-rated and most popular products |
| `/new-arrivals` | New Arrivals | Latest products with arrival dates |
| `/contact` | Contact Page | Contact form, business info, FAQ section |
| `/product` | Add Product | Product creation form for admins |

### Authentication Flow
- **Unauthenticated Access**: Redirected to `/login` with return URL
- **Post-Login Redirect**: Automatically redirected to intended page
- **Session Management**: Persistent login with cookies and NextAuth

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 16.1.3 (React 19.2.3)
- **Styling**: Tailwind CSS 4 + DaisyUI 5.5.14
- **Authentication**: NextAuth.js 4.24.13
- **Forms**: React Hook Form 7.71.1
- **HTTP Client**: Axios 1.13.2
- **Icons**: React Icons 5.5.0
- **Carousel**: Swiper 12.0.3
- **State Management**: React Hooks + Cookies

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Database**: MongoDB 7.0.0
- **Authentication**: bcrypt 6.0.0
- **Environment**: dotenv 17.2.3
- **CORS**: cors 2.8.5

## 📁 Project Structure

```
E-Shopping/
├── Backend/
│   ├── index.js              # Express server setup
│   ├── package.json          # Backend dependencies
│   └── .env                  # Backend environment variables
├── frontend/
│   ├── src/
│   │   ├── app/              # Next.js app directory
│   │   │   ├── page.jsx      # Homepage
│   │   │   ├── layout.jsx    # Root layout
│   │   │   ├── globals.css   # Global styles
│   │   │   ├── categories/   # Categories page
│   │   │   ├── best-sellers/ # Best sellers page
│   │   │   ├── new-arrivals/ # New arrivals page
│   │   │   ├── contact/      # Contact page
│   │   │   ├── product/      # Add product page
│   │   │   ├── item/         # Product pages
│   │   │   ├── login/        # Login page
│   │   │   └── register/     # Registration page
│   │   ├── Components/       # Reusable components
│   │   │   ├── Header/       # Navigation components
│   │   │   ├── Footer/       # Footer component
│   │   │   ├── ProtectedRoute/ # Route protection
│   │   │   ├── ProtectedLink/  # Protected navigation
│   │   │   ├── Login/        # Login component
│   │   │   ├── Register/     # Registration component
│   │   │   ├── AddProduct/   # Product creation
│   │   │   ├── Card/         # Product cards
│   │   │   ├── Carousel/     # Hero carousel
│   │   │   ├── FeaturedCategories/ # Category showcase
│   │   │   ├── BestSellers/  # Best sellers section
│   │   │   ├── SpecialOffers/ # Offers section
│   │   │   ├── NewArrivals/  # New arrivals section
│   │   │   ├── CustomerReviews/ # Reviews section
│   │   │   ├── Newsletter/   # Newsletter signup
│   │   │   └── Toast/        # Notification system
│   │   ├── provider/         # Context providers
│   │   └── lib/              # Utility functions
│   ├── package.json          # Frontend dependencies
│   ├── next.config.mjs       # Next.js configuration
│   ├── tailwind.config.js    # Tailwind configuration
│   └── .env.local            # Frontend environment variables
└── README.md                 # Project documentation
```

## 🔐 Authentication System

### Demo Credentials
For testing purposes, use these credentials:
- **Email**: `sharifullinkdin2025@gmail.com`
- **Password**: `abc123`

### Authentication Features
- **Cookie-based Sessions**: Persistent login state
- **Google OAuth**: Social login integration
- **Protected Routes**: Automatic redirect handling
- **Real-time Updates**: Immediate UI updates on auth state changes

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with breakpoints
- **Modern UI**: Clean, professional interface with smooth animations
- **Consistent Theming**: Unified color scheme and typography
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Heroku)
1. Create a new app on your preferred platform
2. Set environment variables
3. Connect to your MongoDB Atlas database
4. Deploy from GitHub repository

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**E-Shopping Team**
- Frontend: Next.js, React, Tailwind CSS
- Backend: Node.js, Express, MongoDB
- Authentication: NextAuth.js, Google OAuth

---

**Happy Shopping! 🛍️**