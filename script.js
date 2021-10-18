let backBtn = document.getElementById("backBtn");

//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
backBtn.addEventListener("click", goBack);
function goBack(){

    //https://developer.mozilla.org/en-US/docs/Web/API/History_API
    window.history.back();
}

