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
