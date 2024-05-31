const userInput = prompt(
    "Please enter Froyo flavors separated by commas.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

const flavorArray = userInput.split(", ");
function tally(flavorArray) {
  const flavorObject = {};
  for (const flavor of flavorArray) {
    if (flavor in flavorObject) {
      flavorObject[flavor] += 1;
    } else {
      flavorObject[flavor] = 1;
    }
  }
  return flavorObject;
}
console.log(tally(flavorArray));
