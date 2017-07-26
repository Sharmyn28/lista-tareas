
function Task (title, duration){
	this.title = title;
	this.duration = duration;
	this.isCompleted = false;
}

function List(){
	this.tasks =[];
	this.initialTasks =[
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

	this.add = function(task){
		this.tasks.push(task);
		//this.initialTasks.push(task);
	}

	this.toHTML = function (arr, numL){
		var lista = document.getElementById("lista");
		var listaNueva = document.getElementById("lista nueva");
		var string = "";
		var style = "";
		
		//var arr = this.initialTasks;
		if(numL == 1){
			for(var i in arr){
		   		lista.innerHTML += '<form action="#"><p><input type="checkbox" id="'+i+'"> <label for="'+i+'">'+arr[i].title+'</label></p></form>';
			}
			return true;
		}else if (numL == 2){
			this.limpiar();
			for(var j = 11 ; j < (11 + arr.length); j++){
				for(var x in arr)
		   		listaNueva.innerHTML += '<form action="#"><p><input type="checkbox" id="'+j+'"> <label for="'+j+'">'+arr[x].title+'</label></p></form>';
		   		return true;
			}
		}
		
		
	}

	this.limpiar = function(){
		document.getElementById("lista nueva").innerHTML = "<strong>"+"Nuevas Tareas:"+ "</strong>";
	}

	this.newTask = function (){
	//.checkbox(placeholder"Hola");
		var newTT = prompt("Escriba nueva tarea");
		var newTD = prompt("Escriba la duracion de la tarea");
		newTD = parseInt(newTD);
		var newT = new Task(newTT, newTD);
		this.add(newT);
	}

	this.isDone = function(event){
		if (event.target.tagName === 'p') {
      		event.target.classList.toggle('checked');
    	}
	}
}


var list = new List();
printInitial();
check();

var btnAdd= document.getElementById("btnAdd");
btnAdd.onclick = function (){
	var newT = list.tasks;
	list.newTask();
	list.toHTML(newT,2);
	//console.log(task);
};

function printInitial (){
	var initial = list.initialTasks;
	list.toHTML(initial,1);
}


function check() {
  var actv = document.getElementsByTagName("p");
  for (var i in actv) {
    actv[i].onclick = function (event) {
      list.isDone(event);
    }
  }
}

/*
function deleteTask(){

}*/