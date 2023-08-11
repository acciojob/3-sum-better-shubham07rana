function threeSum(nums, target) {
    if (nums.length < 3) {
        return null; // There are not enough elements to form a triplet
    }

    nums.sort((a, b) => a - b); // Sort the array in ascending order

    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}

// Test the function
const nums = [-1, 2, 1, -4];
const target = 1;
const result = threeSum(nums, target);
console.log(result); // Output should be 2

