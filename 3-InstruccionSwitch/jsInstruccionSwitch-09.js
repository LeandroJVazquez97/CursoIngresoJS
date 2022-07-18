/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	let precioBase, precioFinal, estacion, destino;

	precioBase = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			if(destino == "Bariloche")
			{
				precioFinal = precioBase * (20/100) + precioBase;
			}
			else if(destino == "Cordoba" || destino == "Cataratas")
			{
				precioFinal = precioBase * (10/100) - precioBase;
			}
			else if(destino == "Mar del plata")
			{
				precioFinal = precioBase * (20/100) - precioBase;
			}
		break;
	}

}//FIN DE LA FUNCIÓN