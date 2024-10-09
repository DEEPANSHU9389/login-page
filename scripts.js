$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();

        var email = $('#email00@gmail.com').val();
        var password = $('#password').val();

        if(email === '' || password === '') {
            alert('Please fill all the fields');
        } else {
            alert('Login successful!');
            // You can send form data to the server using AJAX if needed
            // $.post('server-endpoint', { email: email00@gmail.com, password: password });
        }
    });
});