$(document).ready(function(){
    $('#newTask').click(function(){
        $('#newTaskModal').modal('show');
    });
    $('#newNote').click(function(){
        $('#newNoteModal').modal('show');
    });
   
    $('.close-alert').click(function(){
       $(this).closest('.card').hide()
    });
    $('#LoginButton').click(function(){
        $('#loginModal').modal('show');
    });
    $('#registerform').click(function(){
        $('#loginModal').modal('hide');
        $('#registerModal').modal('show');
    });
    $('#login_form').click(function(){
        $('#registerModal').modal('hide');
        $('#loginModal').modal('show');
    });
    $('#logoutButton').click(function(){
        $('#logout_modal').modal('show');
    });
    
    
});
function closeButtonClick(id){
    $('#del_modal').modal('show');
    $("#delete-button").prop('id', id);
}
function EditNote(Note,id,Text){
    $('#editNote').modal('show');
    $('#edit_notetitle').val(Note);
    $('textarea#edit_notetext').val(Text);
    $("#editbutton").prop('id', id);
    
}