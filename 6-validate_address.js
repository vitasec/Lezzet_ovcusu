export default function validateAddress(address) {
  if (typeof address !== 'string' || address.trim() === '') {
    throw new Error('Address cannot be empty');
  }
  if (address.length < 10) {
    throw new Error('Address is too short');
  }
  return `Delivery address: ${address}`;
}
