/**
 * https://leetcode-cn.com/problems/contains-duplicate/
 * Difficulty:Easy
 *
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 *
 * Example:
 * 输入: [1,2,3,1]
 * 输出: true
 *
 * 输入: [1,2,3,4]
 * 输出: false
 */

/**
 * 排序:将数组进行排序，判断其相邻的元素是否相等便可得出结果
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	let isRepeat = false;
	nums.sort((a, b) => a - b);
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			isRepeat = true;
			break;
		}
	}
	return isRepeat;
}

/**
 * 哈希表
 * @param {number[]} nums
 */
var containsDuplicateTwo = (nums) => {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }

    set.add(nums[i]);
  }
}