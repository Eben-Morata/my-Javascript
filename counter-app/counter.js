 const countEl = document.querySelector(".count");

 const btnEls = document.querySelectorAll(".btn");
 let count = 0;

 btnEls.forEach((btns)=>{
     btns.addEventListener("click",(event)=>{
        const stlying = event.currentTarget.classList;

        if (stlying.contains("decrease")) {
          count--;
        }else if (stlying.contains("increase")) {
          count++;
        }else{
          count = 0;
        };

        if (count > 0) {
          countEl.style.color = "green"
        }
         if (count < 0) {
          countEl.style.color = "red"
        }if (count === 0) {
          countEl.style.color = "blue"
        }
        countEl.textContent = count;
     })
 })