# E-commerce Product Management

A modern e-commerce product management system built with React and TypeScript, featuring a shopping cart, product listing, and real-time quantity management.

## 🚀 Repository

[https://github.com/AhmedMohsen600/store-test.git](https://github.com/AhmedMohsen600/store-test.git)

## 🚀 Technologies & Tools

### Core

- React 18
- TypeScript 5
- Vite 5.x
- React Router v6 (Navigation)

### State Management & Data Fetching

- Zustand (Cart state management)
- React Context (Dialog management)
- TanStack Query (Data fetching and server state management)
- Axios (HTTP client with interceptors)

### Styling

- Tailwind CSS 3
- Shadcn/ui (UI components)
- Class Variance Authority (CV/A)

### Code Quality

- ESLint with TypeScript support
- TypeScript strict mode
- Prettier
- PostCSS

## ✨ Features

- **Product Management**
  - Product listing
  - Product details view
  - Image optimization
- **Shopping Cart**
  - Add/remove products
  - Quantity management with confirmation dialog
  - Real-time total calculation
  - Cart badge indicator
  - Remove confirmation dialog
- **UI/UX**
  - Responsive design
  - Interactive quantity controls
  - Cart badge indicator
  - Confirmation dialogs for destructive actions
  - Modern and clean interface

## 🛠️ Installation

1. Clone the repository

```bash
git clone https://github.com/AhmedMohsen600/store-test.git
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/         # Reusable UI components
├── features/          # Feature-based modules
│   └── productManagement/
│       ├── routes/    # Route components
│       ├── services/  # Feature-specific API services
│       ├── types/     # Feature-specific TypeScript types
│       └── components/# Feature-specific components
├── router/            # Modular routing system
│   └── index.tsx      # Main router configuration
├── stores/            # Zustand store definitions
├── GlobalDialog/      # Dialog context and components
├── layout/           # Layout components and wrappers
│   ├── ProductManagementLayouts/  # Main product layout
│   └── AuthLayout/    # Authentication layout
└── constant/          # Application constants
```

### Feature-Based Organization

Each feature in the application maintains its own:

- **Routes**: Navigation and page components
- **Services**: API calls and data management
- **Types**: TypeScript interfaces and types
- **Components**: UI components specific to the feature

Example feature structure:

```
features/
└── productManagement/
    ├── routes/
    │   ├── index.ts
    │   ├── ProductList.tsx
    │   └── ProductDetail.tsx
    ├── services/
    │   ├── productApi.ts
    │   └── cartService.ts
    ├── types/
    │   └── product.types.ts
    └── components/
        ├── ProductCard.tsx
        └── ProductGrid.tsx
```

The `layout/` directory contains wrapper components that define the structure and common elements for different sections of the application. Each layout can include:

- Navigation components
- Header/footer elements
- Sidebar menus
- Common UI elements
- Layout-specific styling and behavior

Layouts are used in conjunction with the routing system to provide consistent user interfaces across different sections of the application. Different routes can use different layouts as needed, allowing for flexible page organization.

## 🔧️ Routing System

The project implements a modular routing system using React Router v6, organized for scalability and maintainability.

### Router Structure

- Located in `src/router/index.tsx`
- Uses `createBrowserRouter` from React Router
- Implements a feature-based routing approach

### Key Features

- **Modular Organization**: Each feature maintains its own routes in separate files
- **Layout Wrapping**: Routes can be wrapped with specific layouts
- **Nested Routing**: Supports nested routes through the `children` property
- **Scalable Structure**: Easy to add new feature routes without modifying existing ones

### Example Structure

```typescript
router/
├── index.tsx                    # Main router configuration
└── features/
    └── productManagement/
        └── routes/
            ├── index.ts         # Route definitions
            ├── ProductList.tsx   # Product list route
            └── Cart.tsx         # Cart route
```

### Adding New Routes

To add new feature routes:

1. Create a new route file in the feature's routes directory
2. Export the routes configuration
3. Import and spread the routes in the main router file

```typescript
// Example of adding new feature routes
export const router = createBrowserRouter([
  {
    element: <ProductManagementLayouts />,
    children: [
      ...ProductsRoutes.routes,
      // Add more feature routes:
      // ...AuthRoutes.routes,
      // ...DashboardRoutes.routes,
    ],
  },
]);
```

### Root-Level Routes

The router also supports multiple root-level routes with different layouts:

```typescript
export const router = createBrowserRouter([
  {
    element: <ProductManagementLayouts />,
    children: [...ProductsRoutes.routes, ...SettingsRoutes.routes],
  },
  // Add separate layout routes
  {
    element: <AuthLayout />,
    children: [...AuthRoutes.routes],
  },
  // Each root route can have its own layout and child routes
]);
```

## 🎨 UI Components

The project utilizes Shadcn/ui, a collection of re-usable components built with:

- Radix UI for accessibility
- Tailwind CSS for styling
- TypeScript for type safety

### Key Features

- Fully accessible components following WAI-ARIA guidelines
- Customizable themes and styling
- Seamless integration with Tailwind CSS
- Type-safe props and configurations

### Components Used

- **Dialog/Modal**

  - Confirmation dialogs
  - Custom modal windows
  - Accessible overlay system

- **Form Controls**

  - Input fields with validation
  - Radio groups for selections
  - Custom tooltips for helper text
  - Form validation states

- **Navigation**

  - Drawer/Sidebar navigation
  - Dropdown menus

- **Interactive Elements**
  - Buttons with variants
  - Tooltips for additional information
  - Loading indicators
  - Radio buttons and checkboxes

These components provide a consistent, modern, and accessible user interface throughout the application while maintaining a cohesive design system.

This structure allows you to:

- Use different layouts for distinct sections of your application
- Maintain separate routing logic for features like authentication
- Keep your routing organization clean and scalable

## 🔧 Development

### Running Tests

```bash
npm run test
```

### Building for Production

```bash
npm run build
```

### Environment Setup

Make sure you have Node.js 16+ installed on your machine.

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details

## ��� Language Distribution

- TypeScript: 83.5%
- JavaScript: 12.9%
- CSS: 3.1%
- HTML: 0.5%
