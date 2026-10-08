function SearchBar({ value, onChange }) {
  return (
    <div className="mx-auto w-full max-w-md">
      <label htmlFor="search" className="mb-1 block text-xs text-gray-500">
        Search Item
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
        className="w-full rounded-xl bg-white px-4 py-2 text-sm shadow-md outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-900"
      />
    </div>
  )
}

export default SearchBar