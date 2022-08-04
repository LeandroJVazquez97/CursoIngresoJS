/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	SIMULACRO DE PARIAL 01
*/

function mostrar()
{
	// CREAMOS LAS VARIABLES NESECESARIAS
	let apellido, edad, obraSocial, tratamiento;
	let promedioEdadBrackets, cantidadBrackets;
	let obraSocialMasAtendida, obraSocialIoma, obraSocialOsde, obraSocialOmint;
	let edadCarieJoven, apellidoCarieJoven, acumuladorCaries;

	// INICIALIZAMOS VARIABLES
	cantidadBrackets = 0;
	obraSocialIoma = 0;
	obraSocialOsde = 0;
	obraSocialOmint = 0;
	promedioEdadBrackets = 0;
	edadCarieJoven = 0;
	acumuladorCaries = 0;

	// PEDIMOS LA INFORMACION DE LOS 5 TURNOS
	for(let i = 0; i < 5; i ++)
	{
		// PEDIMOS LOS DATOS DE LOS 5 TURNOS
		apellido = prompt("TURNO N°" + i +  " - Ingrese el apellido: ");
		edad = parseInt(prompt("TURNO N°" + i + " - Ingrese edad: "));
		obraSocial = prompt("TURNO N°" + i + " - Ingrese obra social: ");
		tratamiento = prompt("TURNO N°" + i + " - Ingrese tratamiento: ");
	
		// EN UN SWITCH DE TRATAMIENTO SACAMOS EL PROMEDIO DE LOS QUE USAN BRACKETS USANDO UN ACUMULADOR
		switch(tratamiento)
		{
			case "brackets":
				promedioEdadBrackets = promedioEdadBrackets + edad;
				cantidadBrackets = cantidadBrackets + 1;
			break;
			// SACAMOS LAS PERSONAS MAS JOVENES USANDO BRACKETS
			case "caries":
				if(acumuladorCaries == 0)
				{
					edadCarieJoven = edad;
					apellidoCarieJoven = apellido;
				}
				else if(edad < edadCarieJoven)
				{
					edadCarieJoven = edad;
					apellidoCarieJoven = apellido;
				}
			break;
		}

		// MEDIANTE UN SWITCH ACUMULAMOS LA CANTIDAD DE PERSONAS QUE UTILIZAN CADA OBRA SOCIAL
		switch(obraSocial)
		{
			case "Ioma":	
				obraSocialIoma = obraSocialIoma + 1;
				break;
			case "Osde":
				obraSocialOsde = obraSocialOsde + 1;
				break;
			case "Omint":
				obraSocialOmint = obraSocialOmint + 1;
				break;
		}
	}

	// SACAMOS LA OBRA SOCIAL MAS UTILIZADA
	if(obraSocialOsde < obraSocialIoma && obraSocialOmint < obraSocialIoma)
	{
		obraSocialMasAtendida = "Ioma";
	}
	else if(obraSocialIoma < obraSocialOsde && obraSocialOmint < obraSocialOsde)
	{
		obraSocialMasAtendida = "Osde";
	}
	else
	{
		obraSocialMasAtendida = "Omint";
	}

	// SACAMOS EL PROMEDIO DE LAS PERSONAS CON TRATAMIENTO DE BRACKETS
	promedioEdadBrackets = promedioEdadBrackets / cantidadBrackets;

	// MOSTRAMOS POR ALERT TODOS LOS RESULTADOS 
	alert("El promedio de edad de los que utilizan brackets es de " + promedioEdadBrackets);
	alert("La obra social mas atendida es " + obraSocialMasAtendida);
	alert("El apellido de la persona mas joven con caries es " + apellidoCarieJoven);
}