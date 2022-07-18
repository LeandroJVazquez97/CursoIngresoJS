/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 05 SWITCH 
*/

function mostrar()
{
	// DECLARAMOS UNA VARIABLE HORA
	let hora;

	// PEDIMOS LA HORA POR ID
	hora = document.getElementById("txtIdHora").value;

	// PARSEAMOS LA HORA PARA QUE EL SWITCH TOME COMO NUMERO
	hora = parseInt(hora);

	// SI LA HORA ES ENTRE LAS 7 Y LAS 11 ENVIAMOS EL ALERT
	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
		break;
	}
}//FIN DE LA FUNCIÓN