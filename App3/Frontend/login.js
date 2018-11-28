$(function() {
    $("button").click(function(e) {
        e.preventDefault();
          var user = $('#email').val();
          var password =$('#password').val();  
          var data = {};
          data.user = user;
          data.pwd = password;
        $.ajax({
            url: 'http://localhost:3000/api/users/login',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(data) {
                    alert('success');
                    window.location = "index.html"                          
                    },
            error:function() {
                alert("error");
            }
        });
    });
});