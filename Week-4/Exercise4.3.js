function arr(n) {
    var x = [0, 1];

    for (i = 2; i <= n; i++) {
        var a = (x[i - 2] + x[i - 1]);
        x.push(a);
    }
    return x;
}
console.log(arr(5));

var fib = arr(5);
const iter = fib[Symbol.iterator]()

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

for (const el of iter) {
    console.log(el)
}