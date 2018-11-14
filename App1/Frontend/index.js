$(function () {
    $("#button").click(function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var phone = $('#phone').val()
        var address = $('#address').val();
        var note = $('#note').val();

        var data = {};
        data.name = name;
        data.phone = phone;
        data.address = address;
        data.note = note;
        $.ajax({
            url: 'http://localhost:3000/api/users',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (data) {
                alert('success');
            },
            error: function () {
                alert("error");
            }
        });
    });
});