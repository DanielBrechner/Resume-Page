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
    let x = document.getElementById("fname").value;
    if (x == "") {
        document.getElementById("form-message").innerHTML = "You must enter your full name";
    }
    else {
        document.getElementById("form-message").innerHTML = "Thank you for contacting me! Expect a response soon."
    }
}



//Website visit counter

let counterContainer = document.querySelector(".website-counter");

let visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

