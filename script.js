const displayedNumber = document.getElementById('display-number');
const button = document.querySelector('.btn');

let fibonacciNumbers = [];

// if we haven't started the sequence yet, start it with 0
if (fibonacciNumbers.length == 0) {
  fibonacciNumbers.push(0)
};

// if we only have one number in the sequence, add a 1 to the end of it
if (fibonacciNumbers.length == 1) {
  fibonacciNumbers.push(1)
};

// add more numbers to the array of Fibonacci numbers, for a total of 100 numbers
for (let i=1; i < 99; i++) {
  const newFib = fibonacciNumbers[i-1] + fibonacciNumbers[i];
  fibonacciNumbers.push(newFib)
};

// calculate the Fibonacci number they'd like to see
// if they select a number over 100, clear the displayed number and ask them to select a number from 1-100
// if they select a number between 1 and 100, display it below the input
button.addEventListener("click", function() {
  const selectedFibNumber = document.getElementById('user-input').value;
  if (selectedFibNumber > 100) {
    displayedNumber.innerText = '';
    alert('Please select a number between 1 and 100.')
  } else {
  displayedNumber.innerText = fibonacciNumbers[selectedFibNumber-1];
  };
})
