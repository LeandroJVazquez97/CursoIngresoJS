function mostrar()
{
	// CREAMOS LA VARIABLE PARA LA EDAD
	let edad;

	// TOMAMOS LA EDAD POR ID
	edad = document.getElementById("txtIdEdad").value;

	// PARSEAMOS LA EDAD
	edad = parseInt(edad);

	// MOSTRAMOS UN ALERT, EN CASO DE QUE TENGA 15 DE EDAD
	if (edad == 15)
	{
		alert("Niña bonita");
	}
}//FIN DE LA FUNCIÓN