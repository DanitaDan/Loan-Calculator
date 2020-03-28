//Listen for submit
document.getElementById("loan-form").addEventListener("submit", calculateResults);


//Calculate Result
function calculateResults(e) {
  console.log("Calculating");

  // UI Variables
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("year");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calcInterest = parseFloat(interest.value) / 100 / 12;
  const calcPayments = parseFloat(year.value) * 12;

  // Compute monthly payment

  const x = Math.pow(1 + calcInterest, calcPayments);
  const monthly = (principal * x * calcInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calcPayments).toFixed(2);
    totalInterest.value = ((monthly * calcPayments) - principal).toFixed(2);
  } else {
    console.log(error);
  }




  e.preventDefault();
}





