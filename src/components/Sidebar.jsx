import { Link, useNavigate } from "react-router-dom";
import Exit from "../assets/icons/Exit.svg";
import Logo from "../assets/icons/Logo.svg";
import Menu from "../assets/icons/Menu.svg";
import Store from "../assets/icons/Store.svg";
import Cart from "../assets/icons/Cart.svg";


function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className="hidden md:flex bg-white w-[72px] h-screen p-[16px] rounded-sm flex-col items-center justify-between">
            <div className="flex flex-col items-center gap-[32px]">
                {/* Logo */}
                <img className="w-[40px] h-[40px]" src={Logo} alt="Logo"/>
                {/* Menu */}
                <img className="w-[40px] h-[40px]" src={Menu} alt="Menu"/>
                {/* Store / Home */}
                <Link to="/" className="cursor-pointer" aria-label="Go to store">
                    <img className="w-[40px] h-[40px] bg-black rounded-lg p-[8px]" src={Store} alt="Store"/>
                </Link>

                {/* Cart */}
                <Link to="/cart" className="cursor-pointer" aria-label="Go to cart">
                    <img className="w-[40px] h-[40px]" src={Cart} alt="Cart"/>
                </Link>
            </div>

            {/* Back */}
            <div className="w-[56px] h-[56px] flex items-center justify-center">
                <button onClick={() => navigate(-1)} className="cursor-pointer" aria-label="Go back">
                    <img className="w-[40px] h-[40px] bg-[#E5252C] rounded-lg p-[8px]" src={Exit} alt="Exit"/>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
