////////////////////////////////////////////////////////////////////////
//////////////////// - Dia da semana início - //////////////////////////
///////////////////////////////////////////////////////////////////////
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
            showDay = "Segunda";
            break;
          }
        case 2:
          {
            showDay = "Terça";
            break;
          }
        case 3:
          {
            showDay = "Quarta";
            break;
          }
        case 3:
          {
            showDay = "Quarta";
            break;
          }
        case 4:
          {
            showDay = "Quinta";
            break;
          }
        case 5:
          {
            showDay = "Sexta";
            break;
          }
        case 6:
          {
            showDay = "Sábado";
            break;
          }
      }
      document.getElementById("showText").innerHTML = showDay;
      document.getElementById("showText").classList.add("card-panel");
      document.getElementById("showText").classList.add("teal");
    }
    else
    {
      document.getElementById("showText").innerHTML = errorText
      document.getElementById("showText").classList.add("card-panel");
      document.getElementById("showText").classList.add("red");
    }
    
}

////////////////////////////////////////////////////////////////////////
//////////////////// - Dia da semana fim - //////////////////////////
///////////////////////////////////////////////////////////////////////



function displayStuff(text) {
 
  if(text === "home")
  {
    document.getElementById("home").style.display = "block";
  }
  else {
    document.getElementById("home").style.display = "none";
    
    }

  if(text === "idade")
  {
    document.getElementById("idade").style.display = "block";
  }
  else {
    document.getElementById("idade").style.display = "none";
    
    }
  
  if(text === "cambio")
  {
    document.getElementById("cambio").style.display = "block";
  }
  else {
    document.getElementById("cambio").style.display = "none";
    }
  
  if(text === "dia")
  {
    document.getElementById("dia").style.display = "block";
  }
  else {
    document.getElementById("dia").style.display = "none";
    }
  
  if(text === "desconto")
  {
    document.getElementById("desconto").style.display = "block";
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
  
 
