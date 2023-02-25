const enhance = id => {/*take in an element id*/
    const element = document.getElementById(id), /*use the taken id to select the element*/
        text = element.innerText.split(""); /*take the element's and split into arrays of characters*/
    element.innerText = ""; /*Clear out the existing text*/

    text.forEach(letter => { /* Going thourgh the array*/
        if (letter == "_") {
            const span = document.createElement("span");
            span.className = "hidden";
            /* Create a span with class name "letter" for each character*/



            span.innerText = letter;
            /* Put the letter into the created span*/

            element.appendChild(span); /* Put everything into the original element*/


        } else {

            const span = document.createElement("span");
            span.className = "letter";
            /* Create a span with class name "letter" for each character*/



            span.innerText = letter;
            /* Put the letter into the created span*/

            element.appendChild(span); /* Put everything into the original element*/
        }
    })
}
enhance("message")
function fadeOut(element) {
    var opacity = 1;
    var timer = setInterval(function() {
      if (opacity <= 0.001) {
        clearInterval(timer);
        element.style.display = 'none';
      }
      element.style.opacity = opacity;
      element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
      opacity -= opacity * 0.2;
    }, 25);
  }
  
  window.addEventListener("load", function () {
    setTimeout(function(){
        var loader = document.querySelector(".loader-wrapper");
        fadeOut(loader);
    }, 500);
  });
  