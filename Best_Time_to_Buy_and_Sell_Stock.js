/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price; // Update minPrice if current price is lower
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice); // Calculate profit and update maxProfit
        }
    }
    return maxProfit;
};
