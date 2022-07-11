/* 
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 06, CONDICIONALES (IF)

*/


function mostrar()
{
	// CREAMOS LA VARIABLE PARA LA EDAD
	let edad;

	// TOMAMOS LA EDAD POR ID
	edad = document.getElementById("txtIdEdad").value;

	// PARSEAMOS LA EDAD
	edad = parseInt(edad);

	// SE CREA LA CONDICION SI EDAD ES MAYOR QUE 18, SE TIRA UN ALERT DE ADULTO
	if (edad >= 18)
	{
		alert("Usted es mayor de edad.")
	}
	
	// SE CREA OTRA CONDICION MEDIANTE UN ELSE IF, SI SU EDAD ENTRA EN EL RANGO DE ADOLESCENTE
	else if(edad <= 17 && edad >= 13)
	{
		alert("Usted es adolescente.")
	}

	// SE CREA UN ELSE, QUE SI NO SE CUMPLEN NINGUNA DE LAS DOS CONDICIONES ANTERIORES, SE DA POR SENTADO QUE ES UN NIÑO
	else
	{
		alert("Usted es un niño.")
	}

}//FIN DE LA FUNCIÓN