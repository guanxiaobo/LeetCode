/**
 * https://leetcode-cn.com/problems/majority-element/
 * Difficulty:Easy
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 * Example:
 * 输入：[3,2,3]
 * 输出：3
 */

// 利用哈希表记录每个数字出现的次数，然后找出其中大于n/2的即可
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let hash = {};
	let length = nums.length;
	let num;
	nums.forEach(item => {
		hash[item] = hash[item] ? ++hash[item] : 1;
	});
	let keys = Object.keys(hash);
	for (let i = 0; i < keys.length; i++) {
		if (hash[keys[i]] > length / 2) {
			num = keys[i];
			break;
		}
	}

	return num;
}

/**
 * 排序：数量大于n/2,说明众数一定横跨半个数组，即下标为n/2的数字一定是众数
 * @param {number[]} nums 
 */
var majorityElementTwo = (nums) => {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length/2)];
}