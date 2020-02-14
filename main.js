var nombre= "carlos vidal";
var div_nombre = document.getElementById('nombre');
var div_nombre_comp = document.getElementById('nombre_completo');

//Interpolacion de expresiones JS6
div_nombre.innerHTML = `mi nombre es ${nombre}`;

//Recorrido de un arreglo simple por medio de llamado a un callback usando funciones flecha
var arreglo = ['Carlos','Obdulio','Vidal','Alape'];
div_nombre_comp.innerHTML = "Mi nombre completo es ";
arreglo.forEach((elemento)=>{
    div_nombre_comp.innerHTML += `${elemento} `;
});

var obj_persona = new Persona;
obj_persona.mostrarNombreCompleto();
