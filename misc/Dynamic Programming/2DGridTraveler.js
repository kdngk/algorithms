const gridTraveler = (m, n, ways = {}) => {
    if(m === 0 || n === 0) return 0;
    if(m === 1 || n === 1) return 1;
    let key = m + ',' + n;
    let flippedKey = n + ',' + m;
    
    if(key in ways){
        return ways[key];
    }
    else if(flippedKey in ways) {
        return ways[flippedKey];
    }
    let val = gridTraveler(m - 1, n, ways) + gridTraveler(m, n - 1, ways);
    ways[key] = ways[flippedKey] = val;
    return val;
}

console.log(gridTraveler(1,1));
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,3));
console.log(gridTraveler(18,18));