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
  var checkbox=document.getElementsByName(id);
  console.log(checkbox.name);
  if(checkbox.checked){
    console.log("checked");
  }
  else{
    console.log("not checked");
  }


  // try {
  //   const res = await fetch('/checktask', { 
  //     method: 'POST', 
  //     body: JSON.stringify({id}),
  //     headers: {'Content-Type': 'application/json'}
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   if (data.status) {
  //     if(page=="home")
  //       location.assign('/');
  //     else if(page=="today")
  //       location.assign('/today');
  //   }
  //   else {
  //      console.log('check check');
  //   }
  // }
  // catch (err) {
  //   console.log(err);
  // }
}