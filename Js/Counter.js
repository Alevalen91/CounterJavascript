

let i = 0;
let link;





document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("result").innerText = i;
  document.getElementById("result").style = "Color: blue";
  document.getElementById("wikitime").innerHTML = "<a href='https://it.wikipedia.org/wiki/" + i + "_(numero)' target = '_blank'> Tutto sul numero " + i + "</a>"
  console.log(i);
  });;

document.getElementById("increment").onclick = function up (){
console.log(i);
i ++;
document.getElementById("result").innerText = i;
document.getElementById("result").style = "Color: green";
document.getElementById("wikitime").innerHTML = "<a href='https://it.wikipedia.org/wiki/" + i + "_(numero)' target = '_blank'> Tutto sul numero " + i + "</a>"

if (i > 1000){
  i = 0;
}


}


document.getElementById("decrement").onclick = function down (){
if (i > 0){
i --;
document.getElementById("result").innerText = i;
document.getElementById("result").style = "Color: red";
document.getElementById("wikitime").innerHTML = "<a href='https://it.wikipedia.org/wiki/" + i + "_(numero)' target = '_blank'> Tutto sul numero " + i + "</a>"


}

}
