import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import CartIcon from "../assets/icons/Cart-White.svg";

function CartSummary() {

    const cartItems = useSelector(selectCartItems);

    return (
        <div className="min-h-screen p-[8px] flex flex-col items-center gap-7">
            <h1 className="text-[#1A1F16] text-[30px] font-medium">Bag</h1>

            <div className="grid grid-cols-3 gap-[8px] w-full">
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="aspect-square rounded-lg overflow-hidden flex items-center justify-center"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>

        <Link 
            to="/cart" 
            className="bg-[#1A1F16] text-white text-[16px] font-medium px-[24px] py-[8px] flex items-center rounded-3xl hover:bg-[#1A1F16CC] transition-all duration-300"
        >
            <img src={CartIcon} alt="Cart Icon" className="mr-[8px] w-[20px] h-[20px]"/>

            View Bag

        </Link>
        </div>
    );
    }

export default CartSummary;