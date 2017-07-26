var tasks =[];
function Task (title, duration){
	this.title = title;
	this.duration = duration;
	this.isCompleted = false;

	this.newTask = function (){
	//.checkbox(placeholder"Hola");
		var newT = prompt("Escriba nueva tarea");
		toHTML(newT);
		tasks.push(newT);
	}
}


//array para guardar las tareas

function toHTML (arr){
	var lista = document.getElementById("lista");
	var string = "";
	var style = "";
	for(var i in arr){
	   lista.innerHTML += '<form action="#"><p><input type="checkbox" id="'+i+'"> <label for="'+i+'">'+arr[i].title+'</label></p></form>';
		//string +="<div id='nuevo'>" +style+"</div>"
		//lista.innerHTML += style;
	}
	
	console.log(arr[i]);
	return true;
}



var initialTask =[
	  {
	    "userId": 1,
	    "id": 1,
	    "title": "Delectus aut autem",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 2,
	    "title": "Quis ut nam facilis et officia qui",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 3,
	    "title": "Fugiat veniam minus",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 4,
	    "title": "Et porro tempora",
	    "completed": true
	  },
	  {
	    "userId": 1,
	    "id": 5,
	    "title": "Laboriosam mollitia et enim quasi adipisci quia provident illum",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 6,
	    "title": "Qui ullam ratione quibusdam voluptatem quia omnis",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 7,
	    "title": "Illo expedita consequatur quia in",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 8,
	    "title": "Quo adipisci enim quam ut ab",
	    "completed": true
	  },
	  {
	    "userId": 1,
	    "id": 9,
	    "title": "Molestiae perspiciatis ipsa",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 10,
	    "title": "Illo est ratione doloremque quia maiores aut",
	    "completed": true
	  },
	  {
	    "userId": 1,
	    "id": 11,
	    "title": "Vero rerum temporibus dolor",
	    "completed": true
	  },
]

	toHTML(initialTask);