var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
// var img = document.getElementById("port1");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");

function modal_img1(){
    modal1.style.display = "block";
};

function modal_img2(){
  modal2.style.display = "block";
};

function modal_img3(){
  modal3.style.display = "block";
};

var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
  modal1.style.display = "none";
};

span2.onclick = function() { 
  modal2.style.display = "none";
};

span3.onclick = function() { 
  modal3.style.display = "none";
};