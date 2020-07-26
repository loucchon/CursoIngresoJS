function mostrar()
{   
	//oscar fernando muñoz 4 ejercicio 1D//
	//tomo la edad  
	var edad;
	edad=(document.getElementById("txtIdEdad").value);
	edad=parseInt(edad);

	if(edad<18)
	{   
		if (edad>12)
		{   
			alert("usted es adolecente");
		}
	}

}