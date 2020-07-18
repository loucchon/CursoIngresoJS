/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var resultado;
    
    precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado= precio1+precio2+precio3;
    alert ("la suma de los tres precios es " + resultado);

}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var resultado;
    
    precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado= (precio1+precio2+precio3)/3;

    alert ("el promedio de los tres precios es "+resultado.toFixed(2))
}
   function PrecioFinal () 
{
    var precio1;a
    var precio2;
    var precio3;
    var resultado;
    var iva;

    precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    iva= (precio1+precio2+precio3)*21/100;
    resultado= precio1+precio2+precio3+iva;

    alert ("el precio final mas el iva es "+resultado.toFixed(2));
}