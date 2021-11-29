/**
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * Difficulty:Easy
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 * Example:
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 */

/**
 * 哈希表：利用哈希存储出现过的数字，避免多次遍历查询
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了95.17%的用户
 * 内存消耗：39.5 MB, 在所有 JavaScript 提交中击败了16.57%的用户
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	let hashMap = new Set()
	let arr = new Set()
	for (let i = 0; i < nums1.length; i++) {
		hashMap.add(nums1[i])
	}
	for (let i = 0; i < nums2.length; i++) {
		if (hashMap.has(nums2[i])) {
			arr.add(nums2[i])
		}
	}

	return [...arr]
}
