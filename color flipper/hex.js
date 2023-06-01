const hex = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];

const colorEl = document.querySelector(".color");

const btnEl = document.getElementById("btn");
btnEl.addEventListener("click",()=>{
    let hexCode = "#";
    for (let index = 0; index < 6; index++) {
        hexCode += hex[randomColor()];
        
    }
    document.body.style.background = hexCode;
    colorEl.textContent = hexCode;
});

function randomColor() {
    return Math.floor(Math.random() * hex.length)
}
