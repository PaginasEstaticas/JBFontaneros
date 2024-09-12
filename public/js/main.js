(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    function LoadMobileMenu() {
      var elems = document.querySelectorAll(".sidenav");
      var options = {
        edge: "right",
        draggable: true
      };
      var instances = M.Sidenav.init(elems, options);
    }
    LoadMobileMenu();
    function LoadMainSlider() {
      var elems = document.querySelectorAll(".slider");
      var options = {
        indicators: false,
        height: 360
      };
      var instances = M.Slider.init(elems, options);
    }
    LoadMainSlider();
  });
  console.log("probando 123");
})();
