function Navbar() {
  return (
    <nav className="w-full">
      <h1 className="text-[16px] font-semibold text-[#333333] mb-[8px]">
        Search item
      </h1>

      <div className="bg-white w-full max-w-[507px] h-[56px] rounded-lg flex items-center py-[8px] px-[16px] shadow-lg">
        <input
          type="text"
          placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
          className="w-full bg-transparent text-[17px] font-medium text-[#1A1F16] placeholder:text-[#1A1F1680] outline-none"
        />
      </div>
    </nav>
  );
}

export default Navbar;