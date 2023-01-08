/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0

  // Iterate over each cell in the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // If the cell is a land, perform DFS to explore the connected cells
      if (grid[i][j] === 1) {
        // Calculate the area of the island using DFS
        const area = dfs(grid, i, j)
        // Update the maximum area found so far
        maxArea = Math.max(maxArea, area)
      }
    }
  }

  return maxArea
}

function dfs(grid, i, j) {
  // Check if the cell is out of bounds or if it's a water cell
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === 0
  ) {
    return 0
  }

  // Mark the cell as visited by setting it to 0
  grid[i][j] = 0

  // Explore the connected cells
  let area = 1
  area += dfs(grid, i - 1, j)
  area += dfs(grid, i + 1, j)
  area += dfs(grid, i, j - 1)
  area += dfs(grid, i, j + 1)

  return area
}
