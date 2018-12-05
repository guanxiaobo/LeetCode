/**
 * https://leetcode.com/problems/palindrome-number/description/
 * Difficulty:Easy
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 * 
 * Example:
 * Input: 121
 * Output: true
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;
    if (x < 9) return true;
    let temp = 0;
    while(x > temp) {
        temp = temp * 10 + x % 10;
        x = parseInt(x/10);
    }
    return temp == x || parseInt(temp/10) == x; 
};