const weeklySalesData = [
    {date: '2023-09-25', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}]},
    {date: '2023-09-26', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}]},
    {date: '2023-09-27', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-09-28', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
    {date: '2023-09-29', sales: [{item: 'Apple', quantity: 10, price: 1}, {item: 'Banana', quantity: 35, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-09-30', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
    {date: '2023-10-01', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-02', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-03', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-04', sales: [{item: 'Apple', quantity: 35, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-05', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
    {date: '2023-10-06', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
    {date: '2023-10-07', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-08', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-09', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-10', sales: [{item: 'Apple', quantity: 35, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-11', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
    {date: '2023-10-12', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
    {date: '2023-10-13', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-14', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]}
];


/**
 * This function generates a sales report for a given week.
 *
 * @param {array} weeklySalesData - An array of objects, each representing a day's sales.
 * Each object contains a date, and an array of items sold with their quantities and prices.
 * @returns {object} - An object containing total sales, best selling item, and the day with the highest sales.
 *
 * Usage:
 * const weeklySalesData = [
 *     {date: '2023-09-25', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}]},
 *     {date: '2023-09-26', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}]},
 *     // ... other days
 * ];
 * const report = generateSalesReport(weeklySalesData);
 * console.log(report);
 * // Outputs { totalSales: 55, bestSellingItem: 'Banana', highestSalesDay: {date: '2023-09-26', totalSales: 30} }
 */

function generateSalesReport(weeklySalesData) {
    // Initialize variables to keep track of total sales, item sales, and the highest sales day.
    let totalSales = 0;
    let itemSalesCounter = {};
    let highestSalesDay = {date: '', totalSales: 0};

    // Loop through each day in the weekly sales data.
    for (let day of weeklySalesData) {
        // Initialize a variable to keep track of the total sales for the current day.
        let dailySalesTotal = 0;

        // Loop through each sale in the day's sales data.
        for (let sale of day.sales) {
            // Calculate the total sale amount for the current sale item.
            let saleTotal = sale.quantity * sale.price;

            // Update the total sales for the week and the total sales for the current day.
            totalSales += saleTotal;
            dailySalesTotal += saleTotal;

            // Update the item sales counter with the quantity of the current sale item.
            if (itemSalesCounter[sale.item]) {
                itemSalesCounter[sale.item] += sale.quantity;
            } else {
                itemSalesCounter[sale.item] = sale.quantity;
            }
        }

        // Check if the total sales for the current day is higher than the previous highest sales day.
        // If so, update the highest sales day with the current day's date and total sales.
        if (dailySalesTotal > highestSalesDay.totalSales) {
            highestSalesDay = {date: day.date, totalSales: dailySalesTotal};
        }

    }

    // Initialize variables to keep track of the best selling item and its quantity.
    let bestSellingItem = '';
    let highestQuantity = 0;

    // Loop through the item sales counter to find the best selling item.
    for (let item in itemSalesCounter) {
        if (itemSalesCounter[item] > highestQuantity) {
            highestQuantity = itemSalesCounter[item];
            bestSellingItem = item;
        }
    }

    // Return an object containing the total sales, best selling item, and highest sales day.
    return {totalSales, bestSellingItem, highestSalesDay};
}

const report = generateSalesReport(weeklySalesData);
console.log(report);