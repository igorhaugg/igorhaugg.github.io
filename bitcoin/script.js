var btn = document.querySelector("button");
var priceDisp = document.querySelector("#price");
var currency = "USD";
var XHR = new XMLHttpRequest();

btn.addEventListener("click", getBitcoinValue);

function getBitcoinValue() {
  var USD = document.querySelector('#USD').checked;
  var EUR = document.querySelector('#EUR').checked;
  var GBP = document.querySelector('#GBP').checked;

  if (USD){
    currency = "USD";
  } else if (EUR){
    currency = "EUR";
  } else if (GBP){
    currency = "GBP";
  }

  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText);
      var price = data.bpi[currency].rate;
      priceDisp.innerText = price + " " + currency;
    }
  }

  var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  XHR.open("GET",url);
  XHR.send();
}

const bitbox = Array.from(document.querySelectorAll('input'));

function uncheck(e) {
  for (var i = 0, len = bitbox.length; i < len; i++) {
    if(bitbox[i].value != e.target.value){
      bitbox[i].checked = false;
    }
  }
}

bitbox.forEach(bit => bit.addEventListener('click', uncheck))

window.onload = getBitcoinValue;
/*window.onload = check;*/
