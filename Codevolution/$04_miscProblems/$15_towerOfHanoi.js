const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
    if(n===1) {
        console.log(`Step ${++step}: Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    towerOfHanoi(n-1, fromRod, usingRod, toRod)
    console.log(`Step ${++step}: Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n-1, usingRod, toRod, fromRod);
}

towerOfHanoi(4, 'A', 'C', 'B', step = 0)