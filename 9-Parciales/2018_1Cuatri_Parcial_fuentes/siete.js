/*
    VAZQUEZ, LEANDRO JAVIER
    DIV E
    PARCIAL 2018 EJERCICIO 07
*/

function mostrar()
{
    // SE CREA VARIABLES PARA LOS DATOS A PEDIR
    let nota, sexo;

    // SE CREA VARIABLES PARA LAS OPERACIONES
    let acumuladorNota, promedioNota, menorNota, menorSexo, varonesAprobados;

    // SE INICIALIZA LOS ACUMULADORES
    acumuladorNota = 0;
    varonesAprobados = 0;

    // SE CREA UN FOR GENERAL DONDE SE PIDEN 5 DATOS DE ALUMNOS
    for(let i = 1; i < 6; i++)
    {
        // SE PIDEN LOS DATOS MEDIANTE UN PROMPT Y SE VALIDAN POR UN WHILE
        nota = parseInt(prompt("Ingrese una nota " + i + " del 1 al 10"));

        while(nota < 1 || 10 < nota)
        {
            nota = parseInt(prompt("Ingrese una nota valida:"));
        }
        
        sexo= prompt("Ingrese sexo " + i + " f o m");

        while(sexo != "m" && sexo != "f")
        {
            sexo = prompt("Ingrese un sexo valido:");
        }

        // SE ACUMULAN LAS NOTAS EN LA VARIABLES
        acumuladorNota = acumuladorNota + nota;

        // SE LE ASIGNA EL PRIMER VALOR INGRESADO A MENOR NOTA
        if(i == 1)
        {
            menorNota = nota;
            menorSexo = sexo;
        }

        // SI MENOR NOTA ES MENOR A LA ULTIMA NOTA INGRESADA LA REEMPLAZA
        if(nota < menorNota)
        {
            menorNota = nota;
            menorSexo = sexo;
        }

        // SI LOS DATOS INGRESADOS SON VARONES CON NOTA MAYOR O IGUAL A 6, SE SUMA 1 AL ACUMULADOR 
        if(6 <= nota && sexo == "m")
        {
            varonesAprobados = varonesAprobados + 1;
        }
    }

    // SE SACA PROMEDIO DE LAS NOTAS ACUMULADAS
    promedioNota = acumuladorNota / 5;
    
    // SE MUESTRAN LOS RESULTADOS DEL EJERCICIO MEDIANTE VARIOS ALERT
    alert("El promedio de los 5 alumnos es de: " + promedioNota);
    alert("La nota mas baja es de " + menorNota + " y es del sexo " + menorSexo);
    alert("La cantidad de varones con nota mayor o igual a 6 es de: " + varonesAprobados);
}