function stringChop(str, size) {
  // If the input string is null, return an empty array
  if (str === null) return [];
  
  // Create an array to hold the chunks
  const chunks = [];

  // Loop through the string, taking slices of the specified size
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));
