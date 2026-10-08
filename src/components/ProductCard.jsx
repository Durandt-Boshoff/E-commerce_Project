function ProductCard({ name, subtitle, price, image, onAdd }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex h-40 items-center justify-center rounded-2xl bg-white p-4">
        <img src={image} alt={name} className="h-full object-contain" />
      </div>
      <h3 className="mt-2 text-sm font-semibold">{name}</h3>
      <p className="text-xs text-gray-500">{subtitle}</p>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-sm font-semibold">$ {price}</span>
        <button
          onClick={onAdd}
          aria-label={`Add ${name} to bag`}
          className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-900 text-white"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ProductCard