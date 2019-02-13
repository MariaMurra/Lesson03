/*eslint-env browser*/

var customerType;
var invoiceTotal;
var discountPercent;
var discountAmount;
var newInvoiceTotal;

window.document.write("<h1> Welcome to the invoice Application</h1>");

customerType = window.prompt("What kind of customer is this? (w/r):");
invoiceTotal = parseFloat(window.prompt("enter invoice Total:"));
if (customerType === "w") {
    if (invoiceTotal > 0 && invoiceTotal < 100) {
        discountPercent = 0.1;
    } else if (invoiceTotal >= 100 && invoiceTotal < 250) {
        discountPercent = 0.2;
    } else if (invoiceTotal >= 250 && invoiceTotal < 500) {
        discountPercent = 0.25;
    } else if (invoiceTotal >= 500) {
        discountPercent = 0.3;
    }
} else if (customerType === "r") {
    if (invoiceTotal > 0 && invoiceTotal < 250) {
        discountPercent = 0.1;
    } else if (invoiceTotal >= 250) {
        discountPercent = 0.2;
    }
} else {
    discountPercent = 0;
}

discountAmount = invoiceTotal * discountPercent;
newInvoiceTotal = invoiceTotal - discountAmount;
window.document.write("Invoice Total: $" + String(invoiceTotal) + ".00<br>");
window.document.write("Dicount Percent: " + String(discountPercent * 100) + "%<br>");
window.document.write("Discount Amount: $" + String(discountAmount) + "<br>");
window.document.write("New Invoice Total: $" + String(newInvoiceTotal));
