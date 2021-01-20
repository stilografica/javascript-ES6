/*Exercici 9: Aquest exercici tracta de crear un cercador. Donada una llista de noms, a l'introduir un nom al cercador només s'han de mostrar aquells que coincideixin.
Seria desitjable que vagi filtrant conforme es va omplint el nom. També tenir en compte maquetar la solució final perquè tingui bon aspecte.*/

"use strict";
//When click on star, show the search form
document.getElementById("start").addEventListener("click", () => {
document.getElementsByClassName("app") [0].style.display="none";
document.getElementsByClassName("app") [1].style.display="block";
});

//Search function
const filterNames = () => {
    let search = document.getElementById("myInput").value; //Recojo el input
    search = search.toUpperCase(); //Valor del input a mayúsculas
    let lista = document.getElementsByTagName("a"); //Recojo todas las <a> en un array
    //Recorro el array "lista"
    for(const iterator of lista) {
        let validate = iterator.innerText; //Recojo el texto de la <a> que estoy iterando
        validate = validate.toUpperCase(); //Valor a mayúsculas
        if(validate.indexOf(search) >=0) { 
            iterator.style.display = "block"; //Si la posición del valor del usuario existe (mayor que 0), muestra la palabra
        }else {
            iterator.style.display = "none";
        }
    }
}

