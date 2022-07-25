/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 06 SWITCH
*/

function mostrar()
{
	// CREAMOS LAS VARIABLES CONTADOR ACUMULADOR Y NUMERO INGRESADO POR EL USUARIO
	let contador, acumulador, numeroIngresado;

	// INICIALIZAMOS LA VARIABLES NECESARIAS PARA EL WHILE
	contador = 0;

	acumulador = 0;

	// MEDIANTE EL WHILE PEDIMOS 5 VALORES
	while(contador < 5)
	{	
		// LE PEDIMOS QUE INGRESE UN NUMERO
		numeroIngresado = prompt("Ingrese un numero:");

		// PARSEAMOS EL NUMERO INGRESADO
		numeroIngresado = parseInt(numeroIngresado);

		// EL NUMERO INGRESADO SE LO SUMAMOS A LA VARIABLE ACUMULADOR
		acumulador = acumulador + numeroIngresado

		// AL CONTADOR LE AGREGAMOS + 1 PARA CONTAR LOS VALORES PEDIDOS
		contador = contador + 1;
	}

	// EN EL ID TOTAL PONEMOS EL VALOR ACUMULADO DE LOS 5 NUMEROS INGRESADOS
	document.getElementById("txtIdSuma").value = acumulador;

	// EN EL ID PROMEDIO PONEMOS EL VALOR PROMEDIO DE LOS 5 NUMEROS INGRESADOS 
	document.getElementById("txtIdPromedio").value = acumulador / 5;
}//FIN DE LA FUNCIÓN