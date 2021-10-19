
//https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
/*
Vi trengte en søkefunksjon på nettsiden for å kunne filtrere deltakere. Koden er tatt fra kilden over og skreddersydd så den kan brukes mer generisk istedenfor å måtte legge til
en ny funksjon for hvert søk basert på tag. Funksjonen tar inn ett navn på en html class og søker gjennom alle elementene på samme side med den taggen. Søk i javascript er ikke
den mest effektive måten å gjøre søk på men siden vi ikke har tilgang på en database i denne oppgaven er det en løsning som fungerer
*/

function search(tagNavn) {
    //input feltet man søker i må ha IDen 'myInput'
    let input = document.getElementById('myInput').value
    //inputten fra input feltet blir gjort til lowercase for å unngå at man for eksempel søker med stor bokstav og at søket ikke vises.
    input=input.toLowerCase();
    /*
    Elementene man vil søke gjennom blir lagret i variabelet x og vi bruker document.getElementsByClassName() (https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
    Denne returnerer HTMLCollections (https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) som er et array med generiske varaiabler.
    */
    let x = document.getElementsByClassName(tagNavn);

    for (i = 0; i < x.length; i++) {
        //Her sjekker funksjonen gjennom hvert element i x arrayet og ser om det inkluderer inputen fra input feltet.
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            //Hvis elementet ikke inneholder bokstaver fra input  feltet blir det skjult gjennom CSS style.display
            x[i].style.display="none";
        }
        else {
            //Hvis elementet inneholder bokstaver fra input blir det vist som et block element
            x[i].style.display="block";
        }
    }
}
