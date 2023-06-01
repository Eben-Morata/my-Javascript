const colors = ["RED","YELLOW","GREEN","BLUE","BLACK","GRAY","ORANGERED"];

const colorEl = document.querySelector(".color")
  
const btnEl = document.getElementById("btn");
btnEl.addEventListener("click",()=>{
    const randomNum = colorRandom();

    document.body.style.background = colors[randomNum];
    colorEl.textContent = colors[randomNum]
});

function colorRandom() {
  return Math.floor(Math.random() * colors.length)
}