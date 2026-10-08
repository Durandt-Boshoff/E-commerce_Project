function Sidebar() {
  const items = [
    { label: 'Menu', icon: '☰' },
    { label: 'Store', icon: '🏬', active: true },
    { label: 'Bag', icon: '👜' },
  ]

  return (
    <aside className="flex w-14 shrink-0 flex-col items-center justify-between rounded-2xl bg-white py-4">
      <div className="flex flex-col items-center gap-4">
        <span className="text-xl" aria-hidden="true">🛍️</span>
        {items.map((item) => (
          <button
            key={item.label}
            aria-label={item.label}
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-lg ${
              item.active ? 'bg-neutral-900 text-white' : 'text-neutral-700'
            }`}
          >
            {item.icon}
          </button>
        ))}
      </div>

      <button
        aria-label="Log out"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white"
      >
        ⎋
      </button>
    </aside>
  )
}

export default Sidebar