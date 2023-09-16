/*
Non-Constructible Change • I
Given an array of positive integers representing the values of coins in your
possession, write a function that returns the minimum amount of change (the
minimum sum of money) that you cannot create. The given coins can have any
positive integer value and aren't necessarily unique (i.e., you can have multiple
coins of the same value).

For example, if you're given coins = [1, 2, 5], the minimum amount of change
that you can't create is 4. If you're given no coins, the minimum amount of
change that you can't create is 1

Sample Input
coins = [5, 7, 1, 1, 2, 3, 22]

Sample Output
20
*/

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let currentChangeCreated = 0;
  for (let coin of coins) {
    if (coin > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }
    currentChangeCreated += coin;
  }
  return currentChangeCreated + 1;
}

// const coins = [1, 1, 2];
// console.log(nonConstructibleChange(coins));

function change(coins) {
  coins.sort((a, b) => a - b);
  let solution = 0;
  for (let coin of coins) {
    if (coin > solution + 1) {
      return solution + 1;
    }
    solution += coin;
  }
  return solution + 1;
}

const myCoins = [1, 1, 2, 7];
console.log(change(myCoins));
