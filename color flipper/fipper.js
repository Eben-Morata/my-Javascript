const colors =["green","red","yellow","rgba(133,122,200)","#f15025","#F1f4f8"];

const btnEl = document.getElementById("btn");

const colorEl = document.querySelector(".color");

btnEl.addEventListener("click",()=>{
    const randomNum = randomNumber();
    document.body.style.backgroundColor = colors[randomNum];
    colorEl.innerText = colors[randomNum];
});

function randomNumber() {
    return Math.floor(Math.random() * colors.length);
}