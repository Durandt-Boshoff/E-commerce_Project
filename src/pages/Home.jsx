import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CartSummary from "../components/CartSummary";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <main className="bg-[#EDEDED] min-h-screen p-[15px] flex">
      {/* Left sidebar */}
      <div className="shrink-0">
        <Sidebar />
      </div>

      {/* Main content */}
      <section className="flex-1 px-[32px]">
        <div className="w-full">
            {/* Navbar */}
            <div className="flex justify-center">
                <Navbar />
            </div>
            {/* Products */}
            <div className="mt-[32px]">
                <ProductList />
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