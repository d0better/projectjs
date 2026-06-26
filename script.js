let pin =Number(prompt("input pin", ""))
if (pin === 1234) {
    let choice = Number(prompt("choose an option : \n1 - check balance \n2 - deposit \n3 - withdraw \n4 - Even or Odd \n5 - count to a number  " ));
     let balance = Number(50000);
     let total;
     let newbalance;
    switch (choice) {
        case 1:
            alert("your balance is $ " + balance)
            break;
        case 2:
            let deposit = Number(prompt("how much do you want to deposit", ""));
            total = Number (deposit + balance);
            alert("your new balance is $" + total)
                break;
        case 3:
            let withdraw = Number (prompt("how much do you want to withdraw"))
            if (withdraw > balance) {
                alert("insufficient balance")
            } else {
                  newbalance = Number(balance - withdraw);
                  alert("your newbalance is " + newbalance) 
            }
            break;
        case 4 :
            let num = Number(prompt("input number"));
            if (num % 2 === 0) {
                alert ("Even number")
            } else{
                alert("Odd Number")
            }
            break;
        case 5:
            let count = Number(prompt("count to what Number?", ""));
            for (let i = 1; i <= count; i++) {
                if (i % 2 === 0) {
                    console.log (i + " is an even number")
                }  else{
                    console.log(i + " is an odd number")
                }
            }
            break;
        default:
            alert("invalid option")
            break;
    }
} else{
    alert("wrong pin")
}
