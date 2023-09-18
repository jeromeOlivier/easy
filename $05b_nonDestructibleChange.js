/*
Non-Constructible Change
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

const nonDestructibleChange = (coins) => {
  const sorted = coins.sort((a, b) => a - b);
  // sorted = [1, 2, 3, 5, 7, 22];
  let currentChangeCreated = 0;
  for (let coin of sorted) {
    if (coin > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }
    const currentChange = currentChangeCreated += coin;
    console.log('coin:', coin, 'currentChange:', currentChange);
    currentChangeCreated = currentChange;
  }
  return currentChangeCreated + 1;
}

const coins = [5, 7, 1, 2, 3, 22];
const result = nonDestructibleChange(coins);
console.log(result);