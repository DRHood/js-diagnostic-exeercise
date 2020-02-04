// Global sum variables
chBalNum = 0;
saBalNum = 0;

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
    if(chNumber > chBalNum) {
        alert("Insufficient Funds")
    } else {
        chBalNum -= chNumber;
        // display new balance
        chBalance.innerHTML = "$" + chBalNum;
    }
    return saBalNum;
});