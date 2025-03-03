/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0;
    let freq = new Map();
    let maxFreq = 0;
    let maxLength = 0;

    for (let r = 0; r < s.length; r++){
        freq.set(s[r], (freq.get(s[r]) || 0) + 1);

        maxFreq = Math.max(maxFreq, freq.get(s[r]));

        while((r - l + 1) - maxFreq > k){
            freq.set(s[l], freq.get(s[l]) - 1);
            l++;
        }

        maxLength = Math.max(maxLength, r - l + 1);
    }

    return maxLength;
};
