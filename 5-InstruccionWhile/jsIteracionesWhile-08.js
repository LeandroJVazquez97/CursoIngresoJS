/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E 
	EJERCICIO 08 WHILE
*/

function mostrar()
{
	let contador, acumuladorPositivo, acumuladorNegativo, respuesta;
	
	// SE INICIALIZA LAS VARIABLES
	contador = 0;
	acumuladorPositivo = 0;
	acumuladorNegativo = 1;
	respuesta = "si"
	
	// VALIDAMOS QUE RESPUESTA SEA SI PARA PODER SEGUIR INGRESANDO DATOS
	while(respuesta == "si")
	{
		// SE PIDE UN NUMERO Y SE PARSEA EN LA MISMA LINEA
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		
		// SI NUMERO INGRESADO ES POSITIVO, SE GUARDA EN LA VARIABLE ACUMULADOR POSITIVO Y SE SUMA
		if(0 <= numeroIngresado)
		{
			acumuladorPositivo = acumuladorPositivo + numeroIngresado;
		}

		// EN CASO DE NO SER POSITIVO, SE GUARDA EN LA VARIABLE ACUMULADOR NEGATIVO Y SE MULTIPLICA
		else
		{
			acumuladorNegativo = acumuladorNegativo * numeroIngresado;
		}

		// SE PREGUNTA AL USUARIO SI QUIERE SEGUIR INGRESANDO DATOS
		respuesta = prompt("Quiere seguir ingresando datos? si / no");
	}

	// SE MUESTRA LA SUMA DE LOS NUMEROS Y EL PROMEDIO POR ID
	document.getElementById("txtIdSuma").value = acumuladorPositivo;
	document.getElementById("txtIdProducto").value = acumuladorNegativo;

}//FIN DE LA FUNCIÓN