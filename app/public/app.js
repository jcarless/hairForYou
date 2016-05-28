$('#notify').on('click', function(){
   var userData = {
       email: $('#email').val().trim()
   };
    console.log(email);

    var currentURL = window.location.origin;

    $.post(currentURL + "/", userData,
        function(data){

        });




});