function mostrar()
{
    var edad 

    edad=(document.getElementById("txtIdEdad").value);

    edad= parseInt(edad);


    if(edad<18 && edad>12)
    {
        alert("usted es adolecente");
    }
    
    else 
    {
        if (edad>17)
        {
            alert("usted es mayor de edad");
        }

        if (edad<13)
        {
            alert("usted es niño");
        }
    }
    

}