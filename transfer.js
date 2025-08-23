const UserNumber = 19296866940
const validUserNumber = parseInt(UserNumber)
const validTransPin = 1234
document.getElementById('sendMoneyBtn').addEventListener('click', function (e) {
    e.preventDefault()
const userNumber = document.getElementById('userNumber').value
const transMoney = parseInt(document.getElementById('transMoney').value)
const transPin = parseInt(document.getElementById('transPin').value)

    const currentBalance = parseInt(document.getElementById('current-balance').innerText)

    if ( userNumber !=validUserNumber ) {
        document.getElementById('userNumberError').innerText ='*Please Provide A Valid Account Number*'
        return
    }
    if (transMoney < 0) {
        document.getElementById('transAmountError').innerText ='*Please Provide A Valid Amount*'
        return
    }
    if (transPin != validTransPin) {
        document.getElementById('transPinError').innerText ='*Please Provide Correct PIN*'
        return
    }

    const newBalance = currentBalance - transMoney
    document.getElementById('current-balance').innerText = newBalance
    document.getElementById('userNumber').value = ''
    document.getElementById('transMoney').value = ''
    document.getElementById('transPin').value = ''
    document.getElementById('transPinError').innerText = ''
    document.getElementById('userNumberError').innerText = ''
    document.getElementById('transAmountError').innerText = ''
    console.log(newBalance)
})