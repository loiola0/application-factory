
var peso;
var altura;
var imc;
var resultado;

function Calcular(){
	peso = document.getElementById("peso").value;
	altura = document.getElementById("altura").value;
	imc = peso/(altura*altura);
	
		if(imc<17){
			resultado = document.getElementById("resultado");
			resultado.innerHTML = "<br> Seu resultado foi: </br>"+imc.toFixed(2)+" <h3><br/>Cuidado você está muito abaixo do peso.</h3><br/>";
			document.getElementById("peso").value = "";
			document.getElementById("altura").value = "";
			return false;
		}else if(imc>17 && imc<18.49){
			resultado = document.getElementById("resultado");
			resultado.innerHTML = "<br> Seu resultado foi: </br>"+imc.toFixed(2)+" <h3><br/>Cuidado você está abaixo do peso.</h3><br/>";
			document.getElementById("peso").value = "";
			document.getElementById("altura").value = "";
			return false;
		}else if(imc>18.49 && imc<24.99){
			resultado = document.getElementById("resultado");
			resultado.innerHTML = "<br> Seu resultado foi: </br>"+imc.toFixed(2)+" <h3><br/>Ótimo você está no peso certo.</h3><br/>";
			document.getElementById("peso").value = "";
			document.getElementById("altura").value = "";
			return false;
		}else if(imc>25 && imc<29.99  ){
			resultado = document.getElementById("resultado");
			resultado.innerHTML = "<br> Seu resultado foi: </br>"+imc.toFixed(2)+"<h3><br/>Atênção você está acima do peso.</h3><br/>";
			document.getElementById("peso").value = "";
			document.getElementById("altura").value = "";
			return false;
		}else{
			document.getElementById("peso").value = "";
			document.getElementById("altura").value = "";
			return false;
		}
	

}