console.log("YOLO");

var navCont = document.getElementById("navCont");
// var itemBody = document.getElementById("itemBody");

navCont.addEventListener("click", myFunc)

function myFunc(){
    // element.style.backgroundColor = "blue"
    navCont.classList.toggle("green");
    navCont.style.width = "100%"
};

function goToQuizzApp(){
    window.location = 'https://github.com/MorganShaw/Quiz-Zapp'
};

function goToPortfolio(){
    window.location = 'portfolio.html'
};

// var element = document.getElementById("navCont");
//     element.classList.toggle("itemBody");


// document.getElementById(id).style.property = new style


// document.getElementById("demo").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";


// document.getElementById("demo").onclick = function() {myFunction()};

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }