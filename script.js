let username = prompt("input username", "");
if (username === "admin") {
    let pass = prompt ("password", "")
    if (pass === "kingpinto12") {
        alert("welcome")
    } else if (pass === "") {
        alert("cancelled")
    } else {(pass !== "kingpinto12") 
        alert("wrong password")
    }
}
if (username === "") {
    alert("cancel")
} else {(username !== "amdin") 
    alert("wrong user")
}
