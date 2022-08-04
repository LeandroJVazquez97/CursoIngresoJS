/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	PARCIAL EJERCICIO 02
*/

function mostrar()
{
	// CREAMOS LAS VARIABLES PARA CONTINUAR
	let continuar;
	// CREAMOS LAS VARIABLES PARA PEDIR DATOS Y VARIABLES ACUMULADORAS
	let tipo, precio, marca, material;
	let acumuladorPrecio, acumuladorProductos, promedioPrecio;
	let marcaPantalonMasCaro, materialPantalonMasCaro, precioPantalonMasCaro, acumuladorPantalon, acumuladorRemera, acumuladorBotines;

	// INICIALIZAMOS LOS ACUMULADORES
	acumuladorPrecio = 0;
	acumuladorProductos = 0;
	acumuladorPantalon = 0;
	acumuladorRemera = 0;
	acumuladorBotines = 0;
	
	// ENTRAMOS EN UN DO WHILE HASTA QUE EL USUARIO DIGA QUE NO QUIERE CONTINUAR CARGANDO PRODUCTOS
	do
	{
		// PEDIMOS LOS DATOS
		tipo = prompt("Ingrese el tipo de indumentaria:");
		precio = parseInt(prompt("Ingrese el precio:"));
		// VALIDAMOS EL PRECIO MEDIANTE UN WHILE
		while(precio < 1000 || 10000 < precio)
		{
			precio = parseInt(prompt("Ingrese un precio valido (entre 1.000 y 10.000):"));
		}

		marca = prompt("Ingrese la marca:");
		material = prompt("Ingrese el material:");

		// ACUMULAMOS EL PRECIO
		acumuladorPrecio = acumuladorPrecio + precio;
		// ACUMULAMOS LOS PRODUCTOS
		acumuladorProductos = acumuladorProductos + 1;
		
		// MEDIANTE UN SWITCH ACUMULAMOS LOS TIPO DE ROPA
		switch(tipo)
		{
			case "pantalon":
				acumuladorPantalon = acumuladorPantalon + 1;
				// CREAMOS LA BANDERA PARA EL PANTALN MAS CARO
				if(acumuladorPantalon == 1)
				{
					marcaPantalonMasCaro = marca;
					materialPantalonMasCaro = material
					precioPantalonMasCaro = precio;
				}
				// COMPARAMS EL PANTALON MAS CARO
				else if(precioPantalonMasCaro < precio && acumuladorProductos != 1)
				{
					marcaPantalonMasCaro = marca;
					materialPantalonMasCaro = material
					precioPantalonMasCaro = precio;
				}
			break;
			case "remera":
				acumuladorRemera = acumuladorRemera + 1;
			break;
			case "botines":
				acumuladorBotines = acumuladorBotines + 1;
			break;
		}
		// SI CONTINUAR ES "si" SE VUELVE A CARGAR MAS PRODUCTOS
		continuar = prompt("Desea seguir cargando ejercicios?");
	}while(continuar == "si")

	// SE CALCULA EL PROMEDIO 
	promedioPrecio = acumuladorPrecio / acumuladorProductos;

	// SE MUESTRAN POR CONSOLA LOS DATOS PEDIDOS
	console.log("El promedio de precios de todos los productos ingresados es de " + promedioPrecio);
	console.log("La marca del pantalon mas caro es " + marcaPantalonMasCaro + " y el material es " + materialPantalonMasCaro);

	// MEDIANTE UN IF COMPARAMOS QUE PRODUCTOS SON LOS MAS CARGADOS
	if(acumuladorRemera < acumuladorPantalon && acumuladorBotines < acumuladorPantalon)
	{
		console.log("El producto mas ingresado es pantalon");
	}
	else if(acumuladorPantalon < acumuladorRemera && acumuladorBotines < acumuladorRemera)
	{
		console.log("El producto mas ingresado es remera");
	}
	else
	{
		console.log("El producto mas ingresado es botines");
	}
}