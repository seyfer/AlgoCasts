// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (const x of [...Array(n).keys()].map(i => i + 1)) {
        if (x % 3 === 0 && x % 5 === 0) {
            console.log('fizzbuzz');
            continue;
        }
        if (x % 3 === 0) {
            console.log('fizz');
            continue;
        }
        if (x % 5 === 0) {
            console.log('buzz');
            continue;
        }
        console.log(x);
    }
}

module.exports = fizzBuzz;
