/**
 * https://leetcode-cn.com/problems/is-subsequence/
 * Difficulty: Easy
 *
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 *
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 *
 * Example:
 * 输入：s = "abc", t = "ahbgdc"
 * 输出：true
 *
 * 输入：s = "axc", t = "ahbgdc"
 * 输出：false
 */

/**
 * 双指针
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
	let sIndex = 0;
	let tIndex = 0;
	let n = t.length;
	while (tIndex < n) {
		if (s[sIndex] === t[tIndex]) {
			sIndex++;
		}
		tIndex++;
	}

	return sIndex === s.length;
};
