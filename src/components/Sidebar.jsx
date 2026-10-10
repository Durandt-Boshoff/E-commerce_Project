import Exit from "../assets/icons/Exit.svg";
import Logo from "../assets/icons/Logo.svg";
import Menu from "../assets/icons/Menu.svg";
import Store from "../assets/icons/Store.svg";
import Cart from "../assets/icons/Cart.svg";


function Sidebar() {
    return (
        <div className="hidden md:flex bg-white w-[72px] h-screen p-[16px] rounded-sm flex-col items-center justify-between">
            <div className="flex flex-col items-center gap-[32px]">
                <img className="w-[40px] h-[40px]" src={Logo} alt="Logo" />
                <img className="w-[40px] h-[40px]" src={Menu} alt="Menu" />
                <img className="w-[40px] h-[40px] bg-black rounded-lg p-[8px]" src={Store} alt="Store"/>
                <img className="w-[40px] h-[40px]" src={Cart} alt="Cart" />
            </div>
            <div className="w-[56px] h-[56px] flex items-center justify-center">
                <img className="w-[40px] h-[40px] bg-[#E5252C] rounded-lg p-[8px]" src={Exit} alt="Exit"/>
            </div>
        </div>
    );
}

export default Sidebar;
