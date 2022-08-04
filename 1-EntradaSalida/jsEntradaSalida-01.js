/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 03 PARCIAL
	*/

function mostrar()
{
	// SE CREA VARIABLES
	let continuar;
	let nombre, cantidadEntradas, tipoEntrada, tipoSocio;
	let acumuladorPalcosSociosActivo, acumuladorEntradas, acumuladorEntradasNoSocio;
	let porcentajeNoSociosEntradas;
	let recaudacionPlatea, recaudacionPopular, recaudacionPalco;

	// SE INICIALIZA
	recaudacionPlatea = 0;
	recaudacionPopular = 0;
	recaudacionPalco = 0;
	acumuladorPalcosSociosActivo = 0;
	acumuladorEntradas = 0;
	acumuladorEntradasNoSocio = 0;

	// SE CREA DO WHILE PARA CARGAR LOS DATOS
	do
	{
		// SE PIDEN LAS VARIABLES Y SE VALIDAN POR WHILE
		nombre = prompt("Ingrese el nombre del comprador:");
		cantidadEntradas = parseInt(prompt("Ingrese cantidad de entradas (maximo 10):"));

		while(10 < cantidadEntradas)
		{
			cantidadEntradas = parseInt(prompt("Ingrese una cantidad valida de entradas(maximo 10)"));
		}

		tipoEntrada = prompt("Ingrese tipo de entradas");
		tipoSocio = prompt("Ingrese tipo de socio");

		// SE ASIGNA LA RECAUDACION MEDIANTE UN SWITCH
		switch(tipoEntrada)
		{
			case "popular":
				recaudacionPopular = recaudacionPopular + (1000 * cantidadEntradas);
				break;
			case "platea":
				recaudacionPlatea = recaudacionPlatea + (1500 * cantidadEntradas);
				break;
			case "palco":
				if(tipoSocio == "activo")
				{
					acumuladorPalcosSociosActivo = acumuladorPalcosSociosActivo + cantidadEntradas;
				}
				recaudacionPalco = recaudacionPalco + (2000 * cantidadEntradas);
				break;
		}
		// EN CASO DE NO SER SOCIO DE ACUMULA
		if(tipoSocio == "no socio")
		{
			acumuladorEntradasNoSocio = acumuladorEntradasNoSocio + cantidadEntradas;
		}

		acumuladorEntradas = acumuladorEntradas + cantidadEntradas;

		// SI LA RESPUESTA ES SI SE CONTINUA CARGANDO
		continuar = prompt("Desea continuar cargando?");
	}while(continuar == "si")

	// SE SACAR EL PORCENTAJE DE NO SOCIOS POR ENTRADAS
	porcentajeNoSociosEntradas = (acumuladorEntradasNoSocio / acumuladorEntradas) * 100;

	// SE MUESTRAN POR CONSOLA LOS RESULTADOS
	console.log("La cantidad de entradas al palco vendidas a socios activos es de " + acumuladorPalcosSociosActivo);
	console.log("El porcentaje de no socios que van al partido es de " + porcentajeNoSociosEntradas + "%");

	// SE COMPARAR LAS COMPARACIONES Y SE IMPRIME POR CONSOLA EL RESULTADO( NO TUVE TIEMPO PARA HACERLO BIEN PQ ME TENGO QUE IR AL TRABAJO)
	if(recaudacionPopular < recaudacionPlatea && recaudacionPalco < recaudacionPlatea)
	{
		console.log("El tipo de entrada que mas recaudo es platea " + recaudacionPlatea);
	}
	else if(recaudacionPlatea < recaudacionPopular && recaudacionPalco < recaudacionPopular)
	{
		console.log("El tipo de entrada que mas recaudo es popular " + recaudacionPopular);
	}
	else
	{
		console.log("El tipo de entrada que mas recaudo es palco " + recaudacionPalco);
	}	
}