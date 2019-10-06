/**
 * @param {string} str
 * @return {number}
 */
const MAX_INT = Math.pow(2, 31) -1;
const MIN_INT = Math.pow(-2, 31);

const myAtoi = str => {
    let foundNonWhitespace = false;
    let num = '';
    // Creating these variables helps with performance.
    const n = str.length;
    const plusMinusRe = /[+-]/;
    const digitRe = /\d/;
    for (let idx = 0; idx < n; idx++) {
        const curr = str[idx];
        if (curr !== ' ') {
            foundNonWhitespace = true;
            // If digit, or if sign (+-) is first nonWhiteSpace char.
            if (digitRe.test(curr)
                || (plusMinusRe.test(curr) && (!plusMinusRe.test(str[idx - 1]) || idx === 0))) {
                num += curr;
            } else { // Not valid addition to number.
                break;
            }
        // Trailing whitespace, exit loop.
        } else if (curr === ' ' && foundNonWhitespace) {
            break;
        }
    }
    if (num === '' || num === '-' || num === '+') {
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
