export const formatPrice = (price, withCents = false) => {
  const fractionDigits = withCents ? 2 : 0
  return '$' + parseFloat(price).toLocaleString('en-US', {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  })
}