/**You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104 */

const bestTimeToBuySell = (arr) => {
  let maxProfit = 0;
  let minPrice = arr[0];
  let newProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    newProfit = arr[i] - minPrice; //profit = next day sell-previous day sell
    minPrice = Math.min(minPrice, arr[i]); //setting up new min by comparing previous and next day index value
    maxProfit = Math.max(newProfit, maxProfit);
  }
  return maxProfit;
};
console.log(1, bestTimeToBuySell([7, 1, 5, 3, 6, 4]));

/**prices = [7, 1, 5, 3, 6, 4]
Step 0: minPrice=7, maxProfit=0
Step 1: price=1 -> minPrice update=1, profit=0, maxProfit=0
Step 2: price=5 -> profit=5-1=4 -> maxProfit=4
Step 3: price=3 -> profit=3-1=2 -> maxProfit=4 (no change)
Step 4: price=6 -> profit=6-1=5 -> maxProfit=5
Step 5: price=4 -> profit=4-1=3 -> maxProfit=5 */

/**Mapping
 *
 * so amk jta initial check krte hbe j amr asole check krte hbe j amr profuit kokhn besi hbe and alos amk kokhn stock buy kora jabe. that emasn amk 2ta independent variable lagbe jekahen amk ai 2ta value store krte hbe and alwz eta loop kore change krte hbe. akhn jehetu amk loop kore eta change krte hbe ai jnne akta 3rd variable lagbe jta current day er profit ta hisab krbe and ai current day er profit take amk compare krte hbe amx profit er sathe. so ami 3ta variable initial rakhlam and dn loop suru krbo 1 theke cz arr[0] ke amra already minprice dhorsi and loop korar por 1st atsk hsse current day er profit ber kora next day-min kore, erpro amk eta check krte hbe j next day ar ajker min er mddhe konta chto jta choto setai new min hbe erpor amk check krte hbe ajker profit and max rofit er mddeh konta boro ar inthe end ami max proft return krbo. main mapaping to etai right?
 */
