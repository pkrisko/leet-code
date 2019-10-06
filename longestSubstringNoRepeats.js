/**
 * Runtime: 68 ms, faster than 99.45% of JavaScript online submissions for
 * Longest Substring Without Repeating Characters.
 *
 * Memory Usage: 37.8 MB, less than 91.15% of JavaScript online submissions
 * for Longest Substring Without Repeating Characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    const sLength = s.length; // This line helps a lot with performance when
    // checking each iteration of for loop, but costs additional memory.
    if (sLength === 0) {
        return 0;
    }
    // Helper variables. We know string length is at least 1 here.
    let maxLen = 1;
    let currLen = 1;
    let prevIdx;
    // Fill array of length 256 with value -1 to indicate that it has not yet
    // been visited. Index in array represents ascii code of character.
    let visited = new Array(256).fill(-1);
    // Initialze first value to 0.
    visited[s.charCodeAt(0)] = 0;
    // Start at second index (1).
    for (let idx = 1; idx < sLength; idx++) {
        prevIdx = visited[s.charCodeAt(idx)];
        // If last letter not visited, or not in current 'run'.
        if (prevIdx === -1 || idx - currLen > prevIdx) {
            currLen += 1;
        } else { // Otherwise, reset.
            if (currLen > maxLen) {
                maxLen = currLen;
            }
            // Accounts for strings like "dvdf"
            currLen = idx - prevIdx;
        }
        // Each iteration, mark visited.
        visited[s.charCodeAt(idx)] = idx;
    }
    if (currLen > maxLen) {
        maxLen = currLen;
    }
    return maxLen;
};
