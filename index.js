// Experience Buttons
function btn() {
    let btn = document.getElementById("skills");
    if (btn.style.display === "none") {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function btn2() {
    let btn2 = document.getElementById("school");
    if (btn2.style.display === "none") {
        btn2.style.display = "block";
    } else {
        btn2.style.display = "none";
    }
}

//Conatct Form Validation

function validateForm() {
    let nameValue = document.forms["contactform"]["fullname"].value;
    if (nameValue == "") {
        alert("You must enter your full name");
        return false;
    }
    document.write("Thank you for contacting me!");
}