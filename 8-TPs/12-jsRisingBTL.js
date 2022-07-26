/*
	VAZQUEZ, LEANDRO JAVIER 
	DIV E
	TP 12 
 */

function ComenzarIngreso () 
{
 	// DECLARO VARIABLES
	let edad, sexo, estadoCivil, sueldoBruto, legajo, nacionalidad;

	// SE PIDE LA VARIABLE EDAD Y SE VALIDA SOLO SI LA EDAD INGRESADA ESTA ENTRE 18 Y 90 AÑOS
	edad = parseInt(prompt("Ingrese su edad:"));

	while(edad < 18 || 90 < edad)
	{
		edad = parseInt(prompt("Ingrese una edad entre 18 y 90 años inclusive"));
	}

	// SE PIDE EL SEXO SI ES M O F Y SE LE ASIGNA EL VALOR CORRESPONDIENTE A LA VARIABLE
	sexo = prompt("Ingrese su sexo: M o F");
	
	switch(sexo)
	{
		case "M":
			sexo = "Masculino";
			break;
		case "F":
			sexo = "Femenino";
			break;
	}	

	// SE PIDE EL ESTADO CIVIL Y MEDIANTE UN SWITCH  LOS VALOASIGNAMOS SU RESPECTIVO VALOR A LA VARIABLE 
	estadoCivil = parseInt(prompt("Estado civil: 1-Soltero, 2-Casado, 3-Divorciado y 4-Viudo"));

	switch(estadoCivil)
	{
		case 1:
			estadoCivil = "Soltero";
			break;
		case 2:
			estadoCivil = "Casado";
			break;
		case 3:
			estadoCivil = "Divorciado";
			break;	
		case 4:
			estadoCivil = "Viudo";
			break;
	}

	// SE PIDE EL SUELDO BRUTO EN CASO DE NO SER MAYOR DE 8000 SE PIDE QUE INGRESE UN SUELDO VALIDO 
	sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto:"));

	while(sueldoBruto < 8000)
	{
		sueldoBruto = parseInt(prompt("Ingrese una sueldo no menor a 8000"));
	}

	// SE PIDE UN LEGAJO DE CUATRO CIFRAS
	legajo = parseInt(prompt("Ingrese su numero de legajo:"),10);

	// SE CREA UN SWITCH PARA ASIGNARLE SU RESPECTIVO VALOR A LA VARIABLE
	nacionalidad = prompt("Ingrese su nacionalidad:  A - Argentinos, E - Extranjeros, N - Nacionalizados");

	switch(nacionalidad)
	{
		case "A":
			nacionalidad = "Argentino";
			break;
		case "E":
			nacionalidad = "Extranjero";
			break;
		case "N":
			nacionalidad = "Nacionalizado";
			break;
	}

	// SE MUESTRAN POR ID LOS DATOS CARGADOS Y VALIDADOS
	document.getElementById("txtIdEdad").value = edad;
	document.getElementById("txtIdSexo").value = sexo;
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = legajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
