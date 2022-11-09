var findPair = function(nums, k) {
    const map = new Map();
    for(let i of nums){
        let val = map.has(i) ? map.get(i) : 0;
        map.set(i, val+1);
    }
    for(let i of map.keys()){
        if((k == 0 && map.get(i) > 1) || (k > 0 && map.has(i+k))){
            return 1;
        }
    }
    return 0;
};
console.log(findPair([5, 10, 3, 2, 50, 80],78));
//time complexity- O(n);
//space complexity=O(n)