import BagIcon from './icons/BagIcon'

function CartSummary({ items = [], onViewBag }) {
  return (
    <aside className="flex w-48 shrink-0 flex-col items-center gap-4 border-l-2 border-neutral-700 pl-4">
      <h2 className="text-2xl">Bag</h2>

      {items.length === 0 ? (
        <p className="text-sm text-gray-500">Your bag is empty.</p>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-1"
            >
              <img src={item.image} alt={item.name} className="h-full object-contain" />
            </div>
          ))}
        </div>
      )}

      <button
        onClick={onViewBag}
        className="flex items-center gap-1.5 rounded-lg bg-[#1A1F16] px-4 py-1.5 text-xs font-semibold text-white"
      >
        <BagIcon className="h-3.5 w-3.5" />
        View Bag
      </button>
    </aside>
  )
}

export default CartSummary