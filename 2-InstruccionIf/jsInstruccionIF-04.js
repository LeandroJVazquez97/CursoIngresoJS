function mostrar()
{
	// CREAMOS LA VARIABLE PARA LA EDAD
	let edad;

	// TOMAMOS LA EDAD POR ID
	edad = document.getElementById("txtIdEdad").value;

	// PARSEAMOS LA EDAD
	edad = parseInt(edad);

	// SE CREA UN IF CON DOS CONDICIONES, QUE SON VERDADERAS SOLO SI AMBAS SE CUMPLEN
	if(edad <= 17 && edad >= 13)
	{
		alert("Usted es adolescente");
	}

}//FIN DE LA FUNCIÓN