/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 07 WHILE
*/

function mostrar()
{
	// SE CREA LAS VARIABLES
	let contador, acumulador, respuesta, promedio;
	
	// SE INICIALIZA LAS VARIABLES
	contador = 0;
	acumulador = 0;
	respuesta = "si"
	
	// VALIDAMOS QUE RESPUESTA SEA SI PARA PODER SEGUIR INGRESANDO DATOS
	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		
		acumulador = acumulador + numeroIngresado;

		contador = contador + 1;

		// MODIFICO VARIABLE DE CONTROL
		respuesta = prompt("Quiere seguir ingresando datos? si / no");
	}

	// SE CALCULA EL PROMEDIO DE LOS DATOS INGRESADOS
	promedio = acumulador / contador;

	// SE MUESTRA LA SUMA DE LOS NUMEROS Y EL PROMEDIO POR ID
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN