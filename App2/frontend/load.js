// Call List of requests 
//var ts=0;
loadRequestFromApp1();

function loadRequestFromApp1() {
    var url = 'http://localhost:3001/api/locationidentifer/load/';
    
	axios.get(url)
    .then(function(response){  
        var i;
        
        for (i = 0; i < response.data.length; i++) { 
            if (response.data[i].status == 0) {
                response.data[i].statusClient = "Chưa Định vị";
            }
            else {
                response.data[i].statusClient = "Đã Định vị";
            }

            console.log(response.data[i])
        }

        var source = document.getElementById("client-template").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(response.data);
        $('#clients').html(html);
    })
    .catch(function(err){
    	console.log("this is error get from frontend/load.js");
    	console.log(err);
    })
}

function insertGeocode() {
    var lat = document.getElementById("lat").innerHTML;
    var lng = document.getElementById("lng").innerHTML;
    var name = document.getElementById("ppName").innerHTML;
    var phone = document.getElementById("ppPhone").innerHTML;
    var address = document.getElementById("ppAddr").innerHTML;

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
        document.getElementById("geometric").innerHTML = "Đã Định Vị" ;
        alert("Reverse Geocode vị trí thành công")
    })
    .catch(function(err){
        console.log("post err r");
        console.log(err);
    })
}


