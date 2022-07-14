/*
    VAZQUEZ, LEANDRO JAVIER
    DIV E 
    PARCIAL 04 , IF, (2018)
*/

function mostrar()
{
    // CREAMOS VARIABLE PARA LOS DOS VALORES Y EL RESULTADO
    let numero1, numero2, resultado;

    // SE PIDEN LOS DOS VALORES
    numero1 = prompt("Ingrese un numero");
    numero2 = prompt("Ingrese otro numero");

    // SE PARSEAN LOS VALORES PEDIDOS
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    // SI VALOR1 Y VALOR2 SON IGUALES SE ENVIA UN ALERT
    if(numero1 == numero2)
    {
        alert("Los numeros son iguales");
    }
    
    // SI EL VALOR1 ES MAYOR QUE VALOR2, SE RESTAN
    else if(numero1 > numero2)
    {
        resultado = numero1 - numero2;

        alert("El valor numero 1 es mayor que el numero 2 y el resultado de la resta es " + resultado);
    }

    // SI VALOR2 ES MAYOR A VALOR1 SE SUMAN LOS RESULTADOS
    // SI EL VALOR DE LA SUMA ES MAS DE 10 SE ENVIA EL ALERT
    else
    {
        resultado = numero1 + numero2;

        if(resultado > 10)
        {
            alert("El resultado es " + resultado + " y supero el 10");
        }
    }
}
