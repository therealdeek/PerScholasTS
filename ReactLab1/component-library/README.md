# ReactLab1: Component Library

This is a reusable React component library built with TypeScript.

## Components Implemented

### 1. AlertBox
A component to display alert messages to the user.

**Props:**
- `type`: One of `"success"`, `"error"`, `"warning"`, `"info"`.
- `message`: `string` - The main alert message.
- `onClose`: `() => void` (optional) - Function to call when dismiss/close is clicked.
- `children`: `React.ReactNode` (optional) - Additional content inside the alert.

**Example Usage:**
```tsx
import { AlertBox } from './components/AlertBox';

function App() {
  return (
    <AlertBox 
      type="success" 
      message="Operation completed successfully!" 
      onClose={() => console.log('Closed')}
    />
  );
}
```

### 2. UserProfileCard
Displays user profile information.

**Props:**
- `user`: `User` object containing `id`, `name`, `email`, `role`, and optional `avatarUrl`.
- `showEmail`: `boolean` (optional) - Flag to display the email.
- `showRole`: `boolean` (optional) - Flag to display the user role.
- `onEdit`: `(userId: string) => void` (optional) - Callback function for edit action.
- `children`: `React.ReactNode` (optional)

**Example Usage:**
```tsx
import { UserProfileCard } from './components/UserProfileCard';

const mockUser = {
  id: "1",
  name: "Jane Doe",
  email: "jane@example.com",
  role: "Admin"
};

function App() {
  return (
    <UserProfileCard 
      user={mockUser} 
      showEmail={true} 
      showRole={true} 
      onEdit={(id) => console.log('Edit user', id)} 
    />
  );
}
```

### 3. ProductDisplay
A card specifically for displaying product details.

**Props:**
- `product`: `Product` object containing `id`, `name`, `price`, `description`, `inStock`, and optional `imageUrl`.
- `showDescription`: `boolean` (optional)
- `showStockStatus`: `boolean` (optional)
- `onAddToCart`: `(productId: string) => void` (optional)
- `children`: `React.ReactNode` (optional)

**Example Usage:**
```tsx
import { ProductDisplay } from './components/ProductDisplay';

const mockProduct = {
  id: "p1",
  name: "Wireless Mouse",
  price: 29.99,
  description: "Ergonomic wireless mouse.",
  inStock: true
};

function App() {
  return (
    <ProductDisplay 
      product={mockProduct} 
      showDescription={true} 
      showStockStatus={true}
      onAddToCart={(id) => console.log('Added to cart:', id)}
    />
  );
}
```
