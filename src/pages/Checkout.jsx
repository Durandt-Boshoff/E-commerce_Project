import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AddressForm from '../components/AddressForm'
import PaymentForm from '../components/PaymentForm'
import OrderSummary from '../components/OrderSummary'
import {selectCartItems, selectCartTotalPrice, increaseQty, decreaseQty, clearCart,} from '../redux/cartSlice'

const money = (n) => `$ ${n.toFixed(2)}`

function Checkout() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const itemsTotal = useSelector(selectCartTotalPrice)

  const [view, setView] = useState('summary')

  const [address, setAddress] = useState({
    shippingName: 'John Maker',
    street: '123 Plae Grond Stret',
    city: 'Vermont',
    state: 'California',
    country: 'United States of America',
  })

  const [payment, setPayment] = useState({brand: 'Mastercard', last4: '1252',})

  const saveAddress = (values) => {
    setAddress(values)
    setView('summary')
  }

  const savePayment = (values) => {
    // Keep ONLY the last 4 digits. Never store the full card number or CVC.
    const digits = values.cardNumber.replace(/\D/g, '')
    setPayment({ brand: 'Card', last4: digits.slice(-4) })
    setView('summary')
  }

  if (view === 'address') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#ececec] p-4">
        <AddressForm onSubmit={saveAddress} onBack={() => setView('summary')} />
      </div>
    )
  }

  if (view === 'payment') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#ececec] p-4">
        <PaymentForm onSubmit={savePayment} onBack={() => setView('summary')} />
      </div>
    )
  }

  const handlePlaceOrder = () => {
    alert("Order placed!")
    dispatch(clearCart())
    navigate("/order-success")
}

  const navigate = useNavigate()

  const cardClass = 'mb-4 rounded-xl bg-white p-5'
  const headingClass = 'mb-3 text-lg tracking-[0.25em]'
  const changeClass = 'rounded-md border border-[#1A1F16] px-3 py-1 text-xs'

  return (
    <div className="min-h-screen bg-[#ececec] p-4">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <section className={cardClass}>
            <h2 className={headingClass}>SHIPPING ADDRESS</h2>
            <div className="flex items-start justify-between text-sm">
              <div>
                <p>{address.shippingName}</p>
                <p>{address.street}</p>
                <p>{address.city}, {address.state}</p>
                <p>{address.country}</p>
              </div>
              <button className={changeClass} onClick={() => setView('address')}>Change</button>
            </div>
          </section>

          <section className={cardClass}>
            <h2 className={headingClass}>PAYMENT METHOD</h2>
            <div className="flex items-center justify-between text-sm">
              <p>{payment.brand} ending in {payment.last4}</p>
              <button className={changeClass} onClick={() => setView('payment')}>Change</button>
            </div>
          </section>

          <section className={cardClass}>
            <h2 className={headingClass}>REVIEW YOUR BAG</h2>
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-5 border-b border-gray-300 py-5 last:border-b-0">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center">
                  <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain"/>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-[#1A1F16]">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.variant}</p>
                  <p className="mt-1 max-w-md text-[11px] leading-relaxed text-gray-600">{item.description}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <span className="text-emerald-700">
                      {"★".repeat(Math.round(item.rating))}
                      {"☆".repeat(5 - Math.round(item.rating))}
                    </span>
                    <span className="text-gray-500">{item.rating}/5</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs text-[#1A1F16]">{money(item.price)} × {item.quantity}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="cursor-pointer text-sm text-red-500"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>

                      <span className="text-sm text-[#1A1F16]">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="cursor-pointer text-sm text-emerald-500"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="flex flex-col items-start gap-3">
          <OrderSummary itemsTotal={itemsTotal} onPlaceOrder={handlePlaceOrder} />
          <Link to="/cart">
            <button className="rounded-md border border-[#1A1F16] px-3 py-1 text-xs">&lt; Back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Checkout

