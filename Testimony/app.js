//local review data

const reviews = [
    {
        id:1,
        name:"Ebenezer Williams",
        job: "Front End Developer",
        img: ("./images/Black_weave_hairstyle_25.jpg"),
        text:"Lorem ipsum dolor sit,Non id cupiditate nisi excepturi hic,animi aperiam blanditiis maxime ab culpa!"
    },
    {
        id:2,
        name:"Samuel Williams",
        job: "Web Developer",
        img: ("./images/Black_weave_hairstyle_26.jpg"),
        text:"Lorem ipsum amet consectetur adipisicing elit.Non id cupiditate nisi excepturi hic,animi aperiam blanditiis maxime ab culpa!"
    }
    ,
    {
        id:3,
        name:"Eben Morata",
        job: "Javascript Developer",
        img: ("./images/Black_weave_hairstyle_27.jpg"),
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Non id cupiditate nisi excepturi hic,animi aperiam blanditiis maxime ab culpa!"
    },
    {
        id:4,
        name:"Sherrif Williams",
        job: "React Developer",
        img: ("./images/Black_weave_hairstyle_28.jpg"),
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Non id cupiditate nisi excepturi hic,animi aperiam blanditiis maxime ab culpa!"
    }
];

const  nameEl = document.getElementById("name");
const  imgEl = document.getElementById("personal-img");
const  jobEl = document.getElementById("job");
const  contentEl = document.getElementById("text");

const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const surpriseEl = document.querySelector(".random-btn");

let counterValue = 0;

window.addEventListener("DOMContentLoaded",()=>{
   showReviews(counterValue);
});
function showReviews(workers) {
    const workersItems = reviews[workers];
    imgEl.src = workersItems.img;
    nameEl.innerText = workersItems.name;
    jobEl.innerText = workersItems.job;
    contentEl.innerText = workersItems.text
};
nextEl.addEventListener("click",()=>{
    counterValue++;
    if (counterValue > reviews.length - 1) {
        counterValue = 0;
    }
    showReviews(counterValue);
});
prevEl.addEventListener("click",()=>{
    counterValue--;
    if (counterValue < 0) {
        counterValue = reviews.length - 1;
    }
    showReviews(counterValue)
});
surpriseEl.addEventListener("click",()=>{
    const surprise = Math.floor(Math.random() * reviews.length);
    showReviews(surprise)
})


