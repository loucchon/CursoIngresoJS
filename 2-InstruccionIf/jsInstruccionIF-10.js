function mostrar()
{ 
	var notarandom
	
	notarandom=Math.floor((Math.random() *10) + 1);
	alert (notarandom);
	if(notarandom>8)
	{
		alert("EXCELENTE");
	}
	if(notarandom>3 && notarandom<9)
	{
		alert("APROBO");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}
}