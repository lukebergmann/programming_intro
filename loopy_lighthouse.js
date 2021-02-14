// Creating my first loop that counts 100-200 inclusive
for (var i = 100; i <= 200; i++) {
// Creating an else if statement that counts 100-200 inclusive that are multiples of 3 AND 4
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  }
    // Creating an if statement that counts 100-200 inclusive that are mulitples of 3
  else if (i % 3 === 0) {
    console.log("Loopy");
  }
  // Creating an else if statement that counts 100-200 inclusive that are multiples of 4
  else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}