import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductById } from "../data/products";
import { addItem } from "../redux/cartSlice";

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-emerald-700">
        {"★".repeat(Math.round(rating))} {"☆".repeat(5 - Math.round(rating))}
      </span>
      <span className="text-xs text-gray-500">{rating}/5</span>
    </div>
  );
}

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const product = getProductById(id);

  if (!product) {
    return (
      <main className="px-6 py-16 text-center">
        <h1 className="text-2xl">Product not found</h1>
        <Link to="/" className="mt-6 inline-block rounded-md bg-neutral-900 px-5 py-2 text-white">
          Back to shop
        </Link>
      </main>
    );
  }

  function handleAdd() {
    dispatch(addItem(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <main className="px-6 py-6">
      <Link to="/" className="text-xs text-gray-600">{"<"} Back</Link>

      <div className="mt-4 flex flex-col gap-6 md:flex-row">
        <div className="order-2 flex gap-3 md:order-1 md:flex-col">
          <img src={product.image} alt="" className="h-10 w-10 rounded-md bg-white object-contain p-1" />
          <img src={product.image} alt="" className="h-10 w-10 rounded-md bg-white object-contain p-1" />
          <img src={product.image} alt="" className="h-10 w-10 rounded-md bg-white object-contain p-1" />
        </div>

        <div className="order-1 flex h-56 w-56 items-center justify-center rounded-lg bg-white p-4 md:order-2">
          <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
        </div>

        <div className="order-3 flex flex-1 flex-col">
          <h1 className="text-3xl font-medium">{product.name}</h1>
          <p className="text-gray-500">{product.subtitle}</p>
          <div className="mt-2"><Stars rating={product.rating} /></div>
          <p className="mt-3 text-lg font-medium">$ {product.price.toFixed(2)}</p>
          <p className="mt-2 max-w-md text-xs text-gray-700 leading-relaxed">{product.description}</p>
          <button onClick={handleAdd} className="mt-4 self-start rounded-md bg-neutral-900 px-4 py-2 text-xs text-white">
            {added ? "Added!" : "Add to Bag"}
          </button>
        </div>
      </div>

      <hr className="my-6" />
      <div>
        <h2 className="text-lg">Description</h2>
        <p className="mt-2 text-xs text-gray-700 leading-relaxed">{product.details}</p>
      </div>
    </main>
  );
}