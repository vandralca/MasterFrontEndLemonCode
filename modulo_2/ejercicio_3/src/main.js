function clone(source) {
    return {...source };
} // Implementation here.

function merge(source, target) {
    return { ...target, ...source };
} // Implementation here.

var a = {v1: '1', v2: '2' };
var b = {v1: '-1', v3: '3' };

console.log(clone(a));

console.log(merge(a, b));
