var plus_btns = document.querySelectorAll(".plus");
var minus_btns = document.querySelectorAll(".minus");
var delete_btns = document.querySelectorAll(".delete")
var like_btns = document.querySelectorAll (".like")
// console.log(delete_btns)


function inc(e) {
  clicked_button = e.target;
  //   console.log(clicked_button);
  var div_container = clicked_button.parentElement;
  var paragraph = div_container.querySelector("p");
  // console.log(paragraph);
  var value = Number(paragraph.innerHTML);
  value++;
  //   console.log(value);
  paragraph.innerHTML = value;

  var tr=div_container.parentElement.parentElement
  var tdunitPrice = tr.querySelector(".unitPrice")
  var unitPrice=Number(tdunitPrice.innerHTML)
  var tdPrice=tr.querySelector(".price")
  tdPrice.innerHTML=value*unitPrice
  sum ()
  
}

function Supp(e) {
  console.log(e)
  var clicked_supp = e.target
  console.log(clicked_supp.parentElement.parentElement.parentElement.parentElement)
  var trDEL = clicked_supp.parentElement.parentElement.parentElement.parentElement
  var priceDEL = trDEL.querySelector(".price")
  priceDEL.innerHTML=0
  sum()
  trDEL.remove()
  
}

for (let i = 0; i < delete_btns.length; i++) {
delete_btns[i].addEventListener("click",Supp);
  
}


  
  function sum (){
    var somme=0
    var prices =document.querySelectorAll(".price");
  var total =document.querySelector("#total");
  for (let i = 0; i < prices.length; i++) {
    somme += Number (prices[i].innerHTML)
    total.innerHTML=somme;
    console.log (somme)}
  }
function dec(e) {
  clicked_button = e.target;
  var div_container = clicked_button.parentElement;
  var paragraph = div_container.querySelector("p");
  var value = Number(paragraph.innerHTML);
  if (value > 0) {
    value--;
    console.log(value);
  }
  paragraph.innerHTML = value;
  var tr=div_container.parentElement.parentElement
  var tdunitPrice = tr.querySelector(".unitPrice")
  var unitPrice=Number(tdunitPrice.innerHTML)
  var tdPrice=tr.querySelector(".price")
  tdPrice.innerHTML=value*unitPrice
  sum ()
}

function changeColor (e) {
  var cible = e.target
  if (cible.style.color !=="red") {
    cible.style.color = "red" ;
    console.log (cible);
    
  }
  else {
    cible.style.color = "gray" ;
  }

}

for (let i = 0; i < plus_btns.length; i++) {
  plus_btns[i].addEventListener("click", inc);
}

for (let i = 0; i < minus_btns.length; i++) {
  minus_btns[i].addEventListener("click", dec);
}

for (let i = 0; i < like_btns.length; i++) {
   like_btns[i].addEventListener ("click" , changeColor);
  
}

                 



