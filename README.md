# Labbgrund till Moment 4 i kursen DT084G, Introdktion till programmering i JavaScript
Använd dessa filer som grund till din laboration.

OBS: Uppdatera texten i denna README-fil så att den beskriver din labb, samt inkludera ditt namn och student-id.

Student: Gustav Brodin
Student-id: gueb0900

//Kodat variabler, EventListener och funktioner 

Skapat variabel let input, lagrar input från användaren

Skapat variabel newtodoEl som lagrar text i id "newtodo"

Skapat variabel outputEl för utskrift till id "message"

Skapat variabel newtodobuttonEl för id "newtodobutton".

Kopplat ihop samtliga variabler i JS med HTML genom document.getElementById.

Skapat EventListener ("input", toDoList) för elementet newtodoEl. "input" reagerar på förändring när text från användaren skrivs i "newtodo" och EventListener anropar då funktionen toDoList.

Skapat funktionen toDoList vars uppgift är att modifiera DOM och skriva ut nya artikel element till "todolist".

Skapat if-sats inuti toDoList som kontrollerar ifall input är mindre än 5 bokstäver. Om ja kan ej text skrivas ut.

Skapat funktion createElement som skapar nytt artikel-element med tillhörande text-nod och skriver ut det till "todolist" om input är 5 tecken eller fler. 

Lagt till newtodoEl.value som raderar textsträng från "newtodo" när element skrivits ut.

Skapat funktion deleList som tillåter radering av samtliga article-element via musklick, clearbuttonEl.


//Kodat för Web Storage

Skapat window.onload = loadData; för att ladda data från WebStorage när sidan laddas.

Skapat en init-funktion som stänger av newtodubuttonEl när sidan är inläst.

Skapat function storeData() som sparar data till Web Storage

Deklarerat array ItemsArr i funktionen storeData, lagrar listan i todolist för att kunna spara data

Deklarerat variabel elements i funktionen storeData, lagrar artikel-elementen från todolist

Skapat forloop i funktionen storeData, loopar igenom artikel-elementen i "elements" och lägger till varje element i "itemsArr"

Deklarerat variabel JsonStr i funktionen storeData, konverterar "ItemsArr" till Json-sträng

Lagrar datan i jsonStr i namnet "items" i localStorage.

Skapat function loadData som laddar data från Web Storagee under namnet "items".

Skapat if-sats i funktionen loadData, kontrollerar ifall sparad data finns i Web Storage. Om ja så körs for-loop genom array och skapar nytt artikel-element med text-nod för varje värde i array. Artikel-element med text-nod skrivs ut till todolist.

Deklarerat variabeln items i globalscope som lagrar en array. Används för att lagra data från todolist.

Modifierat funktionen deleteList till deleteListandStorage. Lagt till localStorage.clear för rensning av Web Storage. 