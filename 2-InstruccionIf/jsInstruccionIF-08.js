function mostrar()
{
	var edad
	var estadocivilingresado

	edad= parseInt(document.getElementById("txtIdEdad").value);
	estadocivilingresado=(document.getElementById("estadoCivil").value);

	if (edad>17 && estadocivilingresado=="Soltero")
	{
		alert ("Es soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN