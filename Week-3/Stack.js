
function createStack() {
    const items = [];
    return {
        // items: [], removed from return and added to parent function
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        },
        print() {
            console.log(items) //to check array is properly added
        }
    };
}
const stackFinal = createStack();
stackFinal.push(10);
stackFinal.push(5);
stackFinal.push(9);
stackFinal.pop();
console.log(stackFinal.items);// accesing items parameter which is not a scope of stackfinal
stackFinal.print();//checking items array output
