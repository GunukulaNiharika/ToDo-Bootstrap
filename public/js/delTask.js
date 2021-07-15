async function deleteTask(id,page){
    try {
        const res = await fetch('/deltask', { 
          method: 'POST', 
          body: JSON.stringify({id}),
          headers: {'Content-Type': 'application/json'}
        });
        const data = await res.json();
        console.log(data);
        if (data.status) {
            if(page=="home")
                location.assign('/');
            else if(page=="today")
                location.assign('/today');
        }
        else {
           console.log('couldnt be deleted');
        }
      }
      catch (err) {
        console.log(err);
      }
}
async function deleteNote(id,page){
    try {
        const res = await fetch('/delnote', { 
          method: 'POST', 
          body: JSON.stringify({id}),
          headers: {'Content-Type': 'application/json'}
        });
        const data = await res.json();
        console.log(data);
        if (data.status) {
            location.assign('/notes');
        }
        else {
           console.log('couldnt be deleted');
        }
      }
      catch (err) {
        console.log(err);
      }
}
async function ifChecked(id,page){
  var checkbox=document.getElementById(id);
 
  var is_Checked;
  if(checkbox.checked){
    is_Checked=true;
  }
  else{
    is_Checked=false;
  }
 var _id=checkbox.name;

  try {
    const res = await fetch('/checktask', { 
      method: 'POST', 
      body: JSON.stringify({_id,is_Checked}),
      headers: {'Content-Type': 'application/json'}
    });
    const data = await res.json();
    console.log(data);
    if (data.status) {
      if(page=="home")
        location.assign('/');
      else if(page=="today")
        location.assign('/today');
    }
    else {
       console.log('check check');
    }
  }
  catch (err) {
    console.log(err);
  }
}
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.id;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}