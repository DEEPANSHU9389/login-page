$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); 
        alert('Login form submitted!'); 
    });
});