import React from "react";
import type { ProductDisplayProps } from "../../types";

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      {/* Product Image */}
      {product.imageUrl ? (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      ) : (
        <div className="w-full h-48 bg-gray-100 rounded-md mb-4 flex items-center justify-center text-gray-400">
          No Image Available
        </div>
      )}

      {/* Product Name and Price */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <span className="text-lg font-bold text-green-600">
          ${product.price.toFixed(2)}
        </span>
      </div>

      {/* Optional Description */}
      {showDescription && (
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
      )}

      {/* Optional Stock Status */}
      {showStockStatus && (
        <p
          className={`mt-2 text-sm font-medium ${
            product.inStock ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}

      {/* Optional Add to Cart Button */}
      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          disabled={!product.inStock}
          className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add to Cart
        </button>
      )}

      {/* Children */}
      {children}
    </div>
  );
};
