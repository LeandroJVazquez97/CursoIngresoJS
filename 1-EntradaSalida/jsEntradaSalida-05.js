/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 05 E/S

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// CREAMOS DOS VARIABLES

	let nombre;
	let edad;

	// TOMAMOS DATOS POR ID
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	// ENVIAMOS LOS DATOS EN UNA CADENA DE TEXTO, MEDIANTE UN ALERT 
	alert("Su nombre es " + nombre + " y su edad es de " + edad + " años" );
}

