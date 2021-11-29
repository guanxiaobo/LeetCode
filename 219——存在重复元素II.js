/**
 * https://leetcode-cn.com/problems/contains-duplicate-ii/
 * Difficulty:Easy
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
 *
 * Example:
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 *
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 */


/**
 * 线性搜索：查询某一个元素之后的k个元素内是否与自己相等
 * @param {number[]} nums 
 * @param {number} k 
 */
const containsNearbyDuplicate = (nums, k) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k; j++) {
      if (nums[j] === nums[i]) {
        return true;
      }
    }
  }

  return false;
};

/**
 * 哈希表
 * @param {number[]} nums 
 * @param {number} k 
 */
const containsNearbyDuplicateTwo = (nums, k) => {
  let hashMap = new Set();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (hashMap.has(num)) {
      return true;
    }
    hashMap.add(num);
    if (hashMap.size > k) {
      hashMap.delete(nums[i - k]);
    }
  }

  return false;
}