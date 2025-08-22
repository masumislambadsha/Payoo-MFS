
document.getElementById('addMoneyBtn').addEventListener('click', function () {
          console.log('clicked')
          const cashIn = document.getElementById('cash-in-section')
          const cashOutSection = document.getElementById('cash-out-section')
           cashIn.style.display = 'block'; 
          cashOutSection.style.display ='none'
        })
document.getElementById('cashoutBtn').addEventListener('click', function(){
          console.log('clicked')
          const cashIn = document.getElementById('cash-in-section')
          const cashOutSection = document.getElementById('cash-out-section')
           cashIn.style.display = 'none'; 
          cashOutSection.style.display ='block'
        })