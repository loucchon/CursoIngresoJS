/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca 
el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 
10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente
 mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidaddelamparas;
     var marcadelampara;
     var preciocondescuento;
     var preciounidad;
     var sumadelasunidades;
     var descuento;
     var impuesto;
     
     cantidaddelamparas=parseInt(document.getElementById("txtIdCantidad").value);
     marcadelampara=(document.getElementById("Marca").value);
     preciounidad = 35; 
     sumadelasunidades=cantidaddelamparas*preciounidad;
     

     if (cantidaddelamparas>5)
     {  
         descuento=(sumadelasunidades*50)/100;
     }
     if(cantidaddelamparas==5)
     {
         if (marcadelampara=="ArgentinaLuz")
         {
            descuento=(sumadelasunidades*40)/100;
         }else
         {
            descuento=(sumadelasunidades*30)/100;
         }
     }
     else
     {
         if (cantidaddelamparas==4)
         {
             if(marcadelampara=="ArgentinaLuz"|| marcadelampara=="FelipeLamparas")
             {
                descuento=(sumadelasunidades*25)/100;
             }
             else
             {
                descuento=(sumadelasunidades*20)/100;
             }
         }
         else
         {
             if (cantidaddelamparas==3)
             {
                if (marcadelampara=="ArgentinaLuz")
                {
                    descuento=(sumadelasunidades*15)/100
                }

                if (marcadelampara=="FelipeLamparas")
                {
                    descuento=(sumadelasunidades*10)/100;
                }
                if(marcadelampara!=="ArgentinaLuz"&& marcadelampara!=="FelipeLamparas")
                {
                    descuento=(sumadelasunidades*5)/100; 
                }
             }
        }
     }
     preciocondescuento=sumadelasunidades-descuento;
     document.getElementById("txtIdprecioDescuento").value=preciocondescuento;

     if (preciocondescuento>120)
     {
        impuesto=(preciocondescuento*10)/100;
        alert("Usted pago "+ impuesto+  " de IIBB");
     }
}