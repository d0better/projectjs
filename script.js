function checkAge(age) {
    if (age >= 18) {
        return true;
    } else{
        return confirm("do you have permission from your parent?")
    }
}
let age = prompt("how are you?", 18);
if (checkAge(age)) {
    alert("Access Granted")
} else {
    alert("Acess denied")
}