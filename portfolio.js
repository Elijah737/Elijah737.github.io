var modal = document.getElementById("myModal");
// var img = document.getElementById("port1");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");

function modal_img(){
    modal.style.display = "block";
    // modalImg.src = this.src;
    // captionText.innerHTML = this.alt;
  };

  var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}