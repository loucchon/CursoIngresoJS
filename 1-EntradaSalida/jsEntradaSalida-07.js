/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
/*var numero1;
var numero2;
var resultado;

numero1= document.getElementById("txtIdNumeroUno").value;
numero2= document.getElementById("txtIdNumeroDos").value;

numero1= parseInt(numero1);
numero2= parseint(numero2);

*/

function sumar()
{	
	var numero1;
	var numero2;
	var resultado;


	numero1= parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2= parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado=numero1 + numero2;
	alert ("la suma es " + resultado);
}

function restar()
{
	var numero1;
	var numero2;
	var resultado;


	numero1= parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2= parseInt(document.getElementById("txtIdNumeroDos").value);
	
	resultado= numero1 - numero2;
	alert ("la resta es "+ resultado);
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var resultado;


	numero1= parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2= parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado= numero1 * numero2;
	alert("la multiplicacion es " + resultado);

}

function dividir()
{
	var numero1;
	var numero2;
	var resultado;


	numero1= parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2= parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado= numero1 / numero2;
	alert ("la division es " + resultado);
}

