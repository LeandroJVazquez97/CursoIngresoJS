/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 10, IF
*/


function mostrar()
{
	// CREAMOS LA VARIABLE ALETORIO
	let nota;
	
	// GENERAMOS UN NUMERO RANDOM CON EL MATH RANDOM Y LO REDONDEAMOS CON EL ROUND
	// EL NUMERO ALETORIO TIENE QUE SER DE 1 A 10
	nota = Math.round(Math.random()*9) + 1;

	// LE CREAMOS UN IF PARA VER SI SE SACO 10 O 9 Y ENVIAMOS UN ALERT
	if(nota >= 9)
	{
		alert("Excelente, te sacaste un " + nota);
	}

	// LE CREAMOS UN ELSE IF PARA VER SI SE SACO ENTRE 8 Y 4 Y ENVIAMOS UN ALERT
	else if(nota >= 4 && nota <= 8)
	{
		alert("Aprobaste, te sacaste un " + nota);
	}

	// LE CREAMOS UN ELSE POR SI NO CUMPLIO NINGUNA DE LAS DOS CONDICIONES ANTERIORES Y LE ENVIAMOS UN ALERT
	else
	{
		alert("Vamos !! la proxima se puede, te sacaste un " + nota);
	}

}//FIN DE LA FUNCIÓN