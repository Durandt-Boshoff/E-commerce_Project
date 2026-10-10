const SHIPPING = 6.99
const GST_RATE = 0.13

const round2 = (n) => Math.round(n * 100) / 100
const money = (n) => `$ ${n.toFixed(2)}`

function OrderSummary({ itemsTotal, giftCard = 0, onPlaceOrder }) {
  const shipping = itemsTotal > 0 ? SHIPPING : 0
  const gst = round2(itemsTotal * GST_RATE)
  // Matches the Figma: shipping is shown but not added to the total
const total = round2(itemsTotal + gst - giftCard)
  const rows = [
    { label: 'Items:', value: itemsTotal },
    { label: 'Shipping:', value: shipping },
    { label: 'Estimated GST:', value: gst },
    { label: 'Gift Card:', value: giftCard },
  ]

  return (
    <aside className="w-64 rounded-xl bg-white p-4 text-xs">
      <h2 className="mb-3 font-semibold">Order Summary</h2>

      {rows.map((row) => (
        <div key={row.label} className="mb-1 flex justify-between text-gray-600">
          <span>{row.label}</span>
          <span>{money(row.value)}</span>
        </div>
      ))}

      <div className="mt-3 flex justify-between border-t border-gray-200 pt-3 font-bold text-[#E5252C]">
        <span>Order Total:</span>
        <span>{money(total)}</span>
      </div>

      <button
        onClick={onPlaceOrder}
        disabled={itemsTotal === 0}
        className="mt-4 w-full rounded-md bg-[#1A1F16] py-2 font-semibold text-white disabled:opacity-40"
      >
        Place your order
      </button>
    </aside>
  )
}

export default OrderSummary