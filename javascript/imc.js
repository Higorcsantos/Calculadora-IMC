$(document).ready(function(){
	$(".calcular").click(function(){

var trsPessoas = $(".pessoa");

var ps = 0;
while(ps <= trsPessoas.length - 1){

    var pessoa = trsPessoas[ps];

    var pesot = $(".peso").val(pessoa)[ps];
    var alturat = $(".altura").val(pessoa)[ps];

    var pessoaobj = { 	 peso: pesot.textContent, 
                   		 altura: alturat.textContent,
                   		 obtImc: function ImcResultado(){


                              var imc = this.peso / ((this.altura)*(this.altura));

                              var resultado;

                                if(imc<17){
                                  resultado = " Muito abaixo do Peso";
                                }
                                else if(imc>=17.1 && imc<18.49){
                                  resultado = " Abaixo do Peso";
                                }
                                else if(imc>=18.5 && imc<25){
                                  resultado = " Peso Normal";
                                }
                                else if(imc>=25 && imc<30){
                                  resultado = " Acima do Peso";
                                }
                                else if(imc>=30 && imc<35){
                                  resultado = " Obesidade I";
                                }
                                else if(imc>=35 && imc<=40){
                                  resultado = " Obesidade II (Severa)";
                                }
                                else if(imc>=40){
                                  resultado = " Obesidade III (Mórbita)";
                                }

                              return resultado;
                            }
                              };


  
    var imc = pessoaobj.obtImc();
      
    var imct = $(".resultado").val(pessoa)[ps];
    imct.textContent = imc.toString();

    ps++;
    
}

var trsPessoas = $(".pessoa");

var ps = 0;
while(ps <= trsPessoas.length - 1){

    var pessoa = trsPessoas[ps];

    var pesot = $(".peso").val(pessoa)[ps];
    var alturat = $(".altura").val(pessoa)[ps];

    var pessoaobj = {peso: pesot.textContent, 
                     altura: alturat.textContent,

                    obtImc: function Imc(){

                              var imc = this.peso / Math.pow(this.altura,2);

                              return imc;
                            }
                              };


  
    var imc = pessoaobj.obtImc();
      
    var imct = $(".imc").val(pessoa)[ps];
    imct.textContent = imc.toFixed(2);

    ps++;
    
}

});

$(".inserir").click(function(){
    if (validarCampo()==0){
    return false;
    
  }else {
    var txtPeso = $(".peso").val();
    var txtAltura = $(".altura").val();

    var pessoaNew = "<tr class='pessoa'>"+
                        "<td class='peso'>"+txtPeso+"</td>"+
                        "<td class='altura'>"+txtAltura+"</td>"+
                        "<td class='imc'></td>"+
              "<td class='resultado'></td>"+
                  "</tr>";


$(".tableadd")[0].innerHTML+= pessoaNova;


$(".peso").val("");
$(".altura").val("");


$(".tableadd").css('display','block');
$(".calcular").css("display","inline-block");

