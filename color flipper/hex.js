const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btnEl = document.getElementById("btn");

const colorEl = document.querySelector(".color");

btnEl.addEventListener("click",()=>{
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += hex[randomNumber()];   
    }
    colorEl.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}