// Call List of requests 
loadRequestFromApp1();

function loadRequestFromApp1() {
	document.getElementById('reserveGeocode').style.visibility='hidden';
	axios.get('http://localhost:3000/api/locationidentifer/load/')
    .then(function(response){   	
        var source = document.getElementById("client-template").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(response.data);
        $('#clients').html(html);
    })
    .catch(function(err){
    	console.log("this is error");
    	console.log(err);
    })
}

function insertGeocode() {
    console.log("insertGeo")
    var lat = document.getElementById("lat").innerHTML;
        var lng = document.getElementById("lng").innerHTML;
        var name = document.getElementById("name").innerHTML;
        var phone = document.getElementById("phone").innerHTML;
        var address = document.getElementById("address").innerHTML;

        var clientinfo = {};
        clientinfo.name = name;
        clientinfo.phone= phone;
        clientinfo.address = address;
        clientinfo.latitude = lat;
        clientinfo.longtitude = lng;

        console.log(clientinfo)

    axios({
          method: 'POST',
          url: 'http://localhost:3000/api/locationidentifer/reservegeocode/',
          data: clientinfo,
          contentType: 'application/json'
    })
    .then(function(response) {
        console.log("thong tin response")
        console.log(response);

    })
    .catch(function(err){
        console.log("post err r");
        console.log(err);
    })
}


