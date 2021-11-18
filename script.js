//finner tilbakeknappen på hver side
let backBtn = document.getElementById("backBtn");

/*
https://www.w3schools.com/js/js_htmldom_eventlistener.asp
Event listener legges til på knappen for å fange når den klikkes. 
Den tar to argumenter, hvilken event som skal legges til og hvilken funksjon som skal kalles når eventen blir fanget opp. 
*/
backBtn.addEventListener("click", goBack);
//Funksjon som kalles når "click" eventen fanges i nettleseren. 
function goBack(){

    /*
    https://developer.mozilla.org/en-US/docs/Web/API/History_API
    Web history API-en i moderne nettlesere gjør det mulig å gå tilbake til den forrige siden man var på, dette er den samme funksjonen som kalles av selve nettleseren når 
    man trykker tilbake knappen. 
    */
    window.history.back();
}

function setUsername(navn){
    if(navn){
        sessionStorage.setItem("Navn", navn);
    }else{
        sessionStorage.setItem("Navn", "DefaultUser");
    }

}
function getUsername(){
    return sessionStorage.getItem("Navn");
}

function loadUsername(){
    let container = document.getElementById("nameSpan");
    container.innerHTML = getUsername();
}
