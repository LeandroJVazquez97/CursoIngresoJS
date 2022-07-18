/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E 
	EJERCICIO 02 SWITCH
*/

function mostrar()
{
	// VARIABLES
	let mes, mensaje;

	// TOMAMOS EL VALOR DE LA VARIABLE MES
	mes = document.getElementById("txtIdMes").value;

	// USAMOS UN SWICHT PARA ASIGNAR LAS OPCIONES
	switch(mes)
	{
		case "Enero":
		case "Febrero":	
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno.";
			break;
		case "Julio":		
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":	
		case "Diciembre":
			mensaje = "Ya pasamos el frio.";
			break;	
	}

	// MOSTRAMOS EL MENSAJE MEDIANTE UN ALERT
	alert(mensaje);

}//FIN DE LA FUNCIÓN