let button = document.createElement("button");
button.innerHTML = `<h1>Privet</h1>`
button.addEventListener("click", function(){
    let request = new XMLHttpRequest();
    request.open("GET", 'http://127.0.0.1:3000', false);
    request.send();
    let A = document.createElement("p")
    A.innerText = request.responseText
    this.appendChild(A)
})
let page = document.getElementById("app");
page.appendChild(button)