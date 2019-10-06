/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const totalLength = nums1.length + nums2.length;
    const halfLength = totalLength / 2;
    let nums1Idx = 0, nums2Idx = 0;
    let currNums1, currNums2, med, idx;
    for (idx = 0; idx < halfLength; idx++) {
        currNums1 = nums1[nums1Idx];
        currNums2 = nums2[nums2Idx];
        // If at end of nums2 array, or currNums1 value <= currNums2 value,
        // increase the nums1 index counter and move median along nums1 array.
        if (currNums2 === undefined || currNums1 <= currNums2) {
            med = currNums1;
            nums1Idx++;
        } else { // Otherwise, do it for nums2 array.
            med = currNums2;
            nums2Idx++;
        }
    }
    if (totalLength % 2 === 0) {
        let next;
        const next1 = nums1[nums1Idx];
        const next2 = nums2[nums2Idx];
        if (!next1) {
            next = next2;
        } else if (!next2) {
            next = next1;
        } else {
            next = Math.min(next1, next2);
        }
        med = (med + next) / 2;
    }
    return med;
};
