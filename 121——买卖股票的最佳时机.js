/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] > prices[i]) {
                maxProfit = Math.max(prices[j] - prices[i], 0);
            }
        }
    }
    return maxProfit;
};

/**
 * 最大利润优化版
 * @param {number[]} prices 
 */
const maxProfitOpt = (prices) => {
    // 记录最低点股票价格
    let minPoint = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        // 依次找出地点价格，买入
        if (prices[i] < minPoint) {
            minPoint = prices[i];
        } else {
            // 比对低点与右侧高点的差值，记录其最大值
            maxProfit = Math.max(prices[i] - minPoint, maxProfit);
        }
    }

    return maxProfit;
}

maxProfit([7,1,5,3,6,4]);