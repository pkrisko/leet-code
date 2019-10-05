/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let addTwoNumbers = function(l1, l2) {
    let sum = l1.val + l2.val;
    let carry = Math.floor(sum / 10);
    const head = new ListNode(sum % 10);
    let runner1 = l1.next, runner2 = l2.next, runner3 = head;
    while (runner1 !== null || runner2 !== null) {
        sum = (runner1 ? runner1.val : 0) + (runner2 ? runner2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        if (runner1) runner1 = runner1.next;
        if (runner2) runner2 = runner2.next;
        runner3.next = new ListNode(sum % 10);
        runner3 = runner3.next;
    }
    if (carry > 0) {
        runner3.next = new ListNode(carry);
    }
    return head;
};