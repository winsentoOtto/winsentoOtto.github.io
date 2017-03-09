//task 1
var number = prompt('введите число');

	if ( Number.isInteger((+number)) && number != 0){
	var  degree = prompt('укажите степень');
		if ( Number.isInteger((+degree)) && degree != 0){
			console.log(number + ' в степени ' + degree +' = ', calculate(number, degree));
			console.log('_______________________________');
			console.log('Math.pow = ', Math.pow(number, degree), ';');
			alert(number + ' в степени ' + degree +' = ' + calculate(number, degree) );
		}else{
			alert('введите степень в виде целого числа!');
		}

	}else{
		alert('Необходмо ввести целое число!');
	}

//function

function calculate(){

	var result = number;

	for (var i = degree; i > 1; i--){
	result *= number;
	}

	return result;
}