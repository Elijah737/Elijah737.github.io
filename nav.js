var navCont = document.getElementById("navCont");
var navContainer = document.getElementById("navContainer");

// navCont.addEventListener("click", myFunc);
navContainer.addEventListener("mouseover", navGrow);
navContainer.addEventListener("mouseout", navShrink);

function navGrow(){
  navContainer.style.height = "40px";
  navCont.style.display = "flex"
};

function navShrink(){
  navContainer.style.height = "10px";
  navCont.style.display = "none";
};
