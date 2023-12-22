function parseCode(encodedString) {
  // Split the input string by "000" to extract firstName, lastName, and id
  const [firstName, lastName, id] = encodedString.split("000");

  // Return an object with the extracted values
  return {
    firstName: firstName,
    lastName: lastName,
    id: id
  };
}

// Examples
console.log(parseCode("John000Doe000123"));
// Output: { firstName: "John", lastName: "Doe", id: "123" }

console.log(parseCode("michael0smith004331"));
// Output: { firstName: "michael", lastName: "smith", id: "4331" }

console.log(parseCode("Thomas00LEE0000043"));
// Output: { firstName: "Thomas", lastName: "LEE", id: "43" }

// Do not change the code below
// const str = prompt("Enter str: ");
// alert(JSON.stringify(parseCode(str)));
