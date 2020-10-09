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

function goToSpaceTree(){
    window.location = './4-23_tree_website_edit/index.html'
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





// <div onclick="sizePlus()" >
// <p id="p1">Hello World!</p>
// </div>
// <p id="p2">Hello World!</p>


// let X = 56;
// document.getElementById("p2").style.color = "blue";
// document.getElementById("p2").style.fontFamily = "Arial";
//document.getElementById("p2").style.fontSize = `${X}px`;

// function sizePlus(){
//     document.getElementById("p2").style.fontSize = `${X += 10}px`;
//     }