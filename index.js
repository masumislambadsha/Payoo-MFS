// login btn functionality
document.getElementById('login-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const mobileNumber = 12345678910
    const pin = 1234
    const mobileNumberValue =document.getElementById('inputNum').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinValue = document.getElementById('inputPass').value
    const pinValueConverted = parseInt(pinValue)
    if (mobileNumberValueConverted === mobileNumber && pinValueConverted === pin) {
        window.location.href="./main.html"
    }
    else {
        alert('invalid cridential')
    }
        
})