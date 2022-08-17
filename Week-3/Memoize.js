const memoize = (fn) => {
    let cache = {}
    return (...args) => {
        let cacheKey = args.map(n => n.toString() + '+').join('')
        if (cacheKey in cache) {
            return cache[cacheKey]
        } else {
            let result = args.reduce((acc, curr) => fn(acc, curr), 0);
            cache[cacheKey] = result;
            return result
        }
    }
}

const add = (a, b) => a + b

const memoizeAdd = memoize(add)
console.log(memoizeAdd(2, 3)) // will execute the addition first time.  
console.log(memoizeAdd(1, 3))
console.log(memoizeAdd(2, 3)) //will get it from cache. 