export default function getCountry(address) {
  const addressArray = address.replace(/,/gi, '').split(' ');
  return addressArray[addressArray.length - 1];
}
