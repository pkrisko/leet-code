/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
    const sLength = s.length;
    let table = new Array(sLength);
    // 1 Length substrings.
    let maxLength = 1;
    let idx, jdx, kdx;
    // initialize array because javascript is dumb
    for (idx = 0; idx < sLength; idx++) {
        sL
    }

    for (idx = 0; idx < sLength; idx++) {
        table[idx][idx] = true;
    }
    // Check for double letters.
    let start = 0;
    for (idx = 0; idx < sLength; idx++) {
        if (s[idx] === s[idx + 1]) {
            table[idx][idx + 1] = true;
            start = idx;
            maxLength = 2;
        }
    }
    // Check for pallindrome substrings that are 3 (k) or more letters.
    for (kdx = 3; kdx < sLength; kdx++) {
        let stop = sLength - kdx + 1;
        for (idx = 0; idx < stop; idx++) {
            // Ending index of substring with length kdx, starting at idx.
            jdx = idx + kdx - 1;
            if (table[idx + 1][jdx - 1] && s[idx] === s[jdx]) {
                table[idx][jdx] = true;
                if (kdx > maxLength) {
                    start = idx;
                    maxLength = kdx;
                }
            }
        }
    }
    return(s.substring(start, start + maxLength));
};