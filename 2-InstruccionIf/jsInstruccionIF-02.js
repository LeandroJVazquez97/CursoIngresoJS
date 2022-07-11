function mostrar()
{
	// CREAMOS LA VARIABLE PARA LA EDAD
	let edad;

	// TOMAMOS LA EDAD POR ID
	edad = document.getElementById("txtIdEdad").value;

	// PARSEAMOS LA EDAD
	edad = parseInt(edad);

	// MOSTRAMOS UN ALERT, EN CASO DE QUE SEA MAYOR DE EDAD
	if (edad >= 18)
	{
		alert("Usted es mayor de edad");
	}
}//FIN DE LA FUNCIÓN