// https://leetcode-cn.com/problems/valid-sudoku/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  // 记录行数字出现的个数
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  // 记录列数字出现的个数
  const cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
  // 记录小矩形数字出现的个数
  const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let target = board[i][j];
      if (target !== '.') {
        let index = parseInt(target) - 1;
        rows[i][index]++;
        cols[j][index]++;
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;

        if (rows[i][index] > 1 || cols[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
          return false;
        }
      }
    }
  }
  return true;
};