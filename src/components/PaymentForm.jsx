import { useState } from 'react'
import { validatePayment } from '../utils/validators'

function PaymentForm({ onSubmit, onBack }) {
  const [values, setValues] = useState({
    cardholder: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    isDefault: false,
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validatePayment(values)
    setErrors(found)
    if (Object.keys(found).length === 0) onSubmit(values)
  }

  const inputClass =
    'w-full rounded-lg bg-white px-3 py-2 text-sm shadow-md outline-none focus:ring-2 focus:ring-[#1A1F16]'

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-md rounded-xl bg-white p-6">
      <h2 className="mb-4 text-lg tracking-[0.3em]">ADD A NEW CARD</h2>

      <div className="mb-3">
        <label htmlFor="cardholder" className="mb-1 block text-xs text-gray-500">Cardholder Name</label>
        <input id="cardholder" name="cardholder" value={values.cardholder} onChange={handleChange} className={inputClass} />
        {errors.cardholder && <p className="mt-1 text-xs text-[#E5252C]">{errors.cardholder}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="cardNumber" className="mb-1 block text-xs text-gray-500">Card Number</label>
        <input id="cardNumber" name="cardNumber" inputMode="numeric" placeholder="5126-5987-2214-7621" value={values.cardNumber} onChange={handleChange} className={inputClass} />
        {errors.cardNumber && <p className="mt-1 text-xs text-[#E5252C]">{errors.cardNumber}</p>}
      </div>

      <div className="mb-3 grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="expiry" className="mb-1 block text-xs text-gray-500">Expiry Date</label>
          <input id="expiry" name="expiry" placeholder="MM / YYYY" value={values.expiry} onChange={handleChange} className={inputClass} />
          {errors.expiry && <p className="mt-1 text-xs text-[#E5252C]">{errors.expiry}</p>}
        </div>
        <div>
          <label htmlFor="cvc" className="mb-1 block text-xs text-gray-500">CVC</label>
          <input id="cvc" name="cvc" inputMode="numeric" maxLength={3} placeholder="123" value={values.cvc} onChange={handleChange} className={inputClass} />
          {errors.cvc && <p className="mt-1 text-xs text-[#E5252C]">{errors.cvc}</p>}
        </div>
      </div>

      <label className="mb-4 flex items-center gap-2 text-xs">
        <input type="checkbox" name="isDefault" checked={values.isDefault} onChange={handleChange} />
        Save this as your default payment method
      </label>

      <button type="submit" className="w-full rounded-md bg-[#1A1F16] py-2 text-sm font-semibold text-white">
        Add Payment Method
      </button>

      <div className="mt-3 flex items-center justify-between text-xs">
        <button type="button" onClick={onBack}>Back</button>
        <span className="text-[#02D693]">Secure Connection</span>
      </div>
    </form>
  )
}

export default PaymentForm