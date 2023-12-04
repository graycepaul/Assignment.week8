//Create a function that checks if the input/parameter is an even number

function numType(num) {
  return num % 2 === 0 ? "Even Number" : "Odd Number";
}
console.log(`This is an ${numType()}`);

// Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter.
function printNum(n1, n2) {
  if (n1 < n2) {
    for (let i = n1; i <= n2; i++) {
      console.log(i);
    }
  } else if (n1 > n2) {
    for (let i = n1; i >= n2; i--) {
      console.log(i);
    }
  } else {
    console.log(n1);
    console.log(n2);
  }
}
printNum();

// Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.
function calcSum(s1, s2) {
  let sum = 0;
  if (s1 < s2) {
    for (let i = s1; i <= s2; i++) {
      sum += i;
    }
    return sum;
  } else if (s1 > s2) {
    for (let i = s1; i >= s2; i--) {
      sum += i;
    }
    return sum;
  }
}
console.log(calcSum());
