/*
	VAZQUEZ, LEANDRO JAVIER
	DIV E
	EJERCICIO 07 E/S

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	// CREAMOS VARIABLE PARA LOS DOS VALORES Y SU RESULTADO
	let numero1, numero2, resultado;

	// PEDIMOS MEDIANTE EL METODO ID, LAS DOS VARIABLES
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	// REALIZAMOS LA OPERACION ARITMETICA Y TRANSFORMAMOS LOS NUMEROS EN ENTEROS
	resultado = parseInt(numero1) + parseInt(numero2);

	// MEDIANTE UN ALERT MOSTRAMOS EL RESULTADO DE LA OPERACION
	alert("El resultado de la suma es de " + resultado);	
}

function restar()
{
	// CREAMOS VARIABLE PARA LOS DOS VALORES Y SU RESULTADO
	let numero1, numero2, resultado;

	// PEDIMOS MEDIANTE EL METODO ID, LAS DOS VARIABLES
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	// REALIZAMOS LA OPERACION ARITMETICA Y TRANSFORMAMOS LOS NUMEROS EN ENTEROS
	resultado = parseInt(numero1) - parseInt(numero2);

	// MEDIANTE UN ALERT MOSTRAMOS EL RESULTADO DE LA OPERACION
	alert("El resultado de la resta es de " + resultado);	
}

function multiplicar()
{ 
	// CREAMOS VARIABLE PARA LOS DOS VALORES Y SU RESULTADO
	let numero1, numero2, resultado;

	// PEDIMOS MEDIANTE EL METODO ID, LAS DOS VARIABLES
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	// REALIZAMOS LA OPERACION ARITMETICA Y TRANSFORMAMOS LOS NUMEROS EN ENTEROS
	resultado = parseInt(numero1) * parseInt(numero2);

	// MEDIANTE UN ALERT MOSTRAMOS EL RESULTADO DE LA OPERACION
	alert("El resultado de la multiplicacion es de " + resultado);	
}

function dividir()
{
	// CREAMOS VARIABLE PARA LOS DOS VALORES Y SU RESULTADO
	let numero1, numero2, resultado;

	// PEDIMOS MEDIANTE EL METODO ID, LAS DOS VARIABLES
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	// REALIZAMOS LA OPERACION ARITMETICA Y TRANSFORMAMOS LOS NUMEROS EN ENTEROS
	resultado = parseInt(numero1) / parseInt(numero2);

	// MEDIANTE UN ALERT MOSTRAMOS EL RESULTADO DE LA OPERACION
	alert("El resultado de la division es de " + resultado);	
}

