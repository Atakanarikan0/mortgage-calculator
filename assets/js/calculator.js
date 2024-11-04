amountInput.addEventListener("input", inputControl)
calculateBtn.addEventListener("click", control);
const footer = document.querySelector(".footer-title");
const footerInner = document.querySelector(".footer-inner");
const footerPrice = document.querySelector(".footer-price");

function inputControl(input) {
  input.value = amountInput.value.replace(/[^0-9]/g, '');
}


function hesapla() {
  footer.style.display = "none";
  footerInner.style.display = "block";
  let amount = amountInput.value
  let term = termInput.value
  let rate = rateInput.value

  let r  = (rate / 100) / 12
  let n = term * 12
  let d = (1 + r)**n


  let monthlyRepaymnets = amount * ((r * d) / (d - 1));
  // let z = monthlyRepaymnets.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  footerPrice.children[1].innerText = `£${monthlyRepaymnets.toFixed(1)}`
  
  
  let total = monthlyRepaymnets * n
  // total.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  footerPrice.children[3].innerText = `£${total.toFixed(1)}`
}

const amountReverse = document.querySelector(".euro-input")
const termReverse = document.querySelectorAll(".euro-input-reverse")[0]
const rateReverse = document.querySelectorAll(".euro-input-reverse")[1]

function control() {
  // amountInput.value = amountInput.value.replace(/[^0-9]/g, '');
  if(amountInput.value.trim() === "") {
    amountReverse.children[0].style.background = "#D73328"
    amountReverse.children[0].style.color = "#FFF"
    amountReverse.style.border = "1px solid #D73328"
    errorAmount.style.display = "block"
  }else {
    hesapla()
  }
  if(termInput.value.trim() === "") {
    termReverse.children[0].style.background = "#D73328"
    termReverse.children[0].style.color = "#FFF"
    termReverse.style.border = "1px solid #D73328"
    errorTerm.style.display = "block"
  }else {
    hesapla()
  }
  if (rateInput.value.trim() === "") {
    rateReverse.children[0].style.background = "#D73328"
    rateReverse.children[0].style.color = "#FFF"
    rateReverse.style.border = "1px solid #D73328"
    errorRate.style.display = "block"
  }else {
    hesapla()
  }
}

clearBtn.addEventListener("click", function() {
  amountInput.value = "";
  termInput.value = "";
  rateInput.value = "";
  footer.style.display = "block";
  footerInner.style.display = "none";
})