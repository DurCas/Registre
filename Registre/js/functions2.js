$(document).ready(function(){ 
  $('#findLoc').click(function(){
    var geocoder = new google.maps.Geocoder();  
    var address=$("#validationNom2").val()+" "+$("#validationNumero").val(); 
    alert(address);
    geocoder.geocode( { 'address': address}, function(results, status) {  
      if (status == google.maps.GeocoderStatus.OK) { 
        latitude = results[0].geometry.location.lat();  
        longitude = results[0].geometry.location.lng();  
        alert("Latitud: " + latitude + " Longitud: " + longitude);
        var pos = new google.maps.LatLng(latitude,longitude);      
        /*
        var element2 = document.getElementById("lng");
        element2.val() = longitude;
        */
        $("#lng").val(longitude);
        $("#lat").val(latitude);

        var marker = new google.maps.Marker({      
          position: pos,
          map: map,
          title: 'Aquí'
        });
      }
    });  
  });
});