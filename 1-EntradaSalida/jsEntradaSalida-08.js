/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 08 E/S

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	// CREAMOS VARIABLES PARA EL DIVIDENDO, DIVISOR Y RESTO
	let dividendo, divisor, resto;

	// TOMAMOS LOS DATOS DEL DIVIDENDO Y EL DIVISIOR POR ID
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	// PARSEAMOS EL DIVIDENDO Y EL DIVISOR Y EL RESTO DE LA OPERACION LO ASIGNAMOS A LA VARIABLE RESTO
	resto = parseInt(dividendo) % parseInt(divisor);

	// MOSTRAMOS EN UN ALERT EL RESTO DE LA DIVISION
	alert("El resto entre el dividendo y el divisor es " + resto);
}
