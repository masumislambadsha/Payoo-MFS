const validAccountNumber = 12345678910
const validPin = 1234
document.getElementById('addMoneyBtn').addEventListener('click', function (e) {
    e.preventDefault()
    const bank = document.getElementById('bank').value
const accountNumber = document.getElementById('accountNumber').value
const addMoney = parseInt(document.getElementById('addMoney').value)
const pin = parseInt(document.getElementById('pin').value)

    const currentBalance = parseInt(document.getElementById('current-balance').innerText)

    if ( accountNumber !=validAccountNumber ) {
        document.getElementById('accountNumberError').innerText ='*Please Provide A Valid Account Number*'
        return
    }
    if (addMoney < 0) {
        document.getElementById('amountError').innerText ='*Please Provide A Valid Amount*'
        return
    }
    if (pin != validPin) {
        document.getElementById('pinError').innerText ='*Please Provide Correct PIN*'
        return
    }

    const newBalance = currentBalance + addMoney
    document.getElementById('current-balance').innerText = newBalance
    document.getElementById('bank').value = ''
    document.getElementById('accountNumber').value = ''
    document.getElementById('addMoney').value = ''
    document.getElementById('pin').value = ''
    document.getElementById('pinError').innerText = ''
    document.getElementById('accountNumberError').innerText = ''
    document.getElementById('amountError').innerText = ''
    console.log(newBalance)
})
