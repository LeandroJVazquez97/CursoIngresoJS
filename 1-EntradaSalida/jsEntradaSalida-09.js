/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 09 E/S
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	// DECLARAMOS LAS VARIABLES PARA DISCRIMINAR EL SUELDO, EL AUMENTO Y EL RESULTADO FINAL
	let sueldo, aumento, sueldoAumentado;

	// TOMAMOS EL SUELDO POR ID
	sueldo = document.getElementById("txtIdSueldo").value;

	// PARSEAMOS EL SUELDO
	sueldo = parseInt(sueldo);

	// CALCULAMOS EL AUMENTOO
	aumento = (10/100) * sueldo;

	// CALCULAMOS EL SUELDO MAS EL AUMENTO
	sueldoAumentado = sueldo + aumento;

	// MOSTRAMOS LOS RESULTADOS DE LAS VARIABLES EN UN ID
	alert("El sueldo es " + sueldo + ", el aumento es de " + aumento + " y el sueldo quedaria en " + sueldoAumentado);
}

/*
/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 09 BIS E/S
	Debemos lograr tomar el importe por ID ,
	transformarlo a entero (parseInt), luego
	mostrar el importe con un aumento del 10 %
	en el cuadro de texto "RESULTADO"./
function mostrarAumento()
{
	// DECLARAMOS LAS VARIABLES PARA DISCRIMINAR EL SUELDO, EL AUMENTO Y EL RESULTADO FINAL
	let sueldo, aumento, porcentaje ,sueldoAumentado;

	// TOMAMOS EL SUELDO Y EL PORCENTAJE A AUMENTAR POR ID
	sueldo = document.getElementById("txtIdSueldo").value;
	porcentaje = document.getElementById("txtIdPorcentaje").value;

	// PARSEAMOS EL SUELDO Y EL PORCENTAJE A AUMENTAR
	sueldo = parseInt(sueldo);
	porcentaje = parseInt(porcentaje);

	// CALCULAAMOS EL AUMENTOO
	aumento = (porcentaje/100) * sueldo;

	// CALCULAMOS EL SUELDO MAS EL AUMENTO
	sueldoAumentado = sueldo + aumento;

	// MOSTRAMOS LOS RESULTADOS DE LAS VARIABLES EN UN ID
	alert("El sueldo es " + sueldo + ", el aumento es de " + aumento + " y el sueldo quedaria en " + sueldoAumentado + ". y ademas el porcentaje aumentado es de " + porcentaje + " %.");
}
*/