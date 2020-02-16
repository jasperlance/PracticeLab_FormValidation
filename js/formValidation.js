function formValidation() {
    let eventType = document.getElementById("eventType").value;
    let eventTitle = document.getElementById("eventTitle").value;
    let date1 = document.getElementById("date1").value;
    let date2 = document.getElementById("date2").value;
    let postingDate = document.getElementById("postingDate").value;

    if (eventType == "" || eventTitle == "" || date1 == "" || date2 == "" || postingDate == "") {
        alert("* All fields are mandatory *");
        return false;
    }

    else if(date1 > date2){
        alert("Invalid Input")
        return false;
    }

    else if(postingDate >= date1 || postingDate > date2){
        alert("Posting date must be before the main event");
        return false;
    }

    else {
        alert("Your form has been saved!");
        return true;
    }

}