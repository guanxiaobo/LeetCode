/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * Difficulty:Medium
 *
 * 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * Example:
 * 输入: prices = [7,1,5,3,6,4]
 * 输出: 7
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
 */

// 思路：有三种情况，1，股票价格递增，累计差值便可得出最大利润；2，股票递减，收益为0；3，股票无序，要想获取最大利润，需在低点买入，高点卖出，即累计高点减去低点便可得出最大利润
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let minPoint = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPoint) {
      minPoint = prices[i];
    } else {
      maxProfit += prices[i] - minPoint;
      minPoint = prices[i];
    }
  }

  return maxProfit;
}

// 优化
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitOpt = (prices) => {
  let maxProfit = 0;
  for (let i = 1; i < prices; i++) {
    maxProfit += Math(0, prices[i] - prices[i - 1]);
  }

  return maxProfit;
}