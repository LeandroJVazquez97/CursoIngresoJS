/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 06 SWITCH
*/

function mostrar()
{
	// CREAMOS LA VARIABLE PARA HORA
	let hora;

	// PEDIMOS LA HORA POR ID
	hora = document.getElementById("txtIdHora").value;

	// PARSEAMOS LA HORA PQ ES UN NUMERO
	hora = parseInt(hora);

	// EN CASO DE ESTAR DENTRO DE LAS 24HS DEL DIA, LE PONEMOS SI ES DE DIA NOCHE O TARDE
	// EN CASO DE QUE LA HORA SEA UN HORARIO INVALIDO USAMOS UN DEFAULT
	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde.");
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 00:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert("Es de noche.");
			break;
		default:
			alert("La hora no existe.");
			break;	
	}
}//FIN DE LA FUNCIÓN