document.getElementById('calculate-btn').addEventListener('click', calculateChange);

function calculateChange() {
  const billAmount = Number(document.getElementById("bill-amount").value);
  const cashGiven = Number(document.getElementById("cash-given").value);
  const errorMsg = document.getElementById("error-msg");
  const changeOutput = document.getElementById("change-output");

  // Reset error and table
  errorMsg.textContent = "";
  errorMsg.style.display = "none";
  changeOutput.innerHTML = "";
  changeOutput.classList.add("hidden");

  if (billAmount <= 0) {
    errorMsg.textContent = "Please enter a valid bill amount greater than 0.";
    errorMsg.style.display = "block";
    return;
  }

  if (cashGiven < billAmount) {
    errorMsg.textContent = "Cash given should be greater than or equal to bill amount.";
    errorMsg.style.display = "block";
    return;
  }

  let change = cashGiven - billAmount;

  if (change === 0) {
    errorMsg.textContent = "No change to return.";
    errorMsg.style.display = "block";
    return;
  }

  const denominations = [2000, 500, 100, 50, 20, 10, 5, 2, 1];

  for (let denom of denominations) {
    let count = Math.floor(change / denom);
    if (count > 0) {
      changeOutput.innerHTML += `<tr><td>₹${denom}</td><td>${count}</td></tr>`;
      change %= denom;
    }
  }

  changeOutput.classList.remove("hidden");
}
