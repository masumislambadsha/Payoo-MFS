// Cash In Functionality
const validAccountNumber = 12345678910;
const validPin = 1234;
document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const bank = document.getElementById("bank").value;
  const accountNumber = document.getElementById("accountNumber").value;
  const addMoney = parseInt(document.getElementById("addMoney").value);
  const pin = parseInt(document.getElementById("pin").value);

  const currentBalance = parseInt(
    document.getElementById("current-balance").innerText
  );

  if (accountNumber != validAccountNumber) {
    document.getElementById("accountNumberError").innerText =
      "*Please Provide A Valid Account Number*";
    return;
  }
  if (addMoney < 0) {
    document.getElementById("amountError").innerText =
      "*Please Provide A Valid Amount*";
    return;
  }
  if (addMoney === "") {
    document.getElementById("transAmountError").innerText =
      "*Please Provide A Valid Amount*";
    return;
  }
  if (pin != validPin) {
    document.getElementById("pinError").innerText =
      "*Please Provide Correct PIN*";
    return;
  }

  const newBalance = currentBalance + addMoney;
  document.getElementById("current-balance").innerText = newBalance;
  document.getElementById("bank").value = "";
  document.getElementById("accountNumber").value = "";
  document.getElementById("addMoney").value = "";
  document.getElementById("pin").value = "";
  document.getElementById("pinError").innerText = "";
  document.getElementById("accountNumberError").innerText = "";
  document.getElementById("amountError").innerText = "";
  console.log(newBalance);
});

// Cash Out Functionality
const AgentNumber = 19296866940;
const validAgentNumber = parseInt(AgentNumber);
const validCashoutPin = 1234;
document
  .getElementById("cashoutMoneyBtn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const agentNumber = document.getElementById("agentNumber").value;
    const removeMoney = parseInt(document.getElementById("removeMoney").value);
    const cashoutPin = parseInt(document.getElementById("cashoutPin").value);

    const currentBalance = parseInt(
      document.getElementById("current-balance").innerText
    );

    if (agentNumber != validAgentNumber) {
      document.getElementById("agentNumberError").innerText =
        "*Please Provide A Valid Account Number*";
      return;
    }
    if (removeMoney < 0) {
      document.getElementById("removeAmountError").innerText =
        "*Please Provide A Valid Amount*";
      return;
    }
    if (removeMoney === "") {
      document.getElementById("transAmountError").innerText =
        "*Please Provide A Valid Amount*";
      return;
    }
    if (cashoutPin != validCashoutPin) {
      document.getElementById("cashoutPinError").innerText =
        "*Please Provide Correct PIN*";
      return;
    }

    const newBalance = currentBalance - removeMoney;
    document.getElementById("current-balance").innerText = newBalance;
    document.getElementById("agentNumber").value = "";
    document.getElementById("removeMoney").value = "";
    document.getElementById("cashoutPin").value = "";
    document.getElementById("cashoutPinError").innerText = "";
    document.getElementById("agentNumberError").innerText = "";
    document.getElementById("removeAmountError").innerText = "";
    console.log(newBalance);
  });
// Transfer Money Functionality
const UserNumber = 19296866940;
const validUserNumber = parseInt(UserNumber);
const validTransPin = 1234;
document.getElementById("sendMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const userNumber = document.getElementById("userNumber").value;
  const transMoney = parseInt(document.getElementById("transMoney").value);
  const transPin = parseInt(document.getElementById("transPin").value);

  const currentBalance = parseInt(
    document.getElementById("current-balance").innerText
  );

  if (userNumber != validUserNumber) {
    document.getElementById("userNumberError").innerText =
      "*Please Provide A Valid Account Number*";
    return;
  }
  if (transMoney < 0) {
    document.getElementById("transAmountError").innerText =
      "*Please Provide A Valid Amount*";
    return;
  }
  if (transMoney === "") {
    document.getElementById("transAmountError").innerText =
      "*Please Provide A Valid Amount*";
    return;
  }
  if (transPin != validTransPin) {
    document.getElementById("transPinError").innerText =
      "*Please Provide Correct PIN*";
    return;
  }

  const newBalance = currentBalance - transMoney;
  document.getElementById("current-balance").innerText = newBalance;
  document.getElementById("userNumber").value = "";
  document.getElementById("transMoney").value = "";
  document.getElementById("transPin").value = "";
  document.getElementById("transPinError").innerText = "";
  document.getElementById("userNumberError").innerText = "";
  document.getElementById("transAmountError").innerText = "";
  console.log(newBalance);
});
// getBonus Functionality
const coupon = 1111;
const validCoupon = parseInt(coupon);
document.getElementById("getBonusBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const couponCode = document.getElementById("couponCode").value;

  const currentBalance = parseInt(
    document.getElementById("current-balance").innerText
  );

  if (couponCode != validCoupon) {
    document.getElementById("couponCoderError").innerText =
      "*Please Provide A Valid Coupon Code*";
    return;
  }
  let getBonus = 5000;

  const newBalance = currentBalance + getBonus;
  document.getElementById("current-balance").innerText = newBalance;
  document.getElementById("couponCode").value = "";
  document.getElementById("couponCoderError").innerText = "";
});
// payBill Functionality
const validBillerNumber = 12345678910;
const validPayBillPin = 1234;
document.getElementById("payBillBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const billCatagory = document.getElementById("bill-catagory").value;
  const billerNumber = document.getElementById("billerNumber").value;
  const payMoney = parseInt(document.getElementById("payMoney").value);
  const payPin = parseInt(document.getElementById("payPin").value);

  const currentBalance = parseInt(
    document.getElementById("current-balance").innerText
  );

  if (billerNumber != validBillerNumber) {
    document.getElementById("billerNumberError").innerText =
      "*Please Provide A Valid Biller Number*";
    return;
  }
  if (payMoney < 0) {
    document.getElementById("payAmountError").innerText =
      "*Please Provide A Valid Amount*";
    return;
  }
  if (payMoney === "") {
    document.getElementById("payAmountError").innerText =
      "*Please Provide A Valid Amount*";
    return;
  }
  if (payPin != validPayBillPin) {
    document.getElementById("payPinError").innerText =
      "*Please Provide Correct PIN*";
    return;
  }

  const newBalance = currentBalance - payMoney;
  document.getElementById("current-balance").innerText = newBalance;
  document.getElementById("bill-catagory").value = "";
  document.getElementById("billerNumber").value = "";
  document.getElementById("payMoney").value = "";
  document.getElementById("payPin").value = "";
  document.getElementById("payPinError").innerText = "";
  document.getElementById("billerNumberError").innerText = "";
  document.getElementById("payAmountError").innerText = "";
  console.log(newBalance);
});


// toggle
document.getElementById("cash-in-btn").addEventListener("click", function () {
  console.log("clicked");
  const defaultSec = document.getElementById("default-section");
  const cashIn = document.getElementById("cash-in-section");
  const cashOutSection = document.getElementById("cash-out-section");
  const transferMoney = document.getElementById("transfer-section");
  const getBonus = document.getElementById("get-bonus-section");
  const payBill = document.getElementById("pay-bill-section");
  const transaction = document.getElementById('transaction-section')
  defaultSec.style.display ='none'
    cashIn.style.display = "block";
    cashOutSection.style.display = "none";
    transferMoney.style.display = "none";
    getBonus.style.display = "none";
    payBill.style.display = "none";
    transaction.style.display = "none";
  });
document.getElementById("cash-out-btn").addEventListener("click", function () {
  console.log("clicked");
   const defaultSec = document.getElementById("default-section");
   const cashIn = document.getElementById("cash-in-section");
   const cashOutSection = document.getElementById("cash-out-section");
   const transferMoney = document.getElementById("transfer-section");
   const getBonus = document.getElementById("get-bonus-section");
   const payBill = document.getElementById("pay-bill-section");
   const transaction = document.getElementById('transaction-section')
   defaultSec.style.display ='none'
    cashIn.style.display = "none";
    cashOutSection.style.display = "block";
    transferMoney.style.display = "none";
    getBonus.style.display = "none";
    payBill.style.display = "none";
    transaction.style.display = "none";
});
document.getElementById("transfer-btn").addEventListener("click", function () {
  console.log("clicked");
   const defaultSec = document.getElementById("default-section");
   const cashIn = document.getElementById("cash-in-section");
   const cashOutSection = document.getElementById("cash-out-section");
   const transferMoney = document.getElementById("transfer-section");
   const getBonus = document.getElementById("get-bonus-section");
   const payBill = document.getElementById("pay-bill-section");
   const transaction = document.getElementById('transaction-section')
   defaultSec.style.display ='none'
    cashIn.style.display = "none";
    cashOutSection.style.display = "none";
    transferMoney.style.display = "block";
    getBonus.style.display = "none";
    payBill.style.display = "none";
    transaction.style.display = "none";
});
document.getElementById("getBonus-btn").addEventListener("click", function () {
  console.log("clicked");
   const defaultSec = document.getElementById("default-section");
   const cashIn = document.getElementById("cash-in-section");
   const cashOutSection = document.getElementById("cash-out-section");
   const transferMoney = document.getElementById("transfer-section");
   const getBonus = document.getElementById("get-bonus-section");
   const payBill = document.getElementById("pay-bill-section");
   const transaction = document.getElementById('transaction-section')
   defaultSec.style.display ='none'
    cashIn.style.display = "none";
    cashOutSection.style.display = "none";
    transferMoney.style.display = "none";
    getBonus.style.display = "block";
    payBill.style.display = "none";
    transaction.style.display = "none";
});
document.getElementById("pay-bill-btn").addEventListener("click", function () {
  console.log("clicked"); const defaultSec = document.getElementById("default-section");
  const cashIn = document.getElementById("cash-in-section");
  const cashOutSection = document.getElementById("cash-out-section");
  const transferMoney = document.getElementById("transfer-section");
  const getBonus = document.getElementById("get-bonus-section");
  const payBill = document.getElementById("pay-bill-section");
  const transaction = document.getElementById('transaction-section')
  defaultSec.style.display ='none'
    cashIn.style.display = "none";
    cashOutSection.style.display = "none";
    transferMoney.style.display = "none";
    getBonus.style.display = "none";
    payBill.style.display = "block";
    transaction.style.display = "none";
});
document.getElementById("transaction-btn").addEventListener("click", function () {
  console.log("clicked"); const defaultSec = document.getElementById("default-section");
  const cashIn = document.getElementById("cash-in-section");
  const cashOutSection = document.getElementById("cash-out-section");
  const transferMoney = document.getElementById("transfer-section");
  const getBonus = document.getElementById("get-bonus-section");
  const payBill = document.getElementById("pay-bill-section");
  const transaction = document.getElementById('transaction-section')
  defaultSec.style.display ='none'
    cashIn.style.display = "none";
  cashOutSection.style.display = "none";
  transferMoney.style.display = "none";
  getBonus.style.display = "none";
  payBill.style.display = "none";
  transaction.style.display = "block";
});
