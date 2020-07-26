function mostrar()
{
	var edad;
	edad=(document.getElementById("txtIdEdad").value);
	edad=parseInt(edad);

	if(edad<18 && edad>12)
	{
	}
	else
	{
		alert("no es un adolecente");
	}

}