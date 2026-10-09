export function validateAddress(v) {
  const errors = {}
  if (v.shippingName.trim().length < 2) errors.shippingName = 'Enter the full name'
  if (v.street.trim().length < 5) errors.street = 'Enter a street address'
  if (v.city.trim().length < 2) errors.city = 'Enter a city'
  if (v.state.trim().length < 2) errors.state = 'Enter a state or province'
  if (v.country.trim().length < 2) errors.country = 'Enter a country'
  return errors
}

export function validatePayment(v) {
  const errors = {}
  if (v.cardholder.trim().length < 2) errors.cardholder = 'Enter the name on the card'
  if (!/^\d{16}$/.test(v.cardNumber.replace(/[\s-]/g, ''))) {
    errors.cardNumber = 'Card number must be 16 digits'
  }
  const match = /^(0[1-9]|1[0-2])\s*\/\s*(\d{2}|\d{4})$/.exec(v.expiry.trim())
  if (!match) {
    errors.expiry = 'Use MM/YY'
  } else {
    const year = match[2].length === 2 ? 2000 + Number(match[2]) : Number(match[2])
    const expires = new Date(year, Number(match[1]), 1)
    if (expires <= new Date()) errors.expiry = 'This card has expired'
  }
  if (!/^\d{3}$/.test(v.cvc)) errors.cvc = 'CVC must be 3 digits'
  return errors
}