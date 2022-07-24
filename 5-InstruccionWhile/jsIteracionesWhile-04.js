/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 04 WHILE
*/

function mostrar()
{
	// SE DECLARA LA VARIABLE PARA INGRESAR UN NUMERO
	let numeroIngresado;

	// SE PIDE MEDIANTE UN PROMPT AL USUARIO QUE INGRESE UN NUMERO DEL 0 AL 9
	numeroIngresado = prompt("Ingrese un numero del 0 al 9");

	// SE PARSEA EL NUMERO INGRESADO
	numeroIngresado = parseInt(numeroIngresado);

	// SI EL NUMERO INGRESADO NO ENTRA EN EL RANGO DE 0 A 9, SE INGRESA AL WHILE PARA QUE INTENTE NUEVAMENTE
	while(0 > numeroIngresado || numeroIngresado > 9)
	{
		// MEDIANTE OTRO PROMPT SE LE PIDE AL USUARIO QUE INGRESE NUEVAMENTE EL NUMERO
		numeroIngresado = prompt("El numero ingresado es invalido, intente nuevamente:");
	}

	// SI EL NUMERO INGRESADO ESTA EN EL RANGO PEDIDO SE VALIDA EL NUMERO POR UN ID
	document.getElementById("txtIdNumero").value = "El numero " + numeroIngresado + " es valido";
	
}//FIN DE LA FUNCIÓN