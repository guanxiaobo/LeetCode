/**
 * https://leetcode-cn.com/problems/missing-number/
 * Difficulty:Easy
 *
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 *
 * Example:
 * 输入: nums = [3,0,1]
 * 输出: 2
 *
 * 输入: nums = [0,1]
 * 输出: 2
 */

/**
 * 排序
 * @param {number[]} nums 
 */
const missingNumberSort = (nums) => {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return n;
};

/**
 * 哈希表
 * @param {number[]} nums 
 */
const missingNumberHash = (nums) => {
  const hash = new Set();
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    hash.add(nums[i]);
  }

  let missing = -1;
  for (let i = 0; i <= n; i++) {
    if (!hash.has(i)) {
      missing = i;
      break;
    }
  }
  return missing;
};

/**
 * 数学公式：高斯求和，很巧妙，循环一次即可得出结果
 * @param {*} nums 
 */
const missingNumberMath = (nums) => {
  let n = nums.length;
  let sum = Math.floor(n * (n + 1) / 2);
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += nums[i];
  }

  return sum - total;
};