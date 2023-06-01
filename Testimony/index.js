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

const imgEl = document.getElementById("personal-img");
const nameEl = document.getElementById("name");
const jobEl = document.getElementById("job");
const textEl = document.getElementById("text");

let countValue = 0;

const nextEl = document.querySelector(".next");


const prevEl = document.querySelector(".prev");


window.addEventListener("DOMContentLoaded",()=>{
    showPersons(countValue);
})
function showPersons(person) {
    const randomPersons = reviews[person];
    imgEl.src = randomPersons.img;
    nameEl.textContent = randomPersons.name;
    jobEl.textContent = randomPersons.job;
    textEl.textContent = randomPersons.text;
};
nextEl.addEventListener("click",()=>{
    countValue++;
    if (countValue > reviews.length - 1) {
        countValue = 0;
    }
    showPersons(countValue);
});
prevEl.addEventListener("click",()=>{
    countValue--;
    if (countValue < 0) {
        countValue = reviews.length - 1;
    }
    showPersons(countValue);
});
 const reviewAllEl = document.querySelector(".random-btn");
 reviewAllEl.addEventListener("click",()=>{
     const suprise = Math.floor(Math.random() * reviews.length);
     showPersons(suprise);
 })