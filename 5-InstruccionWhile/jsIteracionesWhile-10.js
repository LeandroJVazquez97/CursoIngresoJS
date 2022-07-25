/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 10 WHILE
*/

function mostrar()
{
	// DECLARAMOS VARIABLES PARA EL INGRESO DEL NUMERO Y PARA CONTINUAR 
	let respuesta, numeroIngresado
	// DECLARAMOS VARIABLES ACUMULATIVAS
	let sumaPositivos, sumaNegativos, cantidadPositivos, cantidadNegativos, cantidadCeros, cantidadPares;
	// DECLARAMOS VARIABLES PARA CALCULOS
	let promedioPositivos, promedioNegativos, diferencia;

	// INICIALIZAMOS LAS VARIABLES QUE LO REQUIEREN
	sumaPositivos = 0;
	sumaNegativos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadPares = 0;
	cantidadCeros = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;
	diferencia = 0;

	respuesta = "si";

	// CREAMOS UN WHILE PARA VALIDAR SI EL USUARIO QUIERE SEGUIR INGRESANDO NUMEROS
	while(respuesta == "si")
	{
		// SE PIDE UN NUMERO Y SE PARSEA EN LA MISMA LINEA
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		
		// SI EL NUMERO ES POSITIVO SE ACUMULAN EN SUS RESPECTIVAS VARIABLES
		if(0 < numeroIngresado)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;

			cantidadPositivos = cantidadPositivos + 1;
		}

		// SI EL NUMERO ES NEGATIVO SE ACUMULAN EN SUS RESPECTIVAS VARIABLES
		else if(numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado;

			cantidadNegativos = cantidadNegativos + 1;
		}
		
		// POR MEDIO DE UN ELSE SE ACUMULA EN CANTIDAD DE CEROS
		else
		{
			cantidadCeros = cantidadCeros + 1;
		}

		// SI EL RESTO DE NUMERO INGRESADO / 2 DA 0, SE DA POR ECHO QUE ES UN NUMERO PAR
		if(numeroIngresado % 2 == 0 && numeroIngresado != 0)
		{
			cantidadPares = cantidadPares + 1;
		}

		// SE PREGUNTA AL USUARIO SI QUIERE SEGUIR INGRESANDO NUMEROS
		respuesta=prompt("desea continuar?");
	}//fin del while

	// SE REALIZAN LAS OPERACIONES CORRESPONDIENTE PARA LOS PROMEDIOS Y LAS DIFERENCIAS
	promedioPositivos = sumaPositivos / cantidadPositivos;
	promedioNegativos = sumaNegativos / cantidadNegativos;
	diferencia = sumaPositivos - sumaNegativos;

	// MEDIANTE DOCUMENT WRITE SE MUESTRAN LOS RESULTADOS DE LOS DATOS INGRESADOS
	document.write("La suma de positivos es: " + sumaPositivos);
	document.write("<br> La suma de negativos es: " + sumaNegativos);
	document.write("<br> La cantidad de positivos es: " + cantidadPositivos);
	document.write("<br> La cantidad de negativos es: "+ cantidadNegativos);
	document.write("<br> La cantidad de ceros es: " + cantidadCeros);
	document.write("<br> La cantidad de numero pares es: " + cantidadPares);
	document.write("<br> El promedio de todos los numeros positivos es: " + promedioPositivos);
	document.write("<br> El promedio de todos los numeros negativos es: " + promedioNegativos);
	document.write("<br> La diferencia entre los numeros positivos y los negativos es: " + diferencia);
}//FIN DE LA FUNCIÓN