'use strict';
function BuscarPersonas(original,abuscar)
{   
    console.log("Personas: ",original.join("/"));  
    console.log("Array donde buscar: ",abuscar.join("/"));  

    let aciertos=0; 
    for (let i = 0; i < original.length; i++) {
        for (let j = 0; j < abuscar.length; j++) {
            if (original[i]==abuscar[j]) {
                aciertos+=1;
            }
        }
    }
    if (aciertos == original.length) {
        console.log("Todos estan incluidos.");
    }else if(aciertos>=1 && aciertos<original.length){
        console.log("Alguno esta incluido.");
    } else {
        console.log("Ninguno esta incluido.");
    }
}
console.log("Primer llamada");
BuscarPersonas(["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera","Isaac Talavera Luna"],
["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera","Isaac Talavera Luna"]);
console.log("Segunda llamada");
BuscarPersonas(["Lina Armida Machado Iglesias","Apolonia Santiago Buendía","Poncio Cobo Herrera","Rafaela Seco Cañas","Fulgencio Alarcón Lloret"],
["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera","Isaac Talavera Luna"]);
console.log("Tercera llamada");
BuscarPersonas(["Elisabet Ricart Monreal","Poncio Cobo Herrera","Isaac Talavera Luna"],
["Elisabet Ricart Monreal","María Del Carmen Sedano-Rocamora","Roldán Alvarado","Leocadio de Pera","Isaac Talavera Luna"]);