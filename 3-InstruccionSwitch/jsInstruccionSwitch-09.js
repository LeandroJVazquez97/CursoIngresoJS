/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 09 SWITCH
*/

function mostrar()
{
	// SE CREA VARIABLES
	let precioBase, precioFinal, estacion, destino;

	// A LA VARIABLE PRECIOBASE SE LE ASIGNA LA BASE DE LA ESTADIA
	precioBase = 15000;

	// SE PIDE LOS DATOS ESTACION Y DESTINO POR ID
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	// SE CREA UN SWICTH QUE SU CONDICION ES LA ESTACION DEL AÑO
	// ENGLOBA LOS DEMAS SWITCH DE DESTINOS
	// SE REALIZA SU RESPECTIVA OPERACION Y SE DEVUELVE EL PRECIO FINAL EN SU RESPECTIVA VARIABLE
	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					precioFinal = precioBase + precioBase * (20/100);
					break;
				case "Cordoba":
				case "Cataratas":
					precioFinal = precioBase - precioBase * (10/100);
					break;
				case "Mar del plata":
					precioFinal = precioBase - precioBase * (20/100);
					break;
			}	
		break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					precioFinal = precioBase - precioBase * (20/100);
					break;
				case "Cordoba":
				case "Cataratas":
					precioFinal = precioBase + precioBase * (10/100);
					break;
				case "Mar del plata":
					precioFinal = precioBase + precioBase * (20/100);
					break;	
			}
		break;
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precioFinal = precioBase + precioBase * (10/100);
					break;
				default:
					precioFinal = precioBase;
					break;
			}	
	}

	// MEDIANTE UN ALERT MOSTRAMOS EL PRECIO FINAL DE LA ESTADIA
	alert("El precio final es de $" + precioFinal);

}//FIN DE LA FUNCIÓN