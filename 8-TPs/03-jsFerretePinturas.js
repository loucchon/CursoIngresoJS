/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura
    var centigrados

    temperatura=parseFloat(document.getElementById("txtIdTemperatura").value);
    
    centigrados=(temperatura-32)*(5/9);


    alert (temperatura+" fahrenheit son "+ centigrados.toFixed(2)+ " centigrados");
}

function CentigradosFahrenheit () 
{
    var temperatura;        
    var fahrenheit;

    temperatura= parseFloat(document.getElementById("txtIdTemperatura").value);

    fahrenheit= temperatura*(9/5)+32;
    
    alert (temperatura+" centigrados son "+fahrenheit.toFixed(2)+" fahrenheit");
}
