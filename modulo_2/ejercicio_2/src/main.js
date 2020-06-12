const concat = (a, b) => { return [...a, ...b]; }; // Implementation here.

const concat2 = (a, ...b) => {
    for (i = 0; i < b.length; i++) {
        a = [...a, ...b[i]];
    }

    return a;
}; // Implementation here.

console.log(concat([1,2,3,4,5],[6,7,8,9,10]));

console.log(concat2([1,2,3,4,5],[6,7,8,9,10]));

console.log(concat2([1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]));
