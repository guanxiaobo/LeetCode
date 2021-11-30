/**
 * https://leetcode-cn.com/problems/3sum/
 * Difficulty: Medium
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 示例 1：
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 */

// 1，特判，对于数组长度n，如果数组为  或者数组长度小于3，返回 []。
// 2，对数组进行排序。
// 3，遍历排序后数组：
//    若 nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于0，直接返回结果。
//    对于重复元素：跳过，避免出现重复解
//    令左指针 L=i+1，右指针 R=n-1，当 L<R 时，执行循环：
//      当 nums[i]+nums[L]+nums[R]==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,R移到下一位置，寻找新的解
//      若和大于 0，说明 nums[R] 太大，R 左移
//      若和小于 0，说明 nums[L] 太小，L 右移


/**
 * 排序 + 双指针
 * 执行用时：144 ms, 在所有 JavaScript 提交中击败了54.45%的用户
 * 内存消耗：47.7 MB, 在所有 JavaScript 提交中击败了81.72%的用户
 * @param {number[]} nums 整数数组
 */
const threeSum = (nums) => {
  let arr = [];
  if (!nums || nums.length < 2) return [];

  // 排序
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    // 边界条件：最小数大于0，则三数之和肯定大于0，无需做后续遍历
    if (i === 0 && nums[i] > 0) break;
    // 第一位去重，防止出现重复数组
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 双指针
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        arr.push([nums[i], nums[left], nums[right]]);

        // 去重，确定双指针的位置：重复数字的最后一位（left）、第一位（right）
        while(left < right && nums[left] === nums[left + 1]) left++;
        while(left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return arr;
};
