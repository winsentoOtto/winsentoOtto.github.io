(function($){

//AJAX request
$('.button').on('click', search);

	function search(e){
		e.preventDefault();
		$('img').remove();
		var $searchText = $('.search-input').val();

			$.ajax({
				url: 'https://pixabay.com/api',
				method: 'GET',
				dataType: 'jsonp',
				data:{
					key: '2745755-bc692754531960a8fc0e56dd1',
					q: $('.search-input').val(),
					image_type: 'photo',
					per_page: 10,
				},
				success: function(data){
					var $results = data.hits;
					for (var i = 0; i<data.hits.length; i++){
					$('.results').append('<img src="'+$results[i].previewURL+'">');
					}
				},
				error: function(){
					alert('error occured');
				}
		});
	};

})(jQuery);



//prototypes
function Human(name, age, sex, height, weight){
	this.name = name,
	this.age = age,
	this.sex = sex,
	this.height = height,
	this.weight = weight
};

function Worker(name, age, sex, height, weight, workPlace, salary) {
	Human.apply(this, arguments);	
	this.workPlace = workPlace;	
	this.salary = salary;
	this.doWork = function(act){		
		console.log(act)
	};	
};

function Student(name, age, sex, height, weight, university, getMoney, watch){
	Human.apply(this, arguments);	
	this.university = university;
	this.getMoney = getMoney;
	this.watch = function(act){
		console.log(act)
	};
}

Worker.prototype = new Human();
Student.prototype = new Human();

//workers
var worker1 = new Worker('Jack', 32, 'male', 182, 80, 'factory', 10000);
console.log(worker1);
worker1.doWork('worker is working...');

var worker2 = new Worker('John', 22, 'male', 185, 90, 'factory', 8000);
console.log(worker2);
worker2.doWork('worker is doing work...');

//students
var student1 = new Student('Jack', 18, 'male', 182, 80, 'Stanford University', 1000);
console.log(student1);
student1.watch('this student is reading');

var student2 = new Student('Jack', 19, 'male', 177, 70, 'Oxford University', 3000);
console.log(student2);
student2.watch('this student is studying');