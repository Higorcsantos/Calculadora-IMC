$(document).ready(function(){

	$('.calcular').click(function(){
	var p = $('input[name=peso]').val();
	var h = $('input[name=altura]').val();
	p = parseFloat(p);
	h=  parseFloat(h);
	i = parseFloat((p)/(h*h));
	i = i.toFixed(2);
		if (i<=18.5){
			$('.container').append("Seu IMC é: </div>"+i+'<div class="baixopeso">Baixo Peso</div');
		}
		else if(i>18.5 && i<= 25){
			$('.container').append("Seu IMC é:"+i+'<div class="pesoideal">Peso Ideal</div');
		}
		else if(i>25&& i<= 30){
			$('.container').append("Seu IMC é:" +i+'<div class="sobrepeso">Sobrepeso</div');
		}
		else if(i>30 && i<= 35){
			$('.container').append("Seu IMC é:" +i+'<div class="obesidade">Obesidade Grau 1</div');
		}
		else if (i>35 &&i <= 40){
			$('.container').append("Seu IMC é:" +i+'<div class="obesidade">Obesidade Grau 2</div');
		}
		else if (i>40){
			$('.container').append("Seu IMC é:" +i+'<div class="obesidade">Obesidade Grau 3</div');
		}
	});
	
});

