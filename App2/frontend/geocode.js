  // Call Geocode
 // geocode();

 function locationIdentifier(address) {
      alert(address);
      // Dùng axios lấy thông tin location
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: address,
            key: "AIzaSyD8bQzMru84BpSm9d9pl6bNWn8U10Ru9U0"
          }
      })
      .then(function(response) { // Nếu thành công
            var map;
            
            // Geometry
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;

            //Khai bao cac thuoc tinh của bản đồ
            var mapProp = {
                //Tam ban do, quy dinh boi kinh do va vi do
                center: new google.maps.LatLng(lat, lng),
                //set default zoom cua ban do khi duoc load
                zoom: 15,
                //Dinh nghia type
                mapTypeId: google.maps.MapTypeId.ROADMAP    
            };

            // Neo bản đồ vào html
            map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

            var myLatLng = {lat, lng};
           
            // Đánh dấu núm đỏ
            var marker = new google.maps.Marker({
                map : map,
                position: myLatLng,
                draggable: true,           
            });

            google.maps.event.addListener(marker, 'dragend', function() {
                var marker_pos = marker.getPosition();
                
                document.getElementById('lat').innerHTML = marker_pos.lat();
                document.getElementById('lng').innerHTML = marker_pos.lng();

                console.log(marker_pos.lat());
                console.log(marker_pos.lng());
            });

            // Output to app
            // Hiển thị ra html 
            var geometryOutput = `
                <ul class="list-group" >
                  <li id="lata" class="list-group-item"><strong>Latitude: </strong>${lat}</li> 
                  <li id="long" class="list-group-item"><strong>Longtitude: </strong>${lng}</li> 
                </ul>
              `;
            //Truyen tham so cho cac thuoc tinh Map cho the div chua Map
            document.getElementById('address-geometry').innerHTML = geometryOutput;
            
            document.getElementById('reserveGeocode').style.visibility='visible';
      })
      .catch(function(err) { // Nếu thất bại
          console.log("err")
          console.log(err);
      })
  }

  