import BagIcon from './icons/BagIcon'

function ProductCard({ name, subtitle, price, image, onAdd }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex aspect-square items-center justify-center rounded-2xl bg-white p-4">
        <img src={image} alt={name} className="h-full object-contain" />
      </div>
      <h3 className="mt-2 text-sm font-semibold">{name}</h3>
      <p className="text-xs text-gray-500">{subtitle}</p>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-sm font-semibold">$ {price}</span>
        <button
          onClick={onAdd}
          aria-label={`Add ${name} to bag`}
          className="flex h-6 w-6 items-center justify-center rounded-md bg-[#1A1F16] text-white"
        >
          <BagIcon className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}

export default ProductCard