import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CartSummary from "../components/CartSummary";
import ProductList from "../components/ProductList";
import Menu from "../assets/icons/Menu.svg";
import { useState } from "react";

function Home() {

    const [searchTerm, setSearchTerm] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main className="bg-[#EDEDED] min-h-screen p-[15px] flex">
        {/* Left sidebar */}
        <div className="shrink-0">
            <Sidebar />
        </div>

        {/* Main content */}
        <section className="flex-1 px-[32px]">
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-[40px] h-[40px] flex items-center justify-center">
                <img src={Menu} alt="Open menu" className="w-[24px] h-[24px]"/>
            </button>

            {menuOpen && (
            <div className="md:hidden bg-white p-[16px] rounded-lg mb-[16px]">
                <p>Store</p>
                <p>Bag</p>
                <p>Exit</p>
            </div>
            )}
            
            <div className="w-full">
                {/* Navbar */}
                <div className="flex justify-center">
                    <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                {/* Products */}
                <div className="mt-[32px]">
                    <ProductList searchTerm={searchTerm} />
                </div>
            </div>
        </section>

        {/* The vertical divider line*/}
        <div className="hidden md:block w-[2px] self-stretch bg-[#1A1F1680] rounded-sm" />

        {/* Bag section */}
        <aside className="hidden lg:block w-[240px] shrink-0 pl-[24px]">
            <CartSummary />
        </aside>
        </main>
    );
    }

export default Home;