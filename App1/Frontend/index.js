$().ready(function() {
	$("#myForm").validate({
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		rules: {
			"name": {
				required: true,
				maxlength: 50
			},
			"phone": {
				required: true,
				minlength: 10,
				maxlength: 10
			},
			"address": {
				required: true
			}
		},
		messages: {
			"name": {
				required: "Bắt buộc nhập tên",
				maxlength: "Hãy nhập tối đa 50 ký tự"
			},
			"phone": {
				required: "Bắt buộc nhập số điện thoại",
				minlength: "Hãy nhập số điện thoại bao gồm 10 số",
				maxlength: "Hãy nhập số điện thoại bao gồm 10 số"
			},
			"address": {
				required: "Bắt buộc phải nhập địa chỉ"
			}
		},
		submitHandler: function() {
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

					var socket = io('http://localhost:3001');
                    var msg="have sign" 
                    
                    // Truyền tải tín hiệu
                    socket.emit("app1-request-server", msg);
				},
				error: function () {
					alert("error");
				}
			});
		}
	});
});
	
	



