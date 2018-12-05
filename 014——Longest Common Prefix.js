/**
 * https://leetcode.com/problems/longest-common-prefix/description/
 * Difficulty:Easy
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * Example:
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 */

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let temp = strs[0];
    if (!temp || temp.length == 0) {
        return '';
    }
    for (let i = 0; i < temp.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] != temp[i]) {
                return temp.substring(0, i);
            }
        }
    }
    return temp;
};
