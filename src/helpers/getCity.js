export default function getCity(address) {
  const addressArray = address.replace(/,/gi, '').split(' ');
  if (addressArray.length < 2) {
    return '';
  }
  return addressArray[addressArray.length - 2];
}
