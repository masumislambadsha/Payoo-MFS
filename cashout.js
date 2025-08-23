const AgentNumber = 19296866940
const validAgentNumber = parseInt(AgentNumber)
const validPin = 1234
document.getElementById('cashoutMoneyBtn').addEventListener('click', function (e) {
    e.preventDefault()
const agentNumber = document.getElementById('agentNumber').value
const removeMoney = parseInt(document.getElementById('removeMoney').value)
const cashoutPin = parseInt(document.getElementById('cashoutPin').value)

    const currentBalance = parseInt(document.getElementById('current-balance').innerText)

    if ( agentNumber !=validAgentNumber ) {
        document.getElementById('agentNumberError').innerText ='*Please Provide A Valid Account Number*'
        return
    }
    if (removeMoney < 0) {
        document.getElementById('removeAmountError').innerText ='*Please Provide A Valid Amount*'
        return 
    }
    if (cashoutPin != validPin) {
        document.getElementById('cashoutPinError').innerText ='*Please Provide Correct PIN*'
        return
    }

    const newBalance = currentBalance - removeMoney
    document.getElementById('current-balance').innerText = newBalance
    document.getElementById('agentNumber').value = ''
    document.getElementById('removeMoney').value = ''
    document.getElementById('cashoutPin').value = ''
    document.getElementById('cashoutPinError').innerText = ''
    document.getElementById('agentNumberError').innerText = ''
    document.getElementById('removeAmountError').innerText = ''
    console.log(newBalance)
})