import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addItem, increaseQty, decreaseQty, selectCartItems,} from "../redux/cartSlice";
import CartIcon from "../assets/icons/Cart-White.svg";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const cartItem = cartItems.find(
    (item) => item.id === product.id
  );

  return (
    <div className="w-full max-w-[180px]">
      <Link to={`/product/${product.id}`} className="block">
        {/* Product image */}
        <div className="bg-white rounded-xl p-[8px] flex items-center justify-center overflow-hidden">
          <img src={product.image} alt={product.name} className="max-w-full max-h-[210px] object-contain"/>
        </div>

        {/* Product information */}
        <div className="mt-[12px]">
          <h2 className="text-[16px] font-medium text-[#1A1F16]">
            {product.name}
          </h2>
          <p className="text-[14px] text-[#1A1F1680]">
            {product.variant}
          </p>
        </div>
      </Link>

      {/* The price and cart controls */} 
      <div className="mt-[12px] flex items-center justify-between">
        <p className="text-[16px] font-medium text-[#1A1F16]">
          ${product.price.toFixed(2)}
        </p>

        {cartItem ? (
          <div className="flex items-center gap-[8px]">
            <button onClick={() => dispatch(decreaseQty(product.id))} className="w-[28px] h-[28px] rounded-lg bg-[#1A1F16] text-white flex items-center justify-center cursor-pointer hover:bg-[#1A1F16CC] transition-colors" aria-label="Decrease quantity">
              −
            </button>
            <span className="text-[14px] font-medium text-[#1A1F16]">
              {cartItem.quantity}
            </span>
            <button onClick={() => dispatch(increaseQty(product.id))} className="w-[28px] h-[28px] rounded-lg bg-[#1A1F16] text-white flex items-center justify-center cursor-pointer hover:bg-[#1A1F16CC] transition-colors" aria-label="Increase quantity">
              +
            </button>
          </div>
        ) : (
          <button onClick={() => dispatch(addItem(product))} className="w-[32px] h-[32px] rounded-lg bg-[#1A1F16] flex items-center justify-center cursor-pointer hover:bg-[#1A1F16CC] transition-colors" aria-label={`Add ${product.name} to cart`}>
            <img src={CartIcon} alt="" className="w-[16px] h-[16px]"/>
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;