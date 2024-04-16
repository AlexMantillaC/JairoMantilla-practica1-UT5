'use strict';
function verAsignaturas(...alumnos)
{
    if (alumnos.length===0) {
        console.log("No hay datos para mostar.");
    }else{
        alumnos.forEach(alumno => {
            let [nombre,curso,...asignaturas]=alumno;
            console.log(nombre,"-",curso,"-","Asignaturas: ",asignaturas.join("/"));
        });    
    } 
}
console.log("Primer llamada");
verAsignaturas(["Sara", "DAMA", "Programación", "ED"],["Martín", "DAMB", "Programación", "LM", "ED", "BBDD", "FOL", "SI"],["Emma", "ASIR","ISO","BBD"]);
console.log("Segunda llamada");
verAsignaturas(["Álvaro","Semi","BBDD"]);
console.log("Tercera llamada");
verAsignaturas();