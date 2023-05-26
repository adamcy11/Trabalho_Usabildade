document.addEventListener("DOMContentLoaded", function() {
    var relativeDivs = document.querySelectorAll(".relative");
    relativeDivs.forEach(function(div) {
      div.addEventListener("mouseover", function() {
        this.querySelector(".absolute").style.display = "block";
      });
      div.addEventListener("mouseout", function() {
        this.querySelector(".absolute").style.display = "none";
      });
    });
  });
  
