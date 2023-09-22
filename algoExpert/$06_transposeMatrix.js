/*
 You're given a 2D array of integers matrix. Write a function that returns
 the transpose of the matrix.

 The transpose of a matrix is a flipped version of the original matrix across
 its main diagonal (which runs from top-left to bottom-right); it switches the
 row and column indices of the original matrix.

 You can assume the input matrix always has at least 1 value; however its width
 and height are not necessarily the same.

 Sample Input #1:
 const matrix = [
 [1, 2],
 ]

 Sample Output #1:
 [
 [1],
 [2]
 ]

 Sample Input #2:
 const matrix = [
 [1, 2],
 [3, 4],
 [5, 6]
 ]

 Sample Output #2:
 [
 [1, 3, 5],
 [2, 4, 6]
 ]

 */

const one = [
    [1, 2], [3, 4], [5, 6],
];

// const transpose = (matrix) => {
//      const first = matrix.length;
//      const second = matrix[0].length;
//      const output = new Array(second);
//      for (let i = 0; i < second; i++) {
//          output[i] = [];
//          for (let j = 0; j < first; j++) {
//              output[i].push(matrix[j][i])
//          }
//      }
//      return output;
// }

// const transpose = (matrix) => {
//     const output = Array.from(matrix, (arr, idx) =>
//         console.log(arr, idx)
//     );
// }

// const transpose = (matrix) => {
//     return Array.from({ length: matrix[0].length }, (_, colIdx) =>
//         matrix.map(row => row[colIdx])
//     );
// }

const transpose = (matrix) => Array.from({ length: matrix[0].length }, (_, index) => matrix.map(row => row[index]));


console.log(transpose(one));
















