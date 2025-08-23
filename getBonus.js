const coupon = 1111
const validCoupon = parseInt(coupon)
document.getElementById('getBonusBtn').addEventListener('click', function (e) {
    e.preventDefault()
const couponCode = document.getElementById('couponCode').value


    const currentBalance = parseInt(document.getElementById('current-balance').innerText)

    if ( couponCode !=validCoupon ) {
        document.getElementById('couponCoderError').innerText ='*Please Provide A Valid Coupon Code*'
        return
    }
    let getBonus = 5000
   
    const newBalance = currentBalance + getBonus
    document.getElementById('current-balance').innerText = newBalance
    document.getElementById('couponCode').value = ''
    document.getElementById('couponCoderError').innerText = ''
})