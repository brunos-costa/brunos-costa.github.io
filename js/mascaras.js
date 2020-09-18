$(document).ready(function(){
	$("#dolares").maskMoney({
      	allowNegative: false, 
    	thousands:'.', 
    	decimal:',', 
    	affixesStay: false
    });

    $("#cot").maskMoney({
    	allowNegative: false, 
    	thousands:'.', 
    	decimal:',', 
    	affixesStay: false
    });
})