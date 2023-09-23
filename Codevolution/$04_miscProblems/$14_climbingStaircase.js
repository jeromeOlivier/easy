function climbingStaircase(n) {
    if(n <= 3) return n;
    let ways = [0, 1, 2];
    for(let i = 3; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }
    return ways[n];
}

console.time('climbingStaircase')
console.log(climbingStaircase(1475));
console.timeEnd('climbingStaircase')

const climb = (n) => n <= 2 ? n : climb(n - 1) + climb(n - 2);

// console.time('climb')
// console.log(climb(40));
// console.timeEnd('climb')

let memo = {};
const mClimb = (n) => {
  if(n <= 2) return n;
  if(memo[n]) return memo[n];

  memo[n] = mClimb(n - 1) + mClimb(n - 2);
  return memo[n];
}

console.time('mClimb')
console.log(mClimb(1475));
console.timeEnd('mClimb')
// console.log(memo);
