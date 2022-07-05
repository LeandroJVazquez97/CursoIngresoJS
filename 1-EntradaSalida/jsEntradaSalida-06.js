/*

	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 06 E/S 

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// CREAMOS VARIABLE PARA LOS DOS VALORES Y SU RESULTADO
	let numero1, numero2, resultado;

	// PEDIMOS MEDIANTE EL METODO ID, LAS DOS VARIABLES
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	// REALIZAMOS LA OPERACION ARITMETICA Y TRANSFORMAMOS LOS NUMEROS EN ENTEROS
	resultado = parseInt(numero1) + parseInt(numero2);

	// MEDIANTE UN ALERT MOSTRAMO EL RESULTADO DE LA OPERACION
	alert("El resultado de la suma es de " + resultado);
}

