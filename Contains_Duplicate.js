/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Create a set to store unique elements
    let uniqueElements = new Set();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the set already contains the element, return true
        if (uniqueElements.has(nums[i])) {
            return true;
        }
        // Add the element to the set
        uniqueElements.add(nums[i]);
    }

    // If no duplicates are found, return false
    return false;        
};
