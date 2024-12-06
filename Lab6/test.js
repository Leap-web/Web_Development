const year = prompt("Enter your age to check: ");
if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
    console.log("is a leap year.");
} else{
    console.log("isn't a leap year");
}