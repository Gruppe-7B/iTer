
//https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
function search(tagNavn) {
    let input = document.getElementById('myInput').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName(tagNavn);

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";
        }
    }
}
