/*
Här lägger du din JavaScript-kod
*/


//Variabler

let newtodoEl = document.getElementById("newtodo");
let newtodobuttonEl = document.getElementById("newtodobutton");
let outputEl = document.getElementById("todolist");
let messageEl = document.getElementById("message");
let clearbuttonEl = document.getElementById("clearbutton");
//Variabel som lagrar uppgifter för Web Storage
let items = [];

//Händelsehanterare
window.addEventListener("load", init, false);
newtodoEl.addEventListener("input", checkText, false);
newtodobuttonEl.addEventListener("click", createElement, false);
clearbuttonEl.addEventListener("click", deleteListAndStorage, false);

//------------------------------Webstorage-------------------------------------//

//När sida laddas laddas data från Web Storage
window.onload = loadData;

//Spara data till Web Storage
function storeData(){
//Array för att lagra listan i todolist
let itemsArr = []; 
//variabel som lagrar samtliga article-element
let elements = outputEl.querySelectorAll("article");

//loopa igenom array
for(i=0; i<elements.length; i++){
    itemsArr.push(elements[i].innerHTML);
}
//Konverterar JavaScript array till JSON-sträng
let jsonStr = JSON.stringify(itemsArr);

//lagra data i Webb Storage
localStorage.setItem("items", jsonStr);
}

//Ladda Web Storage
function loadData(){
    //Hämtar data från Web Storage under namnet "items"
    let itemsStr = localStorage.getItem("items");
    //Kontroll ifall sparade uppgifter finns
    if(itemsStr){
        //Konverterar JSON-strängen till JavaScript array "itemsArr"
   let itemsArr = JSON.parse(itemsStr);
        //Loopar igenom varje del i "itemsArr"
    for(let i=0; i < itemsArr.length; i++){
            //Variabel som lagrar varje värde i itemsArr 
      let item = itemsArr[i];
            //Skapar nytt article-element för varje 
        let newEl = document.createElement("article");
        //Lägger textinnehållet från item till newEl
        newEl.innerHTML = item;
        //Klickhanterare för det skapade <article>-elementet
        newEl.addEventListener("click", deleteItem);
        //Lägger ut nya article-elementet i todolist
        outputEl.appendChild(newEl);
        }
   
}
}

//Funktion som raderar enskilt element
function deleteItem(e) {
    e.target.remove();
//Variabel som sparar textinnehållet av det raderat element i Web Storage
let itemText = e.target.innerHTML;
//Loopar genom array för att hitta element som ska bort
for (let i=0; i < items.length; i++){
    if(items[i] === itemText){
        //tar bort ett element från arrayen
        items.splice(i, 1);
        break;
    }
}
storeData();
}


//Funktion anropas via clearbuttonEl. Raderar todolist och Web Storage
    function deleteListAndStorage() {
        outputEl.innerHTML="";
        localStorage.clear();
        storeData();
    }


//--------------------------Funktioner till gränssnittet----------------------//

/* Initierings-funktion, sätts igång direkt när sidan laddat klart. */
function init(){
    //Avstängning knapp
    newtodobuttonEl.disabled = true; 
}

//Funktion som kontrollerar antal tecken i input för "newtodo"
function checkText(){
//variabel för att lagra input från användaren
let input = newtodoEl.value;
//Kontroll att det inte är tom textsträng/mindre än 5 tecken
if (input.length < 5){
    messageEl.innerHTML = ("Ange minst 5 tecken.");
    //Om textsträng mindre än 5 tecken så är knappen avstängd
    newtodobuttonEl.disabled = true;
}
else {
    messageEl.innerHTML = "";
    newtodobuttonEl.disabled = false;
}
}

/*Funktion som anropas vid klick av "newtodobutton". 
Modifierar DOM och skriver ut nytt element till "todolist"*/ 
    function createElement(){
    //Lagrar input från användaren
    let input = newtodoEl.value;
    //Kontroll att textsträng är 5 eller fler tecken
    if(input.length >= 5){
    //skapar nytt artikel-element
    let newEl = document.createElement("article");
    //lägger till text-nod
    let newText = document.createTextNode(input);
    //lägg ihop text-nod och element
    newEl.appendChild(newText);
    //Funktion som raderar enskilda poster via musklick
    newEl.addEventListener("click", function(e) { 
    e.target.remove();
    //Sparar data i Web Storage efter radering
    storeData();
    })
    //lägg till i listan
    outputEl.appendChild(newEl);
    //Radera input
    newtodoEl.value=("");
    storeData();
    }
  }

      

