/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 10 E/S

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	// DECLARAMOS VARIABLES PARA EL IMPORTE, EL MONTO DEL DESCUENTO Y EL RESULTADO
	let importe, descuento, resultado;

	// PEDIMOS EL IMPORTE POR ID
	importe = document.getElementById("txtIdImporte").value;

	// PARSEAMOS EL IMPORTE 
	importe = parseInt(importe);

	// CALCULAMOS EL 25% DE DESCUENTO
	descuento = (25/100) * importe;

	// AL IMPORTE LE RESTAMOS EL DESCUENTO
	resultado = importe - descuento;

	// MOSTRAMOS POR ALERT EL DESCUENTO Y POR EL ID DE RESULTADO
	//alert("El importe con el descuento del 25% es de " + resultado);
	document.getElementById("txtIdResultado").value = resultado;
}
