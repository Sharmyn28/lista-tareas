var o = 0;

//array para guardar las tareas

function addTask (mensaje){
	var lista = document.getElementById("lista");
	var string = "";
	var style = "";
	style += "<form action='#''>";
	style += "<p><input type='checkbox' id='test5'/>";
	style += "<label for='test5'>"+ mensaje +"</label></p></form>"; 
	string +="<div id='nuevo'>" +style+"</div>"
	lista.innerHTML += string;
	console.log(mensaje);
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

for(var i in initialTask){
	addTask(initialTask[i].title);
}