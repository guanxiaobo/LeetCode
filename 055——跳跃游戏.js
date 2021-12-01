/**
 * https://leetcode-cn.com/problems/jump-game/
 * Difficulty: Medium
 *
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标。
 * 
 *
 * Example:
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 */

/**
 * 贪心算法: 是否能达到某一个下标 k 的成立条件 i + nums[i] >= k，每一步获取最大的跳跃步数，这个就是可以跳跃的覆盖范围，局部最优推导出全局最优。
 * @param {number[]} nums 
 */
const canJump = (nums) => {
  let maxDistance = 0;
  for (let i = 0; i <= maxDistance; i++) {
    maxDistance = Math.max(maxDistance, nums[i] + i);
    if (maxDistance >= nums.length - 1) return true;
  }

  return false;
}