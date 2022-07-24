/*
    VAZQUEZ, LEANDRO JAVIER
    DIV E
    TP 04, SWITCH - IF
*/

function CalcularPrecio () 
{
    // DECLARAMOS UNA VARIABLE PARA EL PRECIO FIJO, CANTIDAD DE LAMPARAS Y MARCA.
    // DESCLARAMOS VARIABLE PARA EL PRECIO FINAL, EL DESCUENTO Y EL IMPUESTO
    let precio, cantidad, descuento, precioFinal, marca, impuesto;
    
    // INICIALIZAMOS LA VARIABLE Y LE ASIGNAMOS EL PRECIO FIJO
    precio = 35;

    // TOMAMOS POR ID LA CANTIDAD DE LAMPARAS ELEGIDAS POR EL USUARIO
    cantidad = document.getElementById("txtIdCantidad").value;

    // PARSEAMOS EL VALOR INGRESADO
    cantidad = parseInt(cantidad);

    // TOMAMOS POR ID LA MARCA ELEGIDA POR EL USUARIO
    marca = document.getElementById("Marca").value;

    // CREAMOS UN SWITCH CON LA CANTIDAD DE LAMPARAS A COMPRAR Y LUEGO OTRO SWITCH PARA LA MARCA
    switch(cantidad)
    {
        case 5:
            // CREAMOS UN IF SI LA MARCA ES ""ARGENTINALUZ" LE ASIGNAMOS SU DESCUENTO
            if(marca == "ArgentinaLuz")
            {
                descuento = precio * (40/100);
            }
            // CREAMOS UN ELSE PARA ASIGNARLE SI NO LO ES
            else
            {
                descuento = precio * (30/100);
            }
            break;
        case 4:
            // CREAMOS UN IF SI LA MARCA ES "ARGENTINALUZ" O "FELIPELAMPARAS" LE ASIGNAMOS SU DESCUENTO
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                descuento = precio * (25/100);
            }
            // UN ELSE PARA ASIGNARLE EL DESCUENTO SI NO ES LA MARCA
            else
            {
                descuento = precio * (20/100);
            }
            break;
        case 3:
            // CREAMOS UN IF SI LA MARCA ES "ARGENTINALUZ" LE ASIGNAMOS SU DESCUENTO
            if(marca == "ArgentinaLuz")
            {
                descuento = precio * (15/100);
            }
            // CREAMOS UN ELSE IF SI LA MARCA ES "FELIPELAMPARAS" LE ASIGNAMOS SU DESCUENTO
            else if(marca == "FelipeLamparas")
            {
                descuento = precio * (10/100);
            }
            // UN ELSE PARA ASIGNARLE EL DESCUENTO SI NO ES LA MARCA
            else
            {
                descuento = precio * (5/100);
            }
            break;
        default:
            if(6 <= cantidad)
            {   
                descuento = precio * (50/100);
            }    
            break;
    }

    // REALIZAMOS LA OPERACION PARA CALCULAR EL PRECIO FINAL CON EL DESCUENTO CORRESPONDIENTE
    precioFinal = (precio - descuento) * cantidad;
    
    // CREAMOS UN IF SI PRECIO FINAL ES MAYOR A 120
    if(120 < precioFinal)
    {
        // SE LE CALCULA EL IMPUESTO DEL 10% AL PRECIOFINAL Y SE GUARDA EN SU VARIABLE
        impuesto = precioFinal * (10/100);

        // A PRECIO FINAL SE LE SUMA EL IMPUESTO 
        precioFinal = precioFinal + impuesto;

        // SE MUESTRA POR UN ALERT, DISCRIMINANDO EL PRECIO FINAL Y EL IMPUESTO QUE SE PAGO
        alert("IIBB Usted pago $" + precioFinal + ", siendo $" + impuesto + " el impuesto que se pagó.");
    }

    // MOSTRAMOS EL RESULTADO DEL PRECIO FINAL EN UN ID
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}