/*
VAZQUEZ, LEANDRO JAVIER
DIV E
PARCIAL EJERCICIO 01
*/

function mostrar()
{
// CREAMOS LAS VARIABLES NECESARIAS
let nombre, edad, peso, altura, posicion;
let posicionMasAlto, mayorAltura;
let pesoPromedio, pesoAcumulador;
let delanterosAcumulador, delanterosPorcentaje;

// INICIALIZAMOS LAS VARIABLES ACUMULADORAS
pesoAcumulador = 0;
delanterosAcumulador = 0;

// CREAMOS UN FOR DONDE PEDIMOS LOS DATOS DE 5 JUGADORES
// PARA QUE QUEDE MAS PROLIJO EN CADA DATO PEDIDO INGRESO EL NUMERO DE JUGADOR
// Y PARA MOSTRAR A I LE ASIGNO 1
for(let i = 1; i <= 5; i++)
{
	// POR MEDIO DE PROMTS PEDIMOS LOS DATOS Y VALIDAMOS A TRAVEZ DE LOS WHILE
	nombre = prompt("Ingrese el nombre del jugador N°" + i + ":");
	edad = parseInt(prompt("Ingrese la edad del jugador N°" + i + ":"));
	
	while(edad < 17 || 50 < edad)
	{
		edad = parseInt(prompt("Ingrese una edad valida(17 hasta 50 años inclusive)"));
	}
	
	peso = parseInt(prompt("Ingrese el peso del jugador N°" + i + ":"));

	while(peso < 50 || 120 < peso)
	{
		peso = parseInt(prompt("Ingrese un peso valido(50 hasta 120 kilos inclusive)"));
	}

	altura = prompt("Ingrese la altura del jugador N°" + i + ":")

	while(altura < 155 || 220 < altura)
	{
		altura = parseInt(prompt("Ingrese una altura valida(155 a 220 cm)"));
	}

	posicion = prompt("Ingrese la posicion del jugador N°" + i + ":");

	// USAMOS EL IF PARA LA BANDERA DEL JUGADOR MAS ALTO
	if(i == 1)
	{
		mayorAltura = altura;
		posicionMasAlto = nombre;
	}
	// EN CASO DE NO SER EL PRIMER DATO INGRESADO Y SER MAYOR LA ALTURA INGRESADA REEMPLAZA LOS DATOS DE LA VARIABLE POSICION MAS ALTO
	else if(i != 1 && mayorAltura < altura)
	{
		mayorAltura = altura;
		posicionMasAlto = nombre;
	}

	// ACUMULAMOS EL PESO DE TODOS LOS JUGADORES INGRESADOS
	pesoAcumulador = pesoAcumulador + peso;

	// MEDIANTE UN SWITCH SI LA POSICION ES DELANTERO SE ACUMULA EN LA VARIABLE PARA CALCULAR EL PORCENTAJE
	switch(posicion)
	{
		case "delantero":
			delanterosAcumulador = delanterosAcumulador + 1;
			break;
		case "arquero":
		case "defensor":
		case "mediocampista":
			break;	
	}
}

// CALCULAMOS EL PESO PROMEDIO
pesoPromedio = pesoAcumulador / 5;
// CALCULAMOS EL PORCENTAJE DE LOS DELANTEROS CARGADOS
delanterosPorcentaje = (delanterosAcumulador / 5) * 100;

// POR MEDIO DE CONSOLE.LOG INFORMAMOS LOS RESULTADOS
console.log("El jugador mas alto es " + posicionMasAlto);
console.log("El peso promedio de los jugadores es de " + pesoPromedio + " kgs");
console.log("El porcentaje de delanteros es de " + delanterosPorcentaje + "%");
}
