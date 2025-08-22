document.getElementById('addMoneyBtn').addEventListener('click', function (e) {
    e.preventDefault()
    const bank = document.getElementById('bank').value
const accountNumber = document.getElementById('accountNumber').value
const addMoney = parseInt(document.getElementById('addMoney').value)
const pin = parseInt(document.getElementById('pin').value)

    const currentBalance = parseInt(document.getElementById('current-balance').innerText)

    if (accountNumber.length < 11) {
        alert('provide a valid number')
    }

    const newBalance = currentBalance + addMoney
    document.getElementById('current-balance').innerText = newBalance
    document.getElementById('bank').value = ''
    document.getElementById('accountNumber').value = ''
    document.getElementById('addMoney').value = ''
    document.getElementById('pin').value = ''
    console.log(newBalance)
})
