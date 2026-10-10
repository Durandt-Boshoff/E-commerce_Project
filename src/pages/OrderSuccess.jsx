function OrderSuccess({ onContinue }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ececec] p-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#02D693] text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
            aria-hidden="true"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h1 className="mb-2 text-2xl">Order Successful!</h1>
        <p className="mb-6 text-sm text-gray-500">
          Thank you for your purchase. Your order is on its way.
        </p>
        <button
          onClick={onContinue}
          className="w-full rounded-md bg-[#1A1F16] py-2 text-sm font-semibold text-white"
        >
          Continue shopping
        </button>
      </div>
    </div>
  )
}

export default OrderSuccess