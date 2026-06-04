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
    var hours = DateTime.getHours();
    var minutes = DateTime.getMinutes();
    var seconds = DateTime.getSeconds();

    document.getElementById("ReadTime").innerHTML = "<br>Current Time: " + hours + ":" + minutes + ":" + seconds;
    var t = setTimeout(StarTime, 1000); // Refresh the time every second
}