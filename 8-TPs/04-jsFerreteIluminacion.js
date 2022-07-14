/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

/*
    VAZQUEZ, LEANDRO JAVIER
    DIV E
    TP 04, PARTE E
*/

function CalcularPrecio () 
{
    // SE CREA 4 VARIABLES PARA HACER MAS PROLIJO EL CODIGO
 	let cantidadLamparitas, precio , precioFinal, descuento, marca;

    // LA VARIABLE PRECIO SE LE ASIGNA EL VALOR DE LAS LAMPARITAS
    precio = 35;

    marca = document.getElementById("Marca").value;

    // SE PIDE LA CANTIDAD DE LAMPARITAS A COMPRAR
    cantidadLamparitas = document.getElementById("txtIdCantidad").value;

    // SE PARSEA LA CANTIDAD
    cantidadLamparitas = parseInt(cantidadLamparitas);

    // SI LA CANTIDAD A COMPRAR ES MAYOR O IGUAL A 6, SE CALCULA EL PRECIO CON UN DESCUENTO DEL 50%
    // Y SE MUESTRA POR ID EL PRECIO FINAL CON EL DESCUENTO
    if(6 <= cantidadLamparitas)
    {
        descuento = precio * (50/100);

        precioFinal = (precio - descuento) * cantidadLamparitas;

        // document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }

    // SE CREA UN ELSE IF PARA CUANDO LA CANTIDAD DE LAMPARITAS SEA 5 
    // UN IF ADENTRO PARA ASIGNAR SU RESPECTIVO DESCUENTO DEPENDIENDO SI SU MARCA ES "ARGENTINALUZ"
    // UN ELSE PARA ASIGNAR SU RESPECTIVO DESCUENTO SI SU MARCA NO ES "ARGENTINALUZ"
    else if(cantidadLamparitas == 5)
    {
        if(marca == "ArgentinaLuz")
        {
            descuento = precio * (40/100);

            precioFinal = (precio - descuento) * cantidadLamparitas;

            //document.getElementById("txtIdprecioDescuento").value = precioFinal;
        }
        else
        {
            descuento = precio * (30/100);

            precioFinal = (precio - descuento) * cantidadLamparitas;

            //document.getElementById("txtIdprecioDescuento").value = precioFinal;
        }
    }

    // SE CREA OTRO IF ELSE SI LA CANTIDAD DE LAMPARITAS ES 4
    // UN IF ADENTRO PARA ASIGNAR SI LA MARCA ES "ARGENTINALUZ" O "FELIPELAMPARAS" SE DESCUENTA 25% 
    // UN ELSE SI ES DE OTRA MARCA SE LE DESCUENTA 20%
    else if(cantidadLamparitas == 4)
    {
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            descuento = precio * (25/100);

            precioFinal = (precio - descuento) * cantidadLamparitas;

            //document.getElementById("txtIdprecioDescuento").value = precioFinal;
        }
        else
        {
            descuento = precio * (20/100);

            precioFinal = (precio - descuento) * cantidadLamparitas;

            //document.getElementById("txtIdprecioDescuento").value = precioFinal;
        }
    }

    // SE CREA OTRO IF ELSE SI LA CANTIDAD DE LAMPARITAS ES 3
    // UN IF DENTRO CON 15% DE DESCUENTO SI LA MARCA ES "ARGENTINALUZ"
    // UN ELSE IF DENTRO CON 10% DE DESCUENTO SI LA MARCA ES "FELIPELAMPARAS"
    // UN ELSE CON 5% DE DESCUENTO SI ES OTRA MARCA 
    else if(cantidadLamparitas == 3)
    {
        if(marca == "ArgentinaLuz")
        {
            descuento = precio * (15/100);

            precioFinal = (precio - descuento) * cantidadLamparitas;

            //document.getElementById("txtIdprecioDescuento").value = precioFinal;
        }
        else if(marca == "FelipeLamparas")
        {
            descuento = precio * (10/100);

            precioFinal = (precio - descuento) * cantidadLamparitas;

            //document.getElementById("txtIdprecioDescuento").value = precioFinal;
        }
        else
        {
            descuento = precio * (5/100);

            precioFinal = (precio - descuento) * cantidadLamparitas;

            //document.getElementById("txtIdprecioDescuento").value = precioFinal;
        }
    }
    
    // SE CREA UN ELSE POR SI LA CANTIDAD DE LAMPARITAS NO ENTRA EN LOS DESCUENTOS
    else
    {
        precioFinal = precio * cantidadLamparitas;

        //document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }

    // SE CREA UN IF PARA RECIBIR EL PRECIO FINAL DE LAS ANTERIORES CONDICIONES
    // SI PRECIO FINAL ES MAYOR A $120 SE LE COBRA UN IMPUESTO DE 10%
    if(120 < precioFinal)
    {
        let impuesto;

        impuesto = precioFinal * (10/100);
        
        precioFinal = precioFinal + impuesto;

        alert("”Usted pago " + precioFinal + " con el impuesto de IIBB., siendo " + impuesto + " el impuesto que se pagó");
    }

    // SE ASIGNA EL PRECIO FINAL AL ID DESPUES DE PASAR POR EL PROCESO DE DESCUENTO Y DE IMPUESTOS
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}
