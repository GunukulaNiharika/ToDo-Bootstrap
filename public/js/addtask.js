const addform=document.getElementById("addTaskForm");
const task_title_error=document.getElementById("task_title_error");


addform.addEventListener('submit', async(e)=>{
e.preventDefault();
task_title_error.textContent='';

const title=addform.tasktitle.value;
const date=addform.taskdate.value;
const priority=addform.important.value;
if(title == null || title == ""){
    task_title_error.textContent = 'Title cannot be blank';
    return false;
  }
  else if(title.length>10){
    task_title_error.textContent = 'tasktitle should be lessthan 10 characters';
    return false;
}
try {
    const res = await fetch('/addtask', { 
      method: 'POST', 
      body: JSON.stringify({ title, date, priority }),
      headers: {'Content-Type': 'application/json'}
    });
    
    const data = await res.json();
    if (data.user) {
      location.assign('/');
    }
  }
  catch (err) {
    console.log(err);
  }

});

