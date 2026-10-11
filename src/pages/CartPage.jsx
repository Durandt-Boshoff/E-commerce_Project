import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  selectCartItems,
  selectCartTotalPrice,
  increaseQty,
  decreaseQty,
} from '../redux/cartSlice'

import Sidebar from '../components/Sidebar'
import CartSummary from '../components/CartSummary'

function CartPage() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotalPrice)

  return (
    <div className='flex min-h-screen bg-[#f0f0f0] p-2 sm:p-4'>
      <Sidebar />

      <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-2xl font-semibold text-[#252820] sm:text-3xl">
          Check your Bag Items
        </h1>

        {cartItems.length === 0 ? (
          <div className='flex min-h-[350px] flex-col items-center justify-center rounded-xl bg-white p-8 text-center'>
            <p className='mb-3 text-xl font-semibold text-gray-800'>
              Your cart is empty
            </p>

            <p className='mb-6 text-sm text-gray-500'>
              Looks like you haven't added anything to your bag yet.
            </p>

            <Link
              to="/"
              className='rounded-lg bg-[#20271d] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#35402f]'
            >
              Continue Shopping
            </Link>
          </div>
          ) : (
            <div className='grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_180px]'>

              <section className='space-y-4'>
                {cartItems.map((item) => {
                  const image =
                    item.image ||
                    item.imageUrl ||
                    item.thumbnail

                  const variant =
                    item.variant ||
                    item.color ||
                    item.subtitle

                    return (
                      <article
                        key={item.id}
                        className='flex min-w-0 flex-col gap-4 rounded-xl bg-white p-4 sm:flex-row sm:item-center sm:gap-6 sm:p-5'
                      >
                        <Link
                          to={`/product/${item.id}`}
                          className='flex h-32 w-full shrink-0 items-center justify-center sm:h-28 sm:w-28'
                        >
                          {image ? (
                            <img
                              src={image}
                              alt={item.name}
                              className='h-full w-full object-contain'
                            />
                          ) : (
                            <div className='flex h-full w-full items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400'>
                              No image
                            </div>
                          )}
                        </Link>

                        <div className='min-w-0 flex-1'>
                          <Link
                            to={`/product/${item.id}`}
                            className='text-lg font-semibold text-[#252820] hover:underline'
                          >
                            {item.name}
                          </Link>

                          {variant && (
                            <p className='mt-0.5 text-sm text-gray-500'>
                              {variant}
                            </p>
                          )}

                          {item.description && (
                            <p className='mt-2 line-clamp-2 text-sm text-gray-600'>
                              {item.description}
                            </p>
                          )}

                          {item.rating != null && (
                            <div className='mt-2 text-sm text-emerald-700'>
                              ★★★★★
                              <span className='ml-3'>
                                {item.rating} / 5
                              </span>
                            </div>
                          )}

                          <div className='mt-4 flex flex-wrap item-center justify-between gap-4'>
                            <p className='="text-sm font-medium text-gray-800'>
                              ${Number(item.price).toFixed(2)}
                              <span className='ml-2 text-gray-500'>
                                × {item.quantity}
                              </span>
                            </p>

                            <div className='flex items-center gap-3 text-sm'>
                              <button
                                type='button'
                                onClick={() =>
                                  dispatch(decreaseQty(item.id))
                                }
                                ariel-label={`Decrease quantity of ${item.name}`}
                                className='font-bold text-red-500 hover:text-red-700'
                              >
                                -
                              </button>

                              <span className='min-w-4 text-center'>
                                {item.quantity}
                              </span>

                              <button
                                type='button'
                                onClick={() =>
                                  dispatch(increaseQty(item.id))
                                }
                                ariel-label={`Increase quantity of ${item.name}`}
                                className='font-bold text-emerald-500 hover:text-emerald-800'
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>
                    )
                })}
              </section>

              <aside className='border-t border-gray-300 pt-5 xl:border-l xl:border-t-0 xl:pl-5 xl:pt-4'>
                <CartSummary showCheckout showViewBag={false}
                  cartItems={cartItems}
                  totalPrice={totalPrice}
                />
              </aside>
            </div>
          )}
      </main>
    </div>
  )
}

export default CartPage