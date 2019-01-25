/**
 * https://leetcode.com/problems/remove-element/description/
 * Difficulty:Medium
 *
 * Given an array of strings, group anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for (let str of strs) {
        let a = [...str].sort().join('');
        if (!map[a]) {
            map[a] = [];
        }
        map[a].push(str);
    }

    return Object.values(map);
};