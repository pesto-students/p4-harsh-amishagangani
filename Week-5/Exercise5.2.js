function hasDuplicate(arr) {
    let xyz = new Set(arr); 
    if (arr.length === xyz.size) {  /* strict compare length of array and size of set */
        console.log("false") /* if there is no dup then length will and size will be the same hence false */
    }
    else {
        console.log("true") /* if there is dup value then true */
    };
};
hasDuplicate([1, 5, -1, 1]);

// in Set values can occur only once