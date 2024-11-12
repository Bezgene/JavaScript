let userName = prompt("Please enter your name");

let userAge = prompt("Please enter your age");

userAge = Number(userAge);

if (userAge < 18) {
    alert("You are not allowed to visit this website.");
}
else if (userAge >= 18 && userAge <= 22) {
    let isSure = confirm("Are you sure want to continue?");
    if (isSure) {
        alert("Welcome " + userName + "!");
    }
    else {
        alert("You are not allowed to visit this website.");
    }
}
else if (userAge > 22) {
    alert(`Welcome, ${userName}`);
}