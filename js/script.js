function greetings(mname, hours) {
    if (hours < 12) {
        var greet = "<br>Good morning " + mname + "!";
    } else if (hours < 18) {
        var greet = "<br>Good afternoon " + mname + "!";
    } else {
        var greet = "<br>Good evening " + mname + "!";
    }
    return greet; // return the greeting message
}

function StarTime() {
    var DateTime = new Date();

    var weekday = DateTime.getDay(); // Get the day of the week (0-6)
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayName = daysOfWeek[weekday]; // Get the name of the day
    var day = DateTime.getDate();
    var month = DateTime.getMonth() + 1; // Months are zero-based, so we add 1
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = monthNames[DateTime.getMonth()]; // Get the name of the month
    var year = DateTime.getFullYear();

    var hours = DateTime.getHours();
    var minutes = DateTime.getMinutes();
    var seconds = DateTime.getSeconds();

    hours = formaTime(hours);
    minutes = formaTime(minutes);
    seconds = formaTime(seconds);

    document.getElementById("ReadTime").innerHTML = "<br>Current Date Time:<br>" + dayName + ", " + day + " " + monthName + " " + year + " " + hours + ":" + minutes + ":" + seconds;
    var t = setTimeout(StarTime, 1000); // Refresh the time every second
}
function formaTime(i) {
    if(i < 10) {
        i = "0" + i; // Add leading zero if the number is less than 10
    }
    return i;
}

function getDaysInMonth(TimeDate) {
    var currentYear = TimeDate.getFullYear(); // Get the current year
    var currentMonth = TimeDate.getMonth(); // getMonth() returns 0-11
    var monthsWith31Days = [0, 2, 4, 6, 7, 9, 11]; // January, March, May, July, August, October, December
    var monthsWith30Days = [3, 5, 8, 10]; // April, June, September, November
    var februaryMonth = 1; // February
    if(monthsWith30Days.includes(currentMonth)) {
        var daysInMonth = 30; // If the current month is in the list of months with 30 days, set daysInMonth to 30
    } else if(monthsWith31Days.includes(currentMonth)) {
        var daysInMonth = 31; // If the current month is in the list of months with 31 days, set daysInMonth to 31
    } else if(currentMonth === februaryMonth) {     
        var isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0); // Check if the current year is a leap year
        // var daysInFebruary = isLeapYear ? 29 : 28;
        // var daysInMonth = daysInFebruary;
        if(isLeapYear) {
            var daysInMonth = 29; // If it's a leap year, February has 29 days
        } else {
            var daysInMonth = 28; // If it's not a leap year, February has 28 days
        }
    }
    return daysInMonth; // Return the number of days in the current month
}