/*3.
    VAZQUEZ, LEANDRO JAVIER
    DIV E
    TP 03 FERRETE

    Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    // SE DECLARAN LAS VARIABLES FARENHEIT Y CENTIGRADOS
    let farenheit, centigrados;

    // SE PIDEN LOS GRADOS FARENHEIT POR ID
    farenheit = document.getElementById("txtIdTemperatura").value;

    // SE PARSEAN LOS GRADOS FARENHEI INGRESADOS
    farenheit = parseInt(farenheit);

    // SE REALIZA LA FORMULA PARA PASAR LOS FARENHEIT EN GRADOS CENTIGRADOS
    centigrados = (farenheit - 32) / 1.8;

    // SE PARSEA LA VARIABLE CENTIGRADOS PARA ELIMINAR LOS DECIMALES
    centigrados = parseInt(centigrados);

    // SE MUESTRA POR UN ALERT EL RESULTADO 
    alert(farenheit + " grados Farenheit son " + centigrados + " grados Centigrados.");
}

function CentigradosFahrenheit () 
{
	// SE DECLARAN LAS VARIABLES CENTIGRADOS Y FARENHEIT
    let centigrados, farenheit;

    // SE PIDEN LOS GRADOS CENTIGRADOS POR ID
    centigrados = document.getElementById("txtIdTemperatura").value;

    // SE PARSEAN LOS GRADOS CENTIGRADOS INGRESADOS
    centigrados = parseInt(centigrados);

    // SE REALIZA LA FORMULA PARA PASAR LOS CENTIGRADOS EN GRADOS FARENHEIT
    farenheit = (centigrados * 1.8) + 32;

    // SE PARSEA LA VARIABLE FARENHEIT PARA ELIMINAR LOS DECIMALES
    farenheit = parseInt(farenheit);

    // SE MUESTRA POR UN ALERT EL RESULTADO 
    alert(centigrados + " grados Centigrados son " + farenheit + " grados Farenheit.");
}
