var totalCheckIns = 0;

function toggleCheckIn() {
    var checkIn = document.getElementById("check-in");
    if (checkIn.innerHTML == "Remove Check In") { //if the user cancels the check in
        localStorage.setItem ("checkInState", "");
        totalCheckIns--;
        checkIn.innerHTML = "Check In";
        document.getElementById("check-ins").innerHTML = totalCheckIns;
    } else { //if the user checks in
        localStorage.setItem ("checkInState", "true"); //supposed to store the check-in state to cache
        totalCheckIns++;
        checkIn.innerHTML = "Remove Check In";
        document.getElementById("check-ins").innerHTML = totalCheckIns;
    }
}

function showCheckIns() {
    var checkInStatus = localStorage.getItem("checkInState");
    var checkInList = document.getElementById("check-in-item");
    if (checkInStatus = "true" ) { // if checked in, it should display the list
        checkInList.style.display = "block";
    }else {
        checkInList.style.display = "none";
    }
}
