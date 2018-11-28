$(function() {
    $.ajax({
        url: 'http://localhost:3000/api/webapp3',
        type: 'GET',
        dataType: 'json',
        timeout: 10000
    }).done(function(dt) {
        console.log(dt);
        var source = document.getElementById("data-template").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(dt);
        $('#data').html(html);
    })
});

  // Call Geocode
 // geocode();

 function bando(address) {
    // Dùng axios lấy thông tin location
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: address,
          key: "AIzaSyD8bQzMru84BpSm9d9pl6bNWn8U10Ru9U0"
        }
    })
    .then(function(response) { // Nếu thành công
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('googleMap'), {
          zoom: 15,
          center: {lat: 0, lng: 0}
        });
        directionsDisplay.setMap(map);
        var onChangeHandler =calculateAndDisplayRoute(directionsService, directionsDisplay);
        document.getElementById('start').addEventListener('change', onChangeHandler);
        document.getElementById('end').addEventListener('change', onChangeHandler);
    })
    .catch(function(err) { // Nếu thất bại
        console.log("err")
        console.log(err);
    })
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: document.getElementById('start').value,
      destination: document.getElementById('end').value,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }