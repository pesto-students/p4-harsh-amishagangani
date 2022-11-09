var threeSumClosest = function (nums, target) {
  let ans = nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < target) left++;
      else right--;
      if (Math.abs(sum - target) < Math.abs(ans - target)) ans = sum;
    }
  }
  return ans;
};
console.log(threeSumClosest([-1,2,1,4],1));
//time complexity- O(nlogn);
//space complexity=O(1)