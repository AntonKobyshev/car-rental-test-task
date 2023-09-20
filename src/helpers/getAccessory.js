export default function getAccessory(accessories) {
  const accessory = accessories[1];
  const accessoryWords = accessory.split(' ');
  const newAccessoryWords = accessoryWords.slice(
    accessoryWords.length - 2,
    accessoryWords.length
  );
  let currentAccessory = newAccessoryWords.join(' ');

  currentAccessory =
    currentAccessory[0].toUpperCase() + currentAccessory.slice(1);

  if (currentAccessory.length > 12) {
    currentAccessory = currentAccessory.slice(0, 12);
  }

  return currentAccessory;
}
