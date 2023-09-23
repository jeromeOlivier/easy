/*
The Cartesian product is a mathematical operation that returns a set from
multiple sets. If we have two sets A and B, the Cartesian product is the set of
all ordered pairs (a, b) where a is in A and b is in B.

For example, let's take two sets:
Set A = {1, 2}
Set B = {x, y}

The cartesian product of A and B (often denoted as A × B) would be:
A × B = {(1, x), (1, y), (2, x), (2, y)}
Each pair contains one element from A and one element from B.
In the context of programming, the cartesian product can be useful when you need
to perform an action with all possible combinations of certain variables.
*/

const generateCartesian = (a, b) => {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            const subArray = [a[i], b[j]];
            result.push(subArray);
        }
    }
    return result;
}

const one = [1, 2, 3];
const two = ['a', 'b', 'c'];
console.log(generateCartesian(one, two));

