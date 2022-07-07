/*2.
    VAZQUEZ, LEANDRO JAVIER
    DIV E
    TP 02 FERRETE

    Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    // SE CREA VARIABLES PARA EL LARGO, EL ANCHO Y EL RESULTADO DEL PERIMETRO DEL RECTANGULO
    let largo, ancho, resultado;

    // SE PIDEN LOS DATOS POR ID
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    // SE PARSEAN LOS DATOS PEDIDOS
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    // SE CALCULA EL PERIMETRO DEL RECTANGULO
    resultado = largo * 2 + ancho * 2;

    // SE MUESTRA POR UN ALERT EL RESULTADO DEL PERIMETRO
    alert("La cantidad de alambre que tiene que comprar para el rectangulo es de " + resultado);

}
function Circulo () 
{
    // SE CREA UNA VARIABLE PARA EL RADIO, UNA PARA GUARDAR EL NUMERO PI Y PARA EL RESULTADO
	let radio, pi, resultado;

    // SE ALMACENA EL NUMERO PI SIMPLIFICADO EN LA VARIABLE
    pi = 3.14;

    // SE PIDE EL RADIO DEL CIRCULO POR ID
    radio = document.getElementById("txtIdRadio").value;

    // SE CALCULA EL PERIMETRO DEL CIRCULO
    resultado = 2 * pi * radio;

    // SE ELIMINAN LOS DECIMALES
    resultado = parseInt(resultado);

    // SE MUESTRA POR UN ALERT EL RESULTADO DEL PERIMETRO
    alert("La cantidad de alambre que tiene que comprar para el circulo es de " + resultado);
}
function Materiales () 
{
	// SE CREA VARIABLES PARA EL LARGO, EL ANCHO Y EL RESULTADO DEL PERIMETRO DEL RECTANGULO
    let largo, ancho, resultado, bolsaCemento, bolsaCal;

    // SE PIDEN LOS DATOS POR ID
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    // SE PARSEAN LOS DATOS PEDIDOS
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    resultado = largo * ancho;

    bolsaCemento = resultado * 2;
    bolsaCal = resultado * 3;

    alert("Vamos a nesecitar " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal.");
}