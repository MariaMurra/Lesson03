/*eslint-env browser*/
var miles, gallons, mpg, again = "y";

do {
    miles = parseFloat(window.prompt("Enter miles driven: "));
    gallons = parseFloat(window.prompt("enter max gallons of vehicle: "));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        
    } else {
        window.alert("Please enter a valid number.");
    }
    window.alert("Miles per Gallon: " + mpg.toFixed(2));
    again = window.prompt("Do you want to run this app again? (y/n)", "y");
} while (again === "y");