function mostrar()
{
	// CREAMOS LA VARIABLE ALETORIO
	let aleatorio;
	
	// GENERAMOS UN NUMERO RANDOM CON EL MATH RANDOM Y LO REDONDEAMOS CON EL ROUND
	// EL NUMERO ALETORIO TIENE QUE SER DE 1 A 10
	aleatorio = Math.round(Math.random()*9) + 1;
	
	// MOSTRAMOS EL NUMERO RANDOM EN UN ALERT
	alert("El numero random es " + aleatorio);

}//FIN DE LA FUNCIÓN