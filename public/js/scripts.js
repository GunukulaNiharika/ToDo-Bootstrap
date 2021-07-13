$(document).ready(function(){
    $('#newTask').click(function(){
        $('#newTaskModal').modal('show');
    });
    $('#newNote').click(function(){
        $('#newNoteModal').modal('show');
    });
   
    $('.close').click(function(){
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