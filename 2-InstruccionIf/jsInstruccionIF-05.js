function mostrar()
{
	// CREAMOS LA VARIABLE PARA LA EDAD
	let edad;

	// TOMAMOS LA EDAD POR ID
	edad = document.getElementById("txtIdEdad").value;

	// PARSEAMOS LA EDAD
	edad = parseInt(edad);

	// SE CREA UN IF CON DOS CONDICIONES, QUE SON VERDADERAS SOLO SI UNA CONDICION SE CUMPLE2
	if(edad < 13 || edad > 17)
	{
		alert("Usted no es adolescente");
	}

}//FIN DE LA FUNCIÓN