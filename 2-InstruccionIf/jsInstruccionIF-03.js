function mostrar()
{
	// CREAMOS LA VARIABLE PARA LA EDAD
	let edad;

	// TOMAMOS LA EDAD POR ID
	edad = document.getElementById("txtIdEdad").value;

	// PARSEAMOS LA EDAD
	edad = parseInt(edad);

	// SE CREA UN IF, CON LA CONDICION DE MOSTRAR UN ALERT SI ES MAYOR DE EDAD
	if(edad >= 18)
	{
		alert("Usted es mayor de edad");
	}

	// EN CASO DE NO SER MAYOR DE EDAD, SE MUESTRA UN ALERT
	else
	{
		alert("Usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN