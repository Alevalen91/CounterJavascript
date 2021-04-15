# Counter Javascript
## Progetto Start2Impact
### Creazione di un contatore formato da un bottone per l'incremento e un bottone per il decremento del valore. 

<img width="1077" alt="Schermata 2021-04-15 alle 12 14 39" src="https://user-images.githubusercontent.com/79061266/114853747-65be3280-9de4-11eb-89ea-18637b4a9afe.png">



### Strumenti utilizzati
* Javascript
* Html
* Css
* Atom


##Funzionamento
Il contatore incrementerà o decrementerà il valore in base al bottone premuto dall'utente. Per ogni valore ottenuto, verrà generato un link alla pagina wikipedia che illustra tutto ciò che c'è da sapere sul valore. 

Il contatore ha un valore minimo pari a 0 e un valore massimo pari a 1000. 


## Funzionamento del codice
Per incrementare o decrementare il valore abbiamo una funzione apposita : 

`document.getElementById("decrement").onclick = function down (){
if (i > 0){
i --;[...]`

che esegue anche un controllo sul valore attuale. 

Per mostrare il valore nella pagina html, le funzioni procederanno in questo modo: 
`document.getElementById("result").innerText = i;
document.getElementById("result").style = "Color: red";
document.getElementById("wikitime").innerHTML = "<a href='https://it.wikipedia.org/wiki/" + i + "_(numero)' target = '_blank'> Tutto sul numero " + i + "</a>"`

All'apertura della pagina, verrà mostrato di default il numero 0 grazie a una funzione iniziale:
`document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("result").innerText = i;`
  
Il colore del valore iniziale sarà blu, perciò neutro. Se il valore verrà incrementato assumerà il colore verde, in caso contrario rosso:
`document.getElementById("result").style = "Color: green";`
`document.getElementById("result").style = "Color: red";`

##Scopo del progetto:
* Didattico






