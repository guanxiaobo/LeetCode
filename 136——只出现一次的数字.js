/**
 * https://leetcode-cn.com/problems/single-number/
 * Difficulty:Easy
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 说明：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 * Example:
 * 输入 [2,2,1]
 * 输出: 1
 */

// 解法一：利用哈希表记录当前每个数字出现的次数，然后找出其中次数为1的key值即可
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let targetObj = {}
	let num
	for (let i = 0; i < nums.length; i++) {
		targetObj[nums[i]] = targetObj[nums[i]] ? targetObj[nums[i]] + 1 : 1
	}
	Object.keys(targetObj).forEach(key => {
		if (targetObj[key] === 1) {
			num = key
		}
	})

	return num
}

// 解法二：1, 任何数和0做异或运算，结果仍然是原来的数，即 a^0=a。2,任何数和其自身做异或运算，结果是 0，即 a^a=0。
/**
 * 异或运算
 * @param {number[]} nums 
 * @returns {number}
 */
var singleNumberOpt = (nums) => {
	let target = 0
	for (let i = 0; i < nums.length; i++) {
		target ^= nums[i]
	}

	return target
}
