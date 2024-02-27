// Challenge 1

function isString(input) {
  return typeof input === "string";
}

console.log("Answer 1");
console.log(isString("abc"));
console.log(isString(190));

// Challenge 2

function isBlankString(input) {
  return input.trim() === "";
}

console.log("Answer 2");
console.log(isBlankString(""));
console.log(isBlankString(" "));
console.log(isBlankString("fjfjf"));

// Challenge 3

function capitalizeFirst(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

console.log("Answer 3");
console.log(capitalizeFirst("abcdef"));

// Challenge 4

function abbr(fullName) {
  let nameParts = fullName.split(" ");
  let firstName = nameParts[0];
  let lastNameInitial = nameParts[nameParts.length - 1].charAt(0) + ".";
  return firstName + " " + lastNameInitial;
}

console.log("Answer 4");
console.log(abbr("Ryan Curtis"));

// Challenge 5

function truncate(sentence, maxLength) {
  if (sentence.length <= maxLength) {
    return sentence;
  } else {
    return sentence.slice(0, maxLength) + "...";
  }
}

console.log("Answer 5");
console.log(truncate("I am a long sentence", 5));

// Challenge 6

const str = "The practitioners grappled on the road side!";
const result = str.slice(str.indexOf("g"));
console.log("Answer 6");
console.log(result);
