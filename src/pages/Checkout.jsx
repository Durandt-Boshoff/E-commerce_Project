import { useState } from 'react'
import AddressForm from '../components/AddressForm'
import PaymentForm from '../components/PaymentForm'
import OrderSummary from '../components/OrderSummary'

// Temporary bag until the real cart is connected
const sampleItems = [
  { id: 'p9', name: 'Dell XPS 13', subtitle: 'White', price: 1799.99, quantity: 1 },
  { id: 'p3', name: 'Iphone 11', subtitle: 'Serious Black', price: 619.99, quantity: 2 },
]

const money = (n) => `$ ${n.toFixed(2)}`

function Checkout() {
  const [view, setView] = useState('summary') // 'summary' | 'address' | 'payment'
  const [address, setAddress] = useState({
    shippingName: 'John Maker',
    street: '123 Plae Grond Stret',
    city: 'Vermont',
    state: 'California',
    country: 'United States of America',
  })
  const [payment, setPayment] = useState({ brand: 'Mastercard', last4: '1252' })

  const items = sampleItems
  const itemsTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

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
              <div key={item.id} className="border-t border-gray-200 py-3 text-sm first:border-t-0">
                <p className="text-base">{item.name}</p>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
                <p className="mt-1">{money(item.price)} x {item.quantity}</p>
              </div>
            ))}
          </section>
        </div>

        <div className="flex flex-col items-start gap-3">
          <OrderSummary itemsTotal={itemsTotal} onPlaceOrder={() => alert('Order placed!')} />
          <button className="rounded-md border border-[#1A1F16] px-3 py-1 text-xs">&lt; Back</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout