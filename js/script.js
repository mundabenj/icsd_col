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