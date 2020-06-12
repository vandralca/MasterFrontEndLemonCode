const head = (...[first]) => { return first; }; // Implementation here.

const tail = (...[first, ...rest]) => { return rest; }; // Implementation here.

const init = (a) => { return a.slice(0, a.length - 1); }; // Implementation here.

const last = (a) => { return a.slice(a.length - 1); }; // Implementation here.


console.log(head(1,2,3,4,5));

console.log(tail(1,2,3,4,5));

console.log(init([1,2,3,4,5]));

console.log(last([1,2,3,4,5]));
