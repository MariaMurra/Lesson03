/*eslint-env browser*/
var futureValue, investment, rate, years, i;

investment = parseFloat(window.prompt("Enter investment amount as xxx.xx: "));
rate = parseFloat(window.prompt("Enter interest rate: "));
years = parseInt(window.prompt("Enter number of years: "));

futureValue = investment;
for (i = 0; i <= years; i += 1) {
    futureValue = futureValue + (futureValue * rate / 100);
}
window.document.write("Investment amount: " + investment + "</br>");
window.document.write("Interest Rate: " + rate + "</br>");
window.document.write("Years: " + years + "</br>");
window.document.write("<strong> Future Value</strong>: " + futureValue.toFixed(2));