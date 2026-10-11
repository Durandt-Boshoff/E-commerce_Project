import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import {
    selectCartItems,
    selectCartTotalPrice,
} from "../redux/cartSlice"
import CartIcon from "../assets/icons/Cart-White.svg"

function CartSummary({ 
    showCheckout = false,
    showViewBag = true,
}) {
    const cartItems = useSelector(selectCartItems)
    const totalPrice = useSelector(selectCartTotalPrice)

    return (
        <div className="flex w-full flex-col items-center gap-5 p-2">
            <h1 className="text-[30px] font-medium text-[#1A1F16]">
                Bag
            </h1>

            {/* Product image preview */}
            <div className="grid w-full grid-cols-3 gap-2">
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-white p-1"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Total */}
            {cartItems.length > 0 && (
                <p className="text-center text-sm text-[#1A1F16]">
                    Bag Total:{" "}
                    <span className="ml-1 font-medium">
                        ${totalPrice.toLocaleString(
                            "en-US",
                            {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            }
                        )}
                    </span>
                </p>
            )}

            {/* View Bag */}
            {showViewBag && (
                <Link
                    to="/cart"
                    className="flex items-center rounded-3xl bg-[#1A1F16] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1A1F16CC]"
                >
                    <img
                        src={CartIcon}
                        alt=""
                        className="mr-2 w-5 h-5"
                    />
                    View Bag
                </Link>
            )}

            {/* Checkout */}
            {showCheckout && cartItems.length > 0 && (
                <Link
                    to="/checkout"
                    className="flex items-center rounded-3xl bg-[#1A1F16] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1A1F16CC]"
                >
                    <img
                        src={CartIcon}
                        alt=""
                        className="mr-2 w-5 h-5"
                    />
                    Checkout
                </Link>
            )}
        </div>
    )
}

export default CartSummary