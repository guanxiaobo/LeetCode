var generate = function(numRows) {
  if (numRows == 1) return [[1]];
  if (numRows == 2) return [[1], [1,1]];
  let triangle = [[1], [1,1]];
  for (let i = 3; i <= numRows; i++) {
      let cur = [];
      let last = triangle[i - 2];
      for (j = 0; j < i; j++) {
          if (j == 0 || j == i - 1) {
              cur.push(1);
          } else {
              cur.push(last[j - 1] + last[j]);
          } 
      }
      triangle.push(cur);
  }

  return triangle;
};

generate(5);