const acctBalanceLbl = document.getElementById("checkingBalance");
const deposits = [];
const withdrawals = [];
let totalBalance = 500;
const userDeposit = document.getElementById("userDeposit");
const btnDeposit = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");

// $
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

// accept deposits
btnDeposit.addEventListener('click', () => {

    // checks if deposit is a number
    if (isNaN(userDeposit.value)) {
        alert("Please enter a number.");
        return userDeposit.value = '';
    } else {

    // checks if deposit meets parameters
        if (userDeposit.value < 1 || userDeposit.value > 100000) {
            alert("You can only deposit between $1 and $100,000.")
            return userDeposit.value = '';
        } else {
    
        // push deposit to array
        deposits.push(Number(userDeposit.value));
        
        totalBalance += (Number(userDeposit.value));

        
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("checkingBalance").innerHTML = totalBalanceFormatted;

    
    console.log("$" + userDeposit.value);
    return userDeposit.value = '';
    }
}
    
});

// accept withdrawals
btnWithdraw.addEventListener('click', () => {

    // checks if withdrawal is a number
    if (isNaN(userWithdraw.value)) {
        alert("Please enter a number.");
        return userWithdraw.value = '';
    } else {

        // checks if withdrawal meets parameters
        if (userWithdraw.value > totalBalance - 0) {
            alert("Your total balance cannot drop below $0.");
            return userWithdraw.value = '';
        } else {

        // push withdrawal to array
        withdrawals.push(Number(userWithdraw.value));
        
        totalBalance -= (Number(userWithdraw.value));

        
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("checkingBalance").innerHTML = totalBalanceFormatted;

    // print withdrawal to console to verfify success
    console.log("$" + userWithdraw.value);
    return userWithdraw.value = '';
    }
}
});



let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("checkingBalance").innerHTML = totalBalanceFormatted;


// Savings account
const acctBalanceLbl2 = document.getElementById("savingsBalance");
const deposits2 = [];
const withdrawals2 = [];
let totalBalance2 = 500;
const userDeposit2 = document.getElementById("userDeposit2");
const btnDeposit2 = document.getElementById("btnDeposit2");
const userWithdraw2 = document.getElementById("userWithdraw2");
const btnWithdraw2 = document.getElementById("btnWithdraw2");


const formatter2 = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  
  });


btnDeposit2.addEventListener('click', () => {

    
    if (isNaN(userDeposit2.value)) {
        alert("Please enter a number.");
        return userDeposit2.value = '';
    } else {

    
        if (userDeposit2.value < 1 || userDeposit2.value > 100000) {
            alert("You can only deposit between $1 and $100,000.")
            return userDeposit2.value = '';
        } else {
    
       
        deposits.push(Number(userDeposit2.value));
       
        totalBalance2 += (Number(userDeposit2.value));

        
        let totalBalanceFormatted2 = formatter2.format(totalBalance2);
        document.getElementById("savingsBalance").innerHTML = totalBalanceFormatted2;

   
    console.log("$" + userDeposit2.value);
    return userDeposit2.value = '';
    }
}
    
});


btnWithdraw2.addEventListener('click', () => {

  
    if (isNaN(userWithdraw2.value)) {
        alert("Please enter a number.");
        return userWithdraw2.value = '';
    } else {

       
        if (userWithdraw2.value > totalBalance2 - 0) {
            alert("Your total balance cannot drop below $0.");
            return userWithdraw2.value = '';
        } else {

       
        withdrawals2.push(Number(userWithdraw2.value));
     
        totalBalance2 -= (Number(userWithdraw2.value));

       
        let totalBalanceFormatted2 = formatter2.format(totalBalance2);
        document.getElementById("savingsBalance").innerHTML = totalBalanceFormatted2;

    
    console.log("$" + userWithdraw2.value);
    return userWithdraw2.value = '';
    }
}
});



let totalBalanceFormatted2 = formatter2.format(totalBalance2);
document.getElementById("savingsBalance").innerHTML = totalBalanceFormatted2;