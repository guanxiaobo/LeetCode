/**
 * https://leetcode-cn.com/problems/sort-colors/
 * Difficulty: Medium
 *
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 *
 * 示例 1：
 * 输入：nums = [2,0,2,1,1,0]
 * 输出：[0,0,1,1,2,2]
 */

/**
 * 循环：分别记录0，1的范围，然后分别交换位置
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
	let redRange = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			[nums[redRange], nums[i]] = [nums[i], nums[redRange]];
			redRange++;
		}
	}
	let whiteRange = redRange;
	for (let i = redRange; i < nums.length; i++) {
		if (nums[i] === 1) {
			[nums[whiteRange], nums[i]] = [nums[i], nums[whiteRange]];
			whiteRange++;
		}
	}

	return nums;
}
