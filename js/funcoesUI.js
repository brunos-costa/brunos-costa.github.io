// Funcionalidade 1
function calc_idade(event) {
  event.preventDefault()

  var nasc_ano = document.form1.nasc_ano.value;

   
	var data = new Date();
	var atual_ano = data.getFullYear();
	
  Idade = atual_ano - nasc_ano;
  
  document.getElementById('mostraIdade').innerHTML='Você tem '+Idade+" anos"
	
	//alert ('Você tem '+ Idade + ' anos.');

}

// Funcionalidade 2
function conversor(event){
	event.preventDefault()

	var Vdolar = 0;     
	var Vcot = 0; 

	//acessar o que foi digitado
	var Vdolar = document.getElementById('dolares').value;
	var Vcot = document.getElementById('cot').value;	

	// aplicando máscara com a biblioteca 'vanilla-masker'
	VMasker(document.querySelectorAll(".money-input")).maskMoney({
  
	  separator: ',',
	  delimiter: '.'

	});

    Vdolar = removePontoVirgula(Vdolar)
    Vcot = removePontoVirgula(Vcot)

	//converter de string para float
	Vdolar = parseFloat(Vdolar);
	Vcot = parseFloat(Vcot);

	var Vfinal = (isNaN(Vdolar) || isNaN(Vcot)) ? 0 : Vdolar * Vcot// Testa se os valores são do tipo NaN

	 
	document.getElementById('result').innerHTML='O valor convertido para Moeda Real: '+ Vfinal.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' });


}

// Funcionalidade 3
document.getElementById('form-day').addEventListener('submit', function(e)
{
  e.preventDefault();
  checkDayofWeek();
  
});

function checkDayofWeek()
{

  document.getElementById("showText").classList.remove("card-panel");
  document.getElementById("showText").classList.remove("teal");
  let showDay;
  let errorText = "";
  let correctDate = true;
  let leapYear = false;
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;


  if(year%4 ==0)
  {
    leapYear=true;
  }

  if(month>12 || month<1)
  {
    correctDate = false;
    errorText = "Mês inexistente."
  }
  if(month == 2)
  {
    if(leapYear)
    {
      if(day>29 || day <1)
        correctDate = false;
        errorText = errorText + "\nDia inexistente.";
    }
    else
    {
      if(day>28 || day <1)
        correctDate = false;
        errorText = errorText + "\nDia inexistente.";
    }

  }
  switch(month)
  {
    case '2':
      break;
    case '4':
    case '6':
    case '9':
    case '11':
      {
        if(day>30 || day<1)
          correctDate = false;
          errorText = errorText + "\nDia inexistente.";
        break;
      }
    default:
      {
        
        if(day>31 || day<1)
          correctDate = false;
          errorText = errorText + "\nDia inexistente.";
        break;
      }

  }
  
    let date = new Date(year,month-1, day);
    let dayOfWeek =date.getDay();
    if(correctDate)
    {
      switch(dayOfWeek)
      {
        case 0:
          {
            showDay = "Domingo";
            break;
          }
        case 1:
          {
            showDay = "Segunda-Feira";
            break;
          }
        case 2:
          {
            showDay = "Terça-Feira";
            break;
          }
        case 3:
          {
            showDay = "Quarta-Feira";
            break;
          }
        case 3:
          {
            showDay = "Quarta-Feira";
            break;
          }
        case 4:
          {
            showDay = "Quinta-Feira";
            break;
          }
        case 5:
          {
            showDay = "Sexta-Feira";
            break;
          }
        case 6:
          {
            showDay = "Sábado";
            break;
          }
      }
      document.getElementById("showText").innerHTML = "Esse dia é "+ showDay;
      //document.getElementById("showText").classList.add("card-panel");
      //document.getElementById("showText").classList.add("teal");
    }
    else
    {
      document.getElementById("showText").innerHTML = errorText
      //document.getElementById("showText").classList.add("card-panel");
      //document.getElementById("showText").classList.add("red");
    }
    
}

// Funcionalidade 4
function calcdesc(event) {
	event.preventDefault()

	var VPreco = 0;
	var VPorcentagem = 0;

	//acessar o que foi digitado
	var VPreco = document.getElementById('preco').value;
	var VPorcentagem = document.getElementById('porcentagem').value;

	// aplicando máscara com a biblioteca 'vanilla-masker'
	VMasker(document.querySelectorAll(".money-input")).maskMoney({

		separator: ',',
		delimiter: '.'

	});

	VPreco = removePontoVirgula(VPreco)
	VPorcentagem = removePontoVirgula(VPorcentagem)

	//converter de string para float
	VPreco = parseFloat(VPreco);
	VPorcentagem = parseFloat(VPorcentagem);

	var Vfinal = (isNaN(VPreco) || isNaN(VPorcentagem)) ? 0 : VPreco * (VPorcentagem/100) // Testa se os valores são do tipo NaN


	document.getElementById('resultporcentagem').innerHTML = 'O valor do desconto é: ' + Vfinal.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' });


}
function displayStuff(text) {
 let msgInicial = document.getElementById("msgInicial")

  if(text === "home")
  {
    document.getElementById("home").style.display = "block";
    msgInicial.innerHTML = "Olá, seja bem vindo à Situação de Aprendizagem 2"
  }
  else {
    document.getElementById("home").style.display = "none";
    
  }

  if(text === "idade")
  {
    document.getElementById("idade").style.display = "block";
    msgInicial.innerHTML = "Cálculo da idade a partir do ano de nascimento inserido pelo usuário"
  }
  else {
    document.getElementById("idade").style.display = "none";
    
  }
  
  if(text === "cambio")
  {
    document.getElementById("cambio").style.display = "block";
    conversor(event)
    msgInicial.innerHTML = "Cálculo do valor em reais a partir de um valor em dólar e cotação inserida pelo usuário"

  }
  else {
    document.getElementById("cambio").style.display = "none";
  }
  
  if(text === "dia")
  {
    document.getElementById("dia").style.display = "block";
    msgInicial.innerHTML = "Exibir o dia da semana a partir de uma data inserida pelo usuário"
  }
  else {
    document.getElementById("dia").style.display = "none";
  }
  
  if(text === "desconto")
  {
    document.getElementById("desconto").style.display = "block";
    calcdesc(event)
    msgInicial.innerHTML = "Calcular  o  resultado  a  partir  de  um  valor  base  e  o percentual de desconto indicados pelo usuário"
  }
  else {
    document.getElementById("desconto").style.display = "none";
  }
}
  



  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  // INICIANDO MODAL 
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

  function removePontoVirgula(valor){
  	 while(valor.indexOf(".") != -1){
        valor = valor.replace(".","")
    }
    valor = valor.replace(",",".")
   
    return valor
  }

