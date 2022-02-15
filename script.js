function calculateTip() {
  let billAmt = document.getElementById("billamt").value;
  let qualofsvc = document.getElementById("qualofsvc").value;
  let letssplit = document.getElementById("splitamt").value;

  //calculate functions
if (letssplit === "" || letssplit <= 1) {
  letssplit = 1; document.getElementById("perperson").style.display = "none";
} else {
  document.getElementById("perperson").style.display ="block";
}

let total = (billAmt * qualofsvc) / letssplit;

total = Math.round(total * 100) / 100;

total = total.toFixed(2);

//Tip Display
document.getElementById("totaltipamt").style.display ="block";
document.getElementById("tipamt").innerHTML = total;  

};

//Click Button Function
document.getElementById("caltip").onclick = function() {
  calculateTip();

};

