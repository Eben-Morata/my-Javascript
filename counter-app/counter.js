const countEl = document.querySelector(".count");

const btnEls = document.querySelectorAll(".btn");

let count = 0;

btnEls.forEach((btns)=>{
  btns.addEventListener("click",(event)=>{
     const stlying = event.currentTarget.classList;
     if (stlying.contains("increase")) {
       count++;
     }else if (stlying.contains("decrease")) {
      count--;
     }else{
       count = 0;
     }
     //coloring count
     if (count > 0) {
       countEl.style.color = "green"
     } else if (count < 0) {
      countEl.style.color = "red"
     }else{
      countEl.style.color = "blue"
     }
     countEl.innerText = count;
  });
});