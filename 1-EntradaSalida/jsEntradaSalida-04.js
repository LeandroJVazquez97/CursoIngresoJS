/* 
	Vazquez, Leandro Javier
	DIV E
	EJERCICIO 04 E/S DE DATOS

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// INICIAMOS LA VARIABLE
	let nombreIngresado;

	// PEDIMOS EL NOMBRE MEDIANTE UN PROMPT
	//	DONDE GUARDO - QUE GUARDO
	nombreIngresado = prompt("Ingresar el nombre");

	// MOSTRAMOS EL NOMBRE POR MEDIO DE UN ID
	document.getElementById("txtIdNombre").value = nombreIngresado

}

