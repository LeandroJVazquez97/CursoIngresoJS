/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 07 SWITCH
*/

function mostrar()
{
	// SE CREA UNA VARIBALE PARA EL DESTINO
	let destino;

	// SE TOMA EL DESTINO POR ID
	destino = document.getElementById("txtIdDestino").value;

	// SE CREA UN SWICHT Y UNA VEZ COLOCADO EL DESTINO SE ENVIA UN ALERT INDICANDO EN QUE PARTE DEL PAIS QUEDA
	switch(destino)
	{
		case "Bariloche":
			alert("Queda al Oeste del pais.")
			break;
		case "Cataratas":
			alert("Queda al Norte del pais.")
			break;
		case "Mar del plata":
			alert("Queda al Sur de Buenos Aires.")
			break;
		case "Ushuaia":
			alert("Queda al Sur del pais.")
			break;
	}
}//FIN DE LA FUNCIÓN