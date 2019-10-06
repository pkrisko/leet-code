/**
 * Runtime: 56 ms, faster than 99.80% of JavaScript online submissions for
 * String to Integer (atoi).
 *
 * Memory Usage: 36.7 MB, less than 14.29% of JavaScript online submissions for
 * String to Integer (atoi).
 */

const MAX_INT = Math.pow(2, 31) - 1;
const MIN_INT = Math.pow(-2, 31);

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = str => {
    let foundNonWhitespace = false;
    let num = '', curr;
    // Creating these variables helps with performance.
    const n = str.length;
    const plusMinusRe = /[+-]/;
    const digitRe = /\d/;
    // For up to N, length of @param str.
    for (let idx = 0; idx < n; idx++) {
        curr = str[idx];
        if (curr !== ' ') {
        foundNonWhitespace = true;
        // If digit, or if sign (+-) is first nonWhiteSpace char, then add it.
        if (
            digitRe.test(curr) ||
            (plusMinusRe.test(curr) &&
            (!plusMinusRe.test(str[idx - 1]) || idx === 0))
        ) {
            num += curr;
        } else {
            break;
        }
        // Trailing whitespace, exit loop.
        } else if (curr === ' ' && foundNonWhitespace) {
            break;
        }
    }
    if (num === '' || /^[+-]{1}$/.test(num)) {
        return 0;
    }
    num = Number.parseInt(num);
    if (num <= MIN_INT) {
        return MIN_INT;
    }
    if (num >= MAX_INT) {
        return MAX_INT;
    }
    return num;
};
