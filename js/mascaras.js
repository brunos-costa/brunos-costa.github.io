$(document).ready(function(){
	$("#dolares").maskMoney({
      	allowNegative: true, 
    	thousands:'.', 
    	decimal:',', 
    	affixesStay: false
    });

    $("#cot").maskMoney({
    	allowNegative: true, 
    	thousands:'.', 
    	decimal:',', 
    	affixesStay: false
    });
})