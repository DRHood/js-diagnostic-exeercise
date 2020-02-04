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
    let chBalance = document.querySelector('#chBal').textContent;
    // add input and balance
    chBalNum += chNumber;
    // display new balance
    document.querySelector('#chBal').innerHTML = "$" + chBalNum;
    return chBalNum;
});

// event listener attached to deposit button
document.querySelector('#saDep').addEventListener('click', () => {
    // get amount from input field
    let saAmount = document.querySelector('#saAmnt').value;
    // change input amount to integer
    let saNumber = parseInt(saAmount);
    // get checking balance
    let saBalance = document.querySelector('#saBal').textContent;
    // add input and balance
    saBalNum += saNumber;
    // display new balance
    document.querySelector('#saBal').innerHTML = "$" + saBalNum;
    return saBalNum;
});