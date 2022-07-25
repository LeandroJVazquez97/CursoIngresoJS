/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 09 SWITCH
*/

function mostrar()
{	// declarar variables
	let numeroIngresado, minimo, maximo, respuesta, contador;
	
	// SE INICIALIZA LAS VARIABLES
	contador = 0;
	maximo = 0;
	minimo = 0;
	respuesta = "si"
	
	// VALIDAMOS QUE RESPUESTA SEA SI PARA PODER SEGUIR INGRESANDO DATOS
	while(respuesta == "si")
	{
		// SE PIDE UN NUMERO Y SE PARSEA EN LA MISMA LINEA
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		
		// SE UTILIZA UN IF PARA ASIGNAR EL PRIMER VALOR INGRESADO A LAS VARIABLES MINIMO Y MAXIMO
		if(contador == 0)
		{
			minimo = numeroIngresado;
			maximo = numeroIngresado;

			contador = contador + 1;
		}

		// SI NUMERO INGRESADO ES MAYOR AL MAXIMO GUARDADO, SE ASIGNA EL VALOR A LA VAR MAXIMO
		if(maximo < numeroIngresado)
		{
			maximo = numeroIngresado;
		}

		// SI NUMERO INGRESADO ES MENOR AL MINIMO GUARDADO, SE ASIGNA EL VALOR A LA VAR MINIMO
		else if(minimo > numeroIngresado)
		{
			minimo = numeroIngresado;
		}

		// SE PREGUNTA AL USUARIO SI QUIERE SEGUIR INGRESANDO DATOS
		respuesta = prompt("Quiere seguir ingresando datos? si / no");
	}

	// SE MUESTRA LA SUMA DE LOS NUMEROS MAXIMO Y MINIMO POR ID
	document.getElementById("txtIdMinimo").value = minimo;
	document.getElementById("txtIdMaximo").value = maximo;
}//FIN DE LA FUNCIÓN