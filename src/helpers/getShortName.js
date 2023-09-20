export default function getShortName(name) {
  if (name.length > 21) {
    return name.slice(0, 21);
  }
  return name;
}
