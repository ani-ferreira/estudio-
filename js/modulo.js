
  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("columnas").className = "test";
    } 
  }

  export{myFunction}