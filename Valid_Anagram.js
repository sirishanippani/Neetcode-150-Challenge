/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    s = s.toLowerCase().replace(/\s/g, '');
    t = t.toLowerCase().replace(/\s/g, '');

    if (t.length !== s.length)
    {
        return false;
    }

    return s.split('').sort().join('') === t.split('').sort().join('');


};
