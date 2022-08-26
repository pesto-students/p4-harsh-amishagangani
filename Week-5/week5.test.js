// test('two plus two is four', () => {
//     expect(2 + 2).toBe(4);
// });

const mathOperations = {
    sum: function (a, b) { return a + b; },

    diff: function (a, b) { return a - b; },

    product: function (a, b) { return a * b }
}

test('Addition, substraction,multiplication', () => {
    let x = 10;
    let y = 10;
    expect(mathOperations.sum(x, y)).toBe(x + y);
    expect(mathOperations.diff(x, y)).toBe(x - y);
    expect(mathOperations.product(x, y)).toBe(x * y);
});

