const note_title_error=document.getElementById("note_title_error");
const note_text_error=document.getElementById("note_text_error");
const noteForm=document.getElementById("addNotesForm");

noteForm.addEventListener('submit', async(e)=>{
    e.preventDefault();
    note_title_error.textContent='';
    note_text_error.textContent='';
    
    const Note=noteForm.notetitle.value;
    const Text=noteForm.notetext.value;
    if(Note == null || Note == ""){
        note_title_error.textContent = 'Title cannot be blank';
        return false;
      }
      else if(Note.length>10){
        note_title_error.textContent = 'notetitle should be lessthan 10 characters';
        return false;
    }
    else if(Text == null || Text == ""){
        note_text_error.textContent = 'Enter Some Text';
        return false;
      }
    try {
        const res = await fetch('/addnote', { 
          method: 'POST', 
          body: JSON.stringify({ Note, Text }),
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