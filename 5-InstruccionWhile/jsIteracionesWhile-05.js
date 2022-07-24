/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 05 WHILE
*/

function mostrar()
{
	// CREAMOS LA VARIABLE PARA EL SEXO DEL USUARIO
	let sexoIngresado;

	// PEDIMOS POR UN PROMPT EL SEXO AL USUARIO
	sexoIngresado = prompt("Ingrese m o f, para indicar su sexo:");

	// MEDIANTE UN WHILE VALIDAMOS QUE EL USUARIO INGRESE CORRECTAMENTE LOS DATOS PEDIDOS
	while(sexoIngresado != "m" && sexoIngresado != "f")
	{
		sexoIngresado = prompt("Ingrese correctamente su sexo:");
	}

	// MEDIANTE UN SWITCH MOSTRAMOS EL SEXO DEL USUARIO EN UN ID
	switch(sexoIngresado)
	{
		case "m":
			document.getElementById("txtIdSexo").value = "Su sexo es Masculino";
			break;
		case "f":
			document.getElementById("txtIdSexo").value = "Su sexo es femenino";
			break;
	}
}//FIN DE LA FUNCIÓN