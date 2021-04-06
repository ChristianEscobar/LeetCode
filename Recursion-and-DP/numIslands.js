/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  function dfs(row, col, grid) {
    // make sure we are not going outside the grid's boundaries
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
      return;
    }

    if (grid[row][col] === '1') {
      // Mark cell as visited
      grid[row][col] = '0';

      // visit the neighbor's of the current cell
      dfs(row - 1, col, grid);
      dfs(row + 1, col, grid);
      dfs(row, col - 1, grid);
      dfs(row, col + 1, grid);
    }
  }

  let totalIslands = 0;

  if (grid.length === 0) {
    return totalIslands;
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        dfs(row, col, grid);
        totalIslands++;
      }
    }
  }

  return totalIslands;
};

const grid = [['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']];
console.log(numIslands(grid));
