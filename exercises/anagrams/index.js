// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function sanitize(str) {
    return str.replace(/[^\w]/g,'').toLowerCase();
}

function charsMap (str) {
    return str.split('').reduce(function(chars, char) {
        chars[char] = chars[char] ? ++chars[char] : 1;
        return chars;
    }, {});
}

function anagrams(stringA, stringB) {
    if (stringA.length !== stringB.length) return false;

    const a = sanitize(stringA);
    const b = sanitize(stringB);

    const charsA = charsMap(a);
    const charsB = charsMap(b);

    return Object.keys(charsA).every((char) => {
        return charsA[char] === charsB[char];
    });
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }
//
// function cleanString(str) {
//     return str
//         .replace(/[^\w]/g, '')
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join('');
// }
