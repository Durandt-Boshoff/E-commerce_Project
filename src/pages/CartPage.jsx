import { useDispatch, useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotalPrice,
  increaseQty,
  decreaseQty,
  removeItem,
} from '../redux/cartSlice'
import { Link } from 'react-router-dom'

function CartPage() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotalPrice)

  return (
    <main className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="rounded bg-gray-200 px-3 py-1"
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="rounded bg-gray-200 px-3 py-1"
                >
                  +
                </button>

                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="rounded bg-red-600 px-3 py-1 text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between mt-6">
            <h2 className="text-2xl font-bold">
                Total: ${totalPrice.toFixed(2)}
            </h2>

            <Link
                to="/checkout"
                className="rounded bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
                Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </main>
  )
}

export default CartPage