/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	SIMULACRO PARCIAL 03
*/

function mostrar()
{
	// CREAMOS LAS VARIABLES DE CARGA
	let cargas;
	let marca, color, vendedor, kms;
	let vendedorAutoMasKms, autoMasKms;
	let autosAzulesVendidos;
	let autoRojoMenorKms, marcaAutoRojoMenorKms, banderaAutoRojo;

	// INICIALIZAMOS LA VARIABLE CONTADOR DE AUTOS AZULES VENDIDOS
	autosAzulesVendidos = 0;

	// INICIALIZAMOS LA VARIABLE BANDERA PARA LOS AUTOS ROJOS
	banderaAutoRojo = 0;

	// PREGUNTAMOS EN UN PROMT CUANTAS CARGAS VAMOS A HACER Y PARSEAMOS
	cargas = parseInt(prompt("Ingrese la cantidad de cargas que va hacer:"));

	// EN EL FOR PONEMOS LA CANTIDAD DE CARGAS VAMOS A UTILIZAR Y PEDIMOS LOS DATOS DEL PROGRAMA DENTRO
	for(let i = 1; i <= cargas; i++)
	{
		// PEDIMOS LOS DATOS NESECESACIOS
		marca = prompt("VENTA N°" + i + " || Ingrese marca (Fiat, Ford, Renault)");
		color = prompt("VENTA N°" + i + " || Ingrese color (gris, azul, rojo)");
		vendedor = prompt("VENTA N°" + i + " || Ingrese nombre del vendedor:");
		kms = parseInt(prompt("VENTA N°" + i + " || Ingrese el kilometraje del auto: (10.000 a 100.000))"));		

		// VALIDAMOS QUE EL KILOMETRAJE INGRESADO SEA ENTRE 10.000 Y 100.000
		while(kms < 10000 || kms > 100000)
		{
			kms = parseInt(prompt("VENTA N°" + i + " || Ingrese un kilometraje valido: (10.000 a 100.000))"));
		}

		// USAMOS LA VARIABLE I DEL FOR COMO BANDERA PARA ASIGNAR LOS KILOMETROS Y EL VENDEDOR A LA PRIMER CARGA
		if(i == 1)
        {
            autoMasKms = kms;
            vendedorAutoMasKms = vendedor;
        }
		// COMPARAMOS SI EL ULTIMO AUTO INGRESADO ES MENOR QUE EL AUTO CON MAYOR KMS, LE REEMPLAZAMOS LOS DATOS
        else if(autoMasKms < kms)
        {
			autoMasKms = kms;
            vendedorAutoMasKms = vendedor;
		}

		//	CREAMOS UN SWITCH CON CONDICION COLOR
		switch(color)
		{
			// EN CASO DE SER EL AZUL EL AUTO, SE LE SUMA + 1 AL CONTADOR
			case "azul":
				autosAzulesVendidos = autosAzulesVendidos + 1;
				break;
			// EN CASO DE EL ROJO EL AUTO, SE ASIGNA EL PRIMER KILOMETRAJE A LA VARIABLE BANDERA
			case "rojo":
				if(banderaAutoRojo == 0)
        		{
            		autoRojoMenorKms = kms;
        			marcaAutoRojoMenorKms = marca;

					banderaAutoRojo = 1;
    			}
	        	else if(kms < autoRojoMenorKms)
    	    	{
					autoRojoMenorKms = kms;
        			marcaAutoRojoMenorKms = marca;
				}
				break;
		}
	}

	// MOSTRAMOS EN UN ALERT LOS RESULTADOS
	alert("El nombre del vendedor que vendio el auto con mas kilometraje es " + vendedorAutoMasKms);

	alert("El porcentaje de autos azules vendidos es de " + autosAzulesVendidos + " sobre " + cargas + " autos vendidos.");

	alert("La marca del auto rojo vendido con menor kilometraje es " + marcaAutoRojoMenorKms);
}