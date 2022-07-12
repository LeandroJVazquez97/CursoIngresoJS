/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E 
	EJERCICIO IF 07
*/

function mostrar()
{
	// CREAMOS VARIABLE PARA LA EDAD Y EL ESTADO CIVIL PEDIDO
	let edad, estadoCivil;

	// TRAEMOS LOS DATOS POR ID
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	// PARSEAMOS LA EDAD
	edad = parseInt(edad);

	// USAMOS IF PARA LARGAR EL ALERT CUANDO EDAD ES MENOR A 18 Y SU CONDICION NO ES SER SOLTERO
	if(edad < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para no ser soltero")
	}

}//FIN DE LA FUNCIÓN