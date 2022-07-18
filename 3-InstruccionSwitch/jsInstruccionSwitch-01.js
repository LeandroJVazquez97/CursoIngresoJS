/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E 
	EJERCICIO 01 SWITCH
*/

function mostrar()
{
	// VARIABLES
	let mes;
	let mensaje;

	// TOMAMOS EL VALOR DE LA VARIABLE MES
	mes = document.getElementById("txtIdMes").value;

	// LE ASIGNAMOS UN MENSAJE A MENSAJE POR SI NO ES NINGUNA DE LAS OPCIONES PEDIDAS
	mensaje = "Usted no seleciono ninguna opcion posible";

	// USAMOS UN SWICHT PARA ASIGNAR LAS OPCIONES
	switch(mes)
	{
		case "Enero":
			mensaje = "Que comiences bien el año!!!";
			break;
		case "Marzo":
			mensaje = "A clases!!!";
			break;
		case "Julio":
			mensaje = "Se vienen las vacaciones!!!";
			break;
		case "Diciembre":
			mensaje = "Felices fiestas!!!";
			break;		
	}

	// MOSTRAMOS UN ALERT
	alert(mensaje);

}//FIN DE LA FUNCIÓN