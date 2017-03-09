//task 2

check
function check(){
	var arr = new Array();

	for (var i = 0; i < 5; i++) {
		arr[i] = prompt('введите имя для пользователя № '+(i+1));
	}
	console.log(arr);

	var yourName = prompt("Отлично, а теперь имя для авторизации");

for (var i = 0; i < 5; i++) {

	if (yourName == arr[i]){
		var n = 1;
		alert(yourName + ', успешная авторизация');
		break;
	}
}
return n;
}

if(check() !== 1){
	alert('Упс, нет такого пользователя');
}
