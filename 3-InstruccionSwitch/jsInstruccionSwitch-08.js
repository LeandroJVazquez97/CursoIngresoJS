/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 08 SWITCH
*/

function mostrar()
{
	// SE CREA LA VARIABLE PARA DESTINO
	let destino;
	
	// SE TOMA EL DESTINO POR ID
	destino = document.getElementById("txtIdDestino").value;

	// SE CREA UN SWITCH DONDE SE AGRUPAN LAS OPCIONES DONDE HACE FRIO Y SE ENVIA UN ALERT
	switch(destino)
	{
		case "Bariloche":
		case "Mar del plata":
		case "Ushuaia":
			alert("En este destino hace frio!!");
			break;
		case "Cataratas":
			alert("En este destino hace calor!!");
			break;	
	}
}//FIN DE LA FUNCIÓN