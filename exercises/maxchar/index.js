// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};

    for (const char of str) {
        chars[char] = chars[char] ? ++chars[char] : 1;
    }

    const max = Math.max(...Object.values(chars));

    return Object.keys(chars)
        .reduce(function (obj, key) {
            obj[chars[key]] = key;
            return obj;
        }, {})[max];
}

module.exports = maxChar;

// function maxChar(str) {
//     const charMap = {};
//     let max = 0;
//     let maxChar = '';
//
//     for (let char of str) {
//         if (charMap[char]) {
//             charMap[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     }
//
//     for (let char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char];
//             maxChar = char;
//         }
//     }
//
//     return maxChar;
// }
