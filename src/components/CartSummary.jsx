import CartIcon from "../assets/icons/Cart-White.svg";

function CartSummary() {
    return (
        <div className="min-h-screen p-[8px] flex flex-col items-center gap-7">
        <h1 className="text-[#1A1F16] text-[30px] font-medium">Bag</h1>
        <a href="#" className="bg-[#1A1F16] text-white text-[16px] font-medium px-[24px] py-[8px] flex items-center rounded-3xl hover:bg-[#1A1F16CC] transition-all duration-300">
            <img src={CartIcon} alt="Cart Icon" className="mr-[8px] w-[20px] h-[20px]"/>
            View Bag
        </a>
        </div>
    );
    }

export default CartSummary;