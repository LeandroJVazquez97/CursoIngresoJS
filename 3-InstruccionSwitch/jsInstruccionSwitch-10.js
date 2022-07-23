/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 10 SWITCH
*/

function mostrar()
{
	// SE DECLARA LA VARIABLE PARA LOS DATOS PEDIDOS Y UNA VAR PARA AGRUPAR EL MENSAJE QUE SE VA A MOSTRAR
	let estacion, destino, mensaje;

	// SE PIDEN LOS DATOS POR ID
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	// SE LE ASIGNA UN MENSAJE PREDETERMINADO A LA VAR MENSAJE
	mensaje = "No se viaja";

	// SE CREA UN SWITCH PARA LAS DISTINTAS OPCIONES DEL USUARIO
	// EN CASO DE TENER QUE ENVIAR UN MENSAJE "SE VIAJA", SE LE MODIFICA EL MENSAJE GUARDADO EN LA VARIABLE
	switch(estacion)
	{
		case "Invierno":
			if(destino == "Bariloche")
			{
				mensaje = "Se viaja";
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja";
					break;
			}
			break;
		case "Otoño":
			mensaje = "Se viaja";
			break;
		case "Primavera":
			if(destino != "Bariloche")
			{
				mensaje = "Se viaja";
			}
			break;
	}
	// SE MUESTRA UN ALERT CON EL MENSAJE 
	alert(mensaje);
}//FIN DE LA FUNCIÓN