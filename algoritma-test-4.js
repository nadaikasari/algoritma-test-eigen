function diagonalDifference(matrix) {
  let first = 0;
  let second = 0;

  for (let i = 0; i < matrix.length; i++) {
    first += matrix[i][i]; // diagonal kiri ke kanan 1 + 5 + 9
    second += matrix[i][matrix.length - 1 - i]; // diagonal kanan ke kiri 0 + 5 + 7 = 12 
  }

  return Math.abs(first - second);
}

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const result = diagonalDifference(matrix);
console.log(result);
