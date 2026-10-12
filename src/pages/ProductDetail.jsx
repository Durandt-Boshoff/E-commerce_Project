import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../data/products";
import { addItem, increaseQty, decreaseQty, selectCartItems,} from "../redux/cartSlice";
import Sidebar from "../components/Sidebar";
import CartSummary from "../components/CartSummary";

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
  const cartItems = useSelector(selectCartItems);
  const product = getProductById(id);

  const cartItem = cartItems.find(
    (item) => item.id === product?.id
  );

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

return (
    <main className="bg-[#EDEDED] min-h-screen p-[15px] flex">
        {/* Sidebar */}
        <div className="shrink-0">
          <Sidebar />
        </div>
        
        <section className="flex-1 px-[32px] py-[6px]">
          <Link to="/" className="text-xs text-gray-600">{"<"} Back</Link>

          <div className="mt-4 flex flex-col gap-6 md:flex-row">
            <div className="order-2 flex gap-3 md:order-1 md:flex-col">
              <img src={product.image} alt="" className="h-10 w-10 rounded-md bg-white object-contain p-1"/>
              <img src={product.image} alt="" className="h-10 w-10 rounded-md bg-white object-contain p-1"/>
              <img src={product.image} alt="" className="h-10 w-10 rounded-md bg-white object-contain p-1"/>
            </div>

            <div className="order-1 flex h-56 w-56 items-center justify-center rounded-lg bg-white p-4 md:order-2">
              <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain"/>
            </div>

            <div className="order-3 flex flex-1 flex-col">
              <h1 className="text-3xl font-medium">{product.name}</h1>
              <p className="text-gray-500">{product.variant}</p>
              <div className="mt-2"><Stars rating={product.rating} /></div>
              <p className="mt-3 text-lg font-medium">${product.price.toFixed(2)}</p>
              <p className="mt-2 max-w-md text-xs leading-relaxed text-gray-700">{product.description}</p>

              <div className="mt-4 self-start">
                {cartItem ? (
                  <div className="flex items-center gap-3">
                    <button onClick={() => dispatch(decreaseQty(product.id))} className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-neutral-900 text-white hover:bg-neutral-700">
                      −
                    </button>
                    <span className="text-sm font-medium">
                      {cartItem.quantity}
                    </span>
                    <button onClick={() => dispatch(increaseQty(product.id))} className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-neutral-900 text-white hover:bg-neutral-700">
                      +
                    </button>
                  </div>
                ) : (
                  <button onClick={() => dispatch(addItem(product))} className="cursor-pointer rounded-md bg-neutral-900 px-4 py-2 text-xs text-white hover:bg-neutral-700">Add to Bag</button>
                )}
              </div>
            </div>
          </div>

          <hr className="my-6" />
          <div>
            <h2 className="text-lg">Description</h2>
            <p className="mt-2 text-xs leading-relaxed text-gray-700">{product.details}</p>
          </div>
        </section>
      <div className="hidden md:block w-[2px] self-stretch bg-[#1A1F1680] rounded-sm" />

      {/* Bag */}
      <aside className="hidden lg:block w-[240px] shrink-0 pl-[24px]">
        <CartSummary />
      </aside>
    </main>
  );
}

