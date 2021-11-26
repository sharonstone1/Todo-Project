// create an emplty variable to store data
let tasks = []

// create a tasks function
function newTasks(event){
 
  let task = document.querySelector('#todo').value;

  // update our localstorage
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // create a list item
  const li = document.createElement('li');
  // add the list on the DOM after creating it
  li.innerHTML = task;
  document.querySelector('#tasks').append(li);

  // clear the screen after submitting the item
  document.querySelector('#todo').value = '';

  // disabled the submit input after submitting
  document.querySelector('#submit').disabled = true;

  // prevent default of event 

  event.preventDefault()

}

// add an event listener to listen the event 
document.addEventListener('DOMContentLoaded', function(){

  // disabled the submit input when the document is loaded
  document.querySelector('#submit').disabled = true;

  // create a function to disable the submit input after submitting it
  document.querySelector('#todo').onkeyup = ()=>{
    if(document.querySelector('#todo').value.length > 0){
      document.querySelector('#submit').disabled =false
    }else{
      document.querySelector('#submit').disabled =true
    }
    
  }

  // running the newTasks function when the submit input is submitted
  document.querySelector('form').onsubmit = newTasks;
  tasks_stored = localStorage.getItem('tasks')
  if (tasks_stored) {
    tasks = JSON.parse(tasks_stored)
    tasks.forEach((task) => {
      // create a list item in the HTML view
      const li = document.createElement('li');
      // add the list on the DOM after creating it
      li.innerHTML = task;
      document.querySelector('#tasks').append(li);      
    })
  } else { 
    tasks = []
  }
})