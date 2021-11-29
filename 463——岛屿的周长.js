/**
 * https://leetcode-cn.com/problems/island-perimeter/
 * Difficulty:Easy
 *
 * 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。
 * 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
 * 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。
 *
 * Example:
 * 输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
 * 输出：16
 */

/**
 * 双重循环：找出所有陆地、陆地与陆地的交界点，然后相减便可得出周长
 * 执行用时：172 ms, 在所有 JavaScript 提交中击败了37.30%的用户
 * 内存消耗：46.6 MB, 在所有 JavaScript 提交中击败了79.02%的用户
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  // 大陆个数
	let perimeter = 0;
  // 交界点
	let intersection = 0;
	for (let i = 0; i < grid.length; i++) {
		let row = grid[i];
		let num = 0;
		for (let j = 0; j < row.length; j++) {
			if (row[j] === 1) {
				num++;
				if (row[j - 1] === 1) {
					intersection += 2;
				}
				if (grid[i - 1] && grid[i - 1][j] === 1) {
					intersection += 2;
				}
			}
		}
		perimeter += num * 4;
	}

	return perimeter - intersection;
}
