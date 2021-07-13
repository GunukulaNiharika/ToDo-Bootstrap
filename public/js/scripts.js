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

    
});