/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    // SE DECLARA LAS VARIABLES DE LOS PRODUCTOS Y DEL RESULTADO
	let producto1, producto2, producto3, resultado;
    
    // SE TRAE LOS PRECIOS MEDIANTE UN ID
    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto3 = document.getElementById("txtIdPrecioTres").value;

    // SE PARSEAN LOS 3 PRODUCTOS
    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    // SE SUMAN LOS TRES PRODUCTOS Y SE GUARDA EL RESULTADO EN LA VARIABLE
    resultado = producto1 + producto2 + producto3;

    // SE MUESTRA EL TOTAL DE LA SUMA MEDIANTE UN ALERT
    alert("La suma total de los 3 productos es de $" + resultado);
}
function Promedio () 
{
	// SE DECLARA LAS VARIABLES DE LOS PRODUCTOS Y DEL RESULTADO
	let producto1, producto2, producto3, resultado;
    
    // SE TRAE LOS PRECIOS MEDIANTE UN ID
    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto3 = document.getElementById("txtIdPrecioTres").value;

    // SE PARSEAN LOS 3 PRODUCTOS
    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    // SE SUMAN LOS TRES PRODUCTOS Y SE SACA EL PROMEDIO, SE GUARDA EL RESULTADO EN LA VARIABLE
    resultado = (producto1 + producto2 + producto3) / 3;

    // SE ELIMINAN LOS DECIMALES
    resultado = parseInt(resultado);

    // SE MUESTRA EL PROMEDIO FINAL MEDIANTE UN ALERT
    alert("El promedio de los 3 productos es de $" + resultado);
}
function PrecioFinal () 
{
    // SE DECLARA LAS VARIABLES DE LOS PRODUCTOS Y DEL RESULTADO
	let producto1, producto2, producto3, suma, precioFinal;
    
    // SE TRAE LOS PRECIOS MEDIANTE UN ID
    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto3 = document.getElementById("txtIdPrecioTres").value;

    // SE PARSEAN LOS 3 PRODUCTOS
    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    // SE SUMAN LOS TRES PRODUCTOS Y SE GUARDA EL RESULTADO EN LA VARIABLE
    suma = producto1 + producto2 + producto3;

    // SE SUMA EL 21% DE IVA AL PRECIO DE LOS PRODUCTOS 
    precioFinal = (21/100) * suma + suma;

    // SE MUESTRA EL PRECIO FINAL MEDIANTE UN ALERT
    alert("El precio final de los productos es de $" + precioFinal);
}