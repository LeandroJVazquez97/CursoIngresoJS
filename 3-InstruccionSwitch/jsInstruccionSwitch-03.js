/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 03 SWITCH
*/

function mostrar()
{
	// CREAMOS VARIABLE MES
	let mes;

	// PEDIMOS EL MES POR ID
	mes = document.getElementById("txtIdMes").value;

	// CREAMOS UN SWICTH EN CASO DE SER FEBRERO MOSTRAR UN MENSAJE, Y UN DEFAULT PARA LOS DEMAS MESES
	switch(mes)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias.");
			break;
		default:
			alert("Este mes tiene 30 o mas dias");
			break;		
	}
}//FIN DE LA FUNCIÓN