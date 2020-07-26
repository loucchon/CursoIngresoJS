function mostrar()
{
	var edad
	var estadocivilingresado

	edad=parseInt(document.getElementById("txtIdEdad").value);
	estadocivilingresado=(document.getElementById("estadoCivil").value);


	if (edad<18 && estadocivilingresado !="Soltero")
	{
		alert ("Es muy pequeño para NO ser soltero");
	}
	


}