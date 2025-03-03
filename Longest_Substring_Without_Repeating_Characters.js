/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let subStr = new Set()
    let maxLength = 0;
    for (let r = 0; r < s.length; r++){
        while(subStr.has(s[r])){
            subStr.delete(s[l]);
            l++;
        }
        subStr.add(s[r]);
        maxLength = Math.max(maxLength, r - l + 1);
    }

    return maxLength;
};
