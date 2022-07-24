/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 03 WHILE
*/
function mostrar()
{
	// CREAMOS UNA VARIABLE PARA LA CLAVE A INGRESAR
	let claveIngresada;

	// PEDIMOS LA CLAVE POR MEDIO DE UN PROMPT
	claveIngresada = prompt("Ingrese la clave:");
	
	// AL WHILE LE PONEMOS COMO CONDICION QUE SI LA CLAVE NO ES IGUAL A "utn750" QUE INGRESE AL CODIGO DEL WHILE
	while(claveIngresada != "utn750")
	{
		// LE PEDIMOS AL USUARIO QUE COLOQUE NUEVAMENTE LA CLAVE CORRECTA
		claveIngresada = prompt("Ingrese la clave correctamente:")
	}

	// MOSTRAMOS EN UN ALERT QUE LA CLAVE INGRESADA ES CORRECTA
	alert("La clave es correcta !!")
	
}//FIN DE LA FUNCIÓN
