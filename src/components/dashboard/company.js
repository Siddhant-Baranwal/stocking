const change = (arr) => {
    let ans = [];
    for (let i = 0; i < arr.length-1; i++) {
        ans.push(100*(arr[i+1] - arr[i])/arr[i]);
    }
    return ans;
}

const sumPositive = (arr) => {
    const sum =  arr.reduce((acc, val) => acc + val, 0);
    return (sum>0);
}

const avgArray = (arr) => {
    const sum =  arr.reduce((acc, val) => acc + val, 0);
    return (sum/arr.length);
}

export const computation = (params) => {
    const {sl_no, data} = params;
    let companyData = data.find(item => item.SL_No===sl_no);


    // Number of companies in the same country.
    companyData.sameCountry = data.filter(item => item.Country===companyData.Country).length;

    // Number of companies with greater diversity in the same country.
    companyData.gtrDiv = data.filter(item => item.Diversity>companyData.Diversity && item.Country===companyData.Country).length;

    // Change in company's data year by year.
    companyData.stockPercentChange = change(companyData.Stock_Price);
    companyData.marketPercentChange = change(companyData.Market_Share);
    companyData.revenuePercentChange = change(companyData.Revenue);
    companyData.expensePercentChange = change(companyData.Expenses);

    // Number of companies having greater stock price, market share, revenue and expense globally.
    companyData.gtrStockGlobal = data.filter(item => item.Stock_Price>companyData.Stock_Price).length;
    companyData.gtrMarketGlobal = data.filter(item => item.Market_Share>companyData.Market_Share).length;
    companyData.gtrRevenueGlobal = data.filter(item => item.Revenue>companyData.Revenue).length;
    companyData.gtrExpenseGlobal = data.filter(item => item.Expenses>companyData.Expenses).length;

    // Number of companies having greater stock price, market share, revenue and expense domestically.
    companyData.gtrStockDomestic = data.filter(item => item.Stock_Price>companyData.Stock_Price && item.Country===companyData.country).length;
    companyData.gtrMarketDomestic = data.filter(item => item.Market_Share>companyData.Market_Share && item.Country===companyData.country).length;
    companyData.gtrRevenueDomestic = data.filter(item => item.Revenue>companyData.Revenue && item.Country===companyData.country).length;
    companyData.gtrExpenseDomestic = data.filter(item => item.Expenses>companyData.Expenses && item.Country===companyData.country).length;

    // A general number for company's growth. If growth=1, then decline. If growth=2, then stable. Else, growth.
    companyData.growth = sumPositive(companyData.stockPercentChange) + sumPositive(companyData.marketPercentChange) + sumPositive(companyData.revenuePercentChange) + sumPositive(companyData.expensePercentChange);

    // Predict the future stock price, market share, revenue and expense.
    companyData.futureStock = companyData.Stock_Price*(100+avgArray(companyData.stockPercentChange))/100;
    companyData.futureMarket = companyData.Market_Share*(100+avgArray(companyData.marketPercentChange))/100;
    companyData.futureRevenue = companyData.Revenue*(100+avgArray(companyData.revenuePercentChange))/100;
    companyData.futureExpense = companyData.Expenses*(100+avgArray(companyData.expensePercentChange))/100;
    return companyData;
}