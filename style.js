function valida_form (){
if(document.getElementById("cpf").value == ""){
alert('Por favor, preencha o campo CPF');
document.getElementById("cpf").focus();
return false
}
if(document.getElementById("nome").value == ""){
alert('Por favor, preencha o campo nome');
document.getElementById("nome").focus();
return false
}
if(document.getElementById("endereco").value == ""){
alert('Por favor, preencha o campo Endereço');
document.getElementById("endereco").focus();
return false
}
if(document.getElementById("cidade").value == ""){
alert('Por favor, preencha o campo Cidade');
document.getElementById("cidade").focus();
return false
}
if(document.getElementById("receber").value == ""){
alert('Por favor, preencha o campo Receber notificações');
document.getElementById("receber").focus();
return false
}
if(document.getElementById("email").value == ""){
alert('Por favor, preencha o campo Email');
document.getElementById("email").focus();
return false
}
if(document.getElementById("senha").value == ""){
alert('Por favor, preencha o campo Senha');
document.getElementById("senha").focus();
return false
}
}

function mostrartexto(){
	document.getElementById("notificacao").innerHTML = "A qualquer momento você poderá cancelar o recebimento dos e-mail's de promoção enviando um e-mail com o assunto STOP MAIL para o endereço contato@estacio.br";
}
function mostrartextos(){
	document.getElementById("notificacao").innerHTML = "";
}
function valida()
   {
       if (document.cadastro.sel.value=="")
         {
            window.alert("Escolha um sexo!");
            document.cadastro.sel.focus();
         }
  
   }

function somenteletras(e)
	{
		var expressao;

		expressao = /[a-zA-ZÀ-ú\s]/;

		if(expressao.test(String.fromCharCode(e.keyCode)))
		{
			document.cadastro.nome.value = document.cadastro.nome.value.toUpperCase();
			return true;
		}
		else
		{
			return false;
		}
	}
		
	
	function letramasc(campo)
	{
		campo.value = campo.value.toUpperCase();
	}
	
	
	function somenteletra(e)
	{
		var expressao;

		expressao = /[a-zA-ZÀ-ú0-9]/;

		if(expressao.test(String.fromCharCode(e.keyCode)))
		{
			return true;
		}
		else
		{
			return false;
		}
}
function vldigito(){
	var senha = cadastro.senha.value;

		if (senha.length <=3) {

		alert('Digite no minimo 3 caracteres');

		cadastro.senha.focus();

		return false;

		}
}
/*(function(){
	"use strict";

	var marcados = 0;
	var verifyCheckeds = function($checks) {
		if( marcados>=1 ) {
			loop($checks, function($element) {
				$element.disabled = $element.checked ? '' : 'disabled';
			});
		} else {
			loop($checks, function($element) {
				$element.disabled = '';
			});
		}
	};
	var loop = function($elements, cb) {
		var max = $elements.length;
		while(max--) {
			cb($elements[max]);
		}
	}
	var count = function($element) {
		return $element.checked ? marcados + 1 : marcados - 1;
	}
	window.onload = function(){
		var $checks = document.querySelectorAll('input[type="checkbox"]');
		loop($checks, function($element) {
			$element.onclick = function(){
				marcados = count(this);
				verifyCheckeds($checks);
			}
			if($element.checked) marcados = marcados + 1;
		});
		verifyCheckeds($checks);
	}
}());*/


function validarCPF( cpf ){
	var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
	
	if(!filtro.test(cpf))
	{
		window.alert("CPF inválido. Tente novamente.");
		document.getElementById("cpf").focus();
		document.getElementById("cpf").value="";
		return false;
	}
   
	cpf = remove(cpf, ".");
	cpf = remove(cpf, "-");
	
	if(cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" ||
		cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" ||
		cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" ||
		cpf == "88888888888" || cpf == "99999999999")
	{
		window.alert("CPF inválido. Tente novamente.");
		document.getElementById("cpf").focus();
		document.getElementById("cpf").value="";
		return false;
   }

	soma = 0;
	for(i = 0; i < 9; i++)
	{
		soma += parseInt(cpf.charAt(i)) * (10 - i);
	}
	
	resto = 11 - (soma % 11);
	if(resto == 10 || resto == 11)
	{
		resto = 0;
	}
	if(resto != parseInt(cpf.charAt(9))){
		window.alert("CPF inválido. Tente novamente.");
		document.getElementById("cpf").focus();
		document.getElementById("cpf").value="";
		return false;
	}
	
	soma = 0;
	for(i = 0; i < 10; i ++)
	{
		soma += parseInt(cpf.charAt(i)) * (11 - i);
	}
	resto = 11 - (soma % 11);
	if(resto == 10 || resto == 11)
	{
		resto = 0;
	}
	
	if(resto != parseInt(cpf.charAt(10))){
		window.alert("CPF inválido. Tente novamente.");
		document.getElementById("cpf").focus();
		document.getElementById("cpf").value="";
		return false;
	}
	
	return true;
 }
 
function remove(str, sub) {
	i = str.indexOf(sub);
	r = "";
	if (i == -1) return str;
	{
		r += str.substring(0,i) + remove(str.substring(i + sub.length), sub);
	}
	
	return r;
}


function mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}

function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}

function cpf_mask(v){
	v=v.replace(/\D/g,"")                 
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    
	v=v.replace(/(\d{3})(\d)/,"$1-$2")   
	return v
}
		