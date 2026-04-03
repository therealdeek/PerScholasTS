import { useState } from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import type { User, Product } from "./types/index";

// ── Sample Data ─────────────────────────────────────────────────
const sampleUser: User = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Software Engineer",
  avatarUrl: "https://i.pravatar.cc/150?img=3",
};

const sampleProduct: Product = {
  id: "1",
  name: "Wireless Headphones",
  price: 199.99,
  description: "High-quality wireless headphones with noise cancellation.",
  imageUrl:
    "https://images.pexels.com/photos/28920288/pexels-photo-28920288/free-photo-of-modern-white-wireless-headphones-on-gray-surface.jpeg?auto=compress&cs=tinysrgb&w=400",
  inStock: true,
};

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  const handleEdit = (userId: string) => {
    alert(`Editing user: ${userId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Component Library
      </h1>

      {/* Alert — only shows after adding to cart */}
      {showAlert && (
        <div className="mb-6">
          <AlertBox
            type="success"
            message={`Product added to cart! Cart has ${cartItems.length} item(s).`}
            onClose={() => setShowAlert(false)}
          >
            <p className="text-sm mt-1">You can continue shopping.</p>
          </AlertBox>
        </div>
      )}

      {/* AlertBox Variants */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          AlertBox Variants
        </h2>
        <div className="space-y-3">
          <AlertBox type="success" message="This is a success alert." />
          <AlertBox type="error" message="This is an error alert." />
          <AlertBox type="warning" message="This is a warning alert." />
          <AlertBox type="info" message="This is an info alert." />
        </div>
      </section>

      {/* User and Product side by side */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Component Composition
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UserProfileCard
            user={sampleUser}
            showEmail={true}
            showRole={true}
            onEdit={handleEdit}
          >
            <p className="text-sm text-gray-400 mt-3">
              Last login: 2 hours ago
            </p>
          </UserProfileCard>

          <ProductDisplay
            product={sampleProduct}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={handleAddToCart}
          >
            <p className="text-sm text-gray-400 mt-3">
              Free shipping available
            </p>
          </ProductDisplay>
        </div>
      </section>
    </div>
  );
}

export default App;
