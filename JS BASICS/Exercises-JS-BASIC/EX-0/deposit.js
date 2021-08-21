function deposit(input) {
    let depositAmount = Number(input[0]);
    let termOfDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2] / 100);
    let earnedInterest = depositAmount * (annualInterestRate / 100);
    let monthlyInterest = earnedInterest / 12;
    let finalAmount = depositAmount + termOfDeposit * ((depositAmount * annualInterestRate) / 12);
    console.log(finalAmount)
}
deposit(['2350', '6', '7.']) //сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)