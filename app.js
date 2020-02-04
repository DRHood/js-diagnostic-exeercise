// Global sum variables
chBalNum = 0;
saBalNum = 0;

function checkAccounts() {
    if(chBalNum < 10) {
        document.getElementById("checking").classList.add("zero");
    } else {
        document.getElementById("checking").classList.remove("zero");
    }
    if(saBalNum < 10) {
        document.getElementById("savings").classList.add("zero");
    } else {
        document.getElementById("savings").classList.remove("zero");
    }
}
checkAccounts();
// Checking Account
// deposit 
// event listener attached to deposit button
document.querySelector('#chDep').addEventListener('click', () => {
    // get amount from input field
    let chAmount = document.querySelector('#chAmnt').value;
    // change input amount to integer
    let chNumber = parseInt(chAmount);
    // get checking balance
    let chBalance = document.querySelector('#chBal');
    // add input and balance
    chBalNum += chNumber;
    // display new balance
    chBalance.innerHTML = "$" + chBalNum;
    checkAccounts();
    return chBalNum;
});

// withdrawal 
// event listener attached to withdraw button
document.querySelector('#chWdrw').addEventListener('click', () => {
    // get amount from input field
    let chAmount = document.querySelector('#chAmnt').value;
    // change input amount to integer
    let chNumber = parseInt(chAmount);
    // get checking balance
    let chBalance = document.querySelector('#chBal');
    // subtract input from balance if available, otherwise alert
    if(chNumber > chBalNum) {
        alert("Insufficient Funds")
    } else {
        chBalNum -= chNumber;
        // display new balance
        chBalance.innerHTML = "$" + chBalNum;
    }
    checkAccounts();
    return chBalNum;
});

// Savings Account
// deposit
// event listener attached to deposit button
document.querySelector('#saDep').addEventListener('click', () => {
    // get amount from input field
    let saAmount = document.querySelector('#saAmnt').value;
    // change input amount to integer
    let saNumber = parseInt(saAmount);
    // get savings balance
    let saBalance = document.querySelector('#saBal');
    // add input and balance
    saBalNum += saNumber;
    // display new balance
    saBalance.innerHTML = "$" + saBalNum;
    checkAccounts();
    return saBalNum;
});

// withdrawal
// event listener attached to withdraw button
document.querySelector('#saWdrw').addEventListener('click', () => {
    // get amount from input field
    let saAmount = document.querySelector('#saAmnt').value;
    // change input amount to integer
    let saNumber = parseInt(saAmount);
    // get savings balance
    let saBalance = document.querySelector('#saBal');
    // subtract input from balance if available, otherwise alert
    if(saNumber > saBalNum) {
        alert("Insufficient Funds")
    } else {
        saBalNum -= saNumber;
        // display new balance
        saBalance.innerHTML = "$" + saBalNum;
    }
    checkAccounts();
    return saBalNum;
});