import { useState } from 'react'
import { validateAddress } from '../utils/validators'

const fields = [
  { name: 'shippingName', label: 'Shipping Name' },
  { name: 'street', label: 'Street Name' },
  { name: 'city', label: 'City' },
  { name: 'state', label: 'State / Province' },
  { name: 'country', label: 'Country' },
]

function AddressForm({ onSubmit, onBack }) {
  const [values, setValues] = useState({
    shippingName: '',
    street: '',
    city: '',
    state: '',
    country: '',
    isDefault: false,
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validateAddress(values)
    setErrors(found)
    if (Object.keys(found).length === 0) onSubmit(values)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-sm rounded-xl bg-white p-6">
      {fields.map((f) => (
        <div key={f.name} className="mb-3">
          <label htmlFor={f.name} className="mb-1 block text-xs text-gray-500">
            {f.label}
          </label>
          <input
            id={f.name}
            name={f.name}
            value={values[f.name]}
            onChange={handleChange}
            aria-invalid={Boolean(errors[f.name])}
            className="w-full rounded-lg bg-white px-3 py-2 text-sm shadow-md outline-none focus:ring-2 focus:ring-[#1A1F16]"
          />
          {errors[f.name] && <p className="mt-1 text-xs text-[#E5252C]">{errors[f.name]}</p>}
        </div>
      ))}

      <label className="mb-4 flex items-center gap-2 text-xs">
        <input type="checkbox" name="isDefault" checked={values.isDefault} onChange={handleChange} />
        Save this as your default address
      </label>

      <button type="submit" className="w-full rounded-md bg-[#1A1F16] py-2 text-sm font-semibold text-white">
        Add Address
      </button>

      <div className="mt-3 flex items-center justify-between text-xs">
        <button type="button" onClick={onBack}>Back</button>
        <span className="text-[#02D693]">Secure Connection</span>
      </div>
    </form>
  )
}

export default AddressForm