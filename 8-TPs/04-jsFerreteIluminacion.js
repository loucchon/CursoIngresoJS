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
     var aux;
     var descuento;
     var impuesto;

     cantidaddelamparas=parseInt(document.getElementById("txtIdCantidad").value);
     marcadelampara=(document.getElementById("Marca").value);
     preciounidad = 35;

     if (cantidaddelamparas>5)
     {  
         aux=cantidaddelamparas*preciounidad;
         descuento=(aux*50)/100;
         preciocondescuento=aux-descuento;
     } else
     {
         if(cantidaddelamparas==5 && marcadelampara=="ArgentinaLuz")
         {
             aux=cantidaddelamparas*preciounidad;
             descuento=(aux*40)/100;
             preciocondescuento=aux-descuento;
         }else
         {
            aux=cantidaddelamparas*preciounidad;
            descuento=(aux*30)/100;
            preciocondescuento=aux-descuento;
         }

         if (cantidaddelamparas==4 &&marcadelampara=="ArgentinaLuz"|| marcadelampara=="FelipeLamparas")
         {
             aux=cantidaddelamparas*preciounidad;
             descuento=(aux*25)/100;
             preciocondescuento=aux-descuento;
         }else
         {
             aux=cantidaddelamparas*preciounidad;
             descuento=(aux*20)/100;
             preciocondescuento=aux-descuento;  
         }
         if (cantidaddelamparas==3 && marcadelampara=="ArgentinaLuz")
         {
            aux=cantidaddelamparas*preciounidad;
            descuento=(aux*15)/100
            preciocondescuento=aux-descuento;
         }
         if (cantidaddelamparas==3 && marcadelampara=="FelipeLamparas")
         {
            aux=cantidaddelamparas*preciounidad;
            descuento=(aux*10)/100;
            preciocondescuento=aux-descuento;
         }else
         {
            aux=cantidaddelamparas*preciounidad;
            descuento=(aux*5)/100;
            preciocondescuento=aux-descuento
         }
     }
     if (preciocondescuento>120)
     {
        impuesto=(preciocondescuento*10)/100;
        aux=preciocondescuento+impuesto;
        alert("”Usted pago "+ aux+  " de IIBB, siendo "+ impuesto+ " el impuesto que se pagó ");
     }



     document.getElementById("txtIdprecioDescuento").value=preciocondescuento;


}
