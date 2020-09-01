 var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 41.3870154, lng: 2.1700471000000334
        },
        zoom: 11,
        styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
    });
} 

$(document).ready(function(){ 
    var nom_ok;
    var cognom_ok;
    var dni_ok;
    var dni;
    var username;
   
 /*
    $('#form-user-register').submit(function(e) {
        e.preventDefault();

        var caracters_alfa=/A-Za-z/;
        var nom =$("#validationNom").val();
        if(nom==""){
            $("#validationNom").addClass("is-invalid");
            $("#feedbackNom").html("El camp no pot estar buit");
            $("#feedbackNom").addClass("invalid-feedback");
        } else if(!nom.match(caracters_alfa)){
            $("#validationNom").addClass("is-invalid");
            $("#feedbackNom").html("El nom només pot contenir caràcters alfabètics, guions i espais");
            $("#feedbackNom").addClass("invalid-feedback");
        } else {            
            $("#validationNom").removeClass("is-invalid").addClass("is-valid");
            $("#feedbackNom").html("");
        }
      
        var cognoms =$("#validationCognoms").val();
        if(cognoms==""){
            $("#validationCognoms").addClass("is-invalid");
            $("#feedbackCognoms").html("El camp no pot estar buit");
            $("#feedbackCognoms").addClass("invalid-feedback");
        } else {
            $("#validationCognoms").removeClass("is-invalid").addClass("is-valid");
        }

        var dni =$("#validationDNI").val();
        if(dni==""){
            $("#validationDNI").addClass("is-invalid");
            $("#feedbackDNI").html("El camp no pot estar buit");
            $("#feedbackDNI").addClass("invalid-feedback");
        } else if (dni.lenght!=9){
            $("#validationDNI").addClass("is-invalid");
            $("#feedbackDNI").html("Revisa que el camp contingui 8 números i una lletra");
            $("#feedbackDNI").addClass("invalid-feedback");
        } else {
            $("#validationDNI").removeClass("is-invalid").addClass("is-valid");
        }         
    });*/

    $('#validationNom').focusout(function(e){
        e.preventDefault();
        var nom =$("#validationNom").val();
        if(nom==""){
            $("#validationNom").addClass("is-invalid");
            $("#feedbackNom").html("El camp no pot estar buit");
            $("#feedbackNom").addClass("invalid-feedback");
            nom_ok=0;
            $('#btnUsername').addClass("d-none");
        } else {            
            $("#validationNom").removeClass("is-invalid").addClass("is-valid");
            $("#feedbackNom").html("");
            nom_ok=1;
            if (nom_ok==1 && cognom_ok==1 && dni_ok==1){
                $('#btnUsername').removeClass("d-none");
            }
        }
    });

    $('#validationCognoms').focusout(function(e){
        e.preventDefault();
        var cognoms =$("#validationCognoms").val();
        if(cognoms==""){
            $("#validationCognoms").addClass("is-invalid");
            $("#feedbackCognoms").html("El camp no pot estar buit");
            $("#feedbackCognoms").addClass("invalid-feedback");
            cognom_ok=0;
            $('#btnUsername').addClass("d-none");
        } else {
            $("#validationCognoms").removeClass("is-invalid").addClass("is-valid");
            cognom_ok=1;
            if (nom_ok==1 && cognom_ok==1 && dni_ok==1){
                $('#btnUsername').removeClass("d-none");
            }
        }
    });

    $('#validationDNI').focusout(function(e){
        e.preventDefault();
        var dni =$("#validationDNI").val();
        var dniRegEx=/[0-9]{8}[A-Z]{1}/;
        if(dni==""){
            $("#validationDNI").addClass("is-invalid");
            $("#feedbackDNI").html("El camp no pot estar buit");
            $("#feedbackDNI").addClass("invalid-feedback");
            dni_ok=0;
            $('#btnUsername').addClass("d-none");
        } else if (!dni.match(dniRegEx)){
            $("#validationDNI").addClass("is-invalid");
            $("#feedbackDNI").html("Revisa que el camp contingui 8 números i una lletra majúscula");
            $("#feedbackDNI").addClass("invalid-feedback");
        }
        else {
            $("#validationDNI").removeClass("is-invalid").addClass("is-valid");
            dni_ok=1;
            if (nom_ok==1 && cognom_ok==1 && dni_ok==1){
                $('#btnUsername').removeClass("d-none");
            }
        }
    });

    $('#btnUsername').click(function(){
        var nom     = $("#validationNom").val();
        var cognoms = $("#validationCognoms").val();
        var dni     = $("#validationDNI").val();
        
        var pos1 = nom.slice(0,1).toLowerCase();
        var pos2 = cognoms.slice(0,4);
        var pos3 = "";
    
        for (var i = 0; i <= dni.length; i += 2) {
            pos3 += dni[i]; 
        }
        var nomemail=pos1+pos2+pos3;
        $("#validationUsername").val(nomemail);
    });

    $('#validationEmail').focusout(function(e){
        e.preventDefault();
        var email=$("#validationEmail").val();
        var emailRegEx=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
        if(email==""){
            $("#validationEmail").addClass("is-invalid");
            $("#feedbakEmail").html("El camp no pot estar buit");
            $("#feedbakEmail").addClass("invalid-feedback");
        } else if (!email.match(emailRegEx)){
            $("#validationEmail").addClass("is-invalid");
            $("#feedbakEmail").html("Revisa que l'email que hagis escrit sigui correcte");
            $("#feedbakEmail").addClass("invalid-feedback");
        }
        else {
            $("#validationEmail").removeClass("is-invalid").addClass("is-valid");
        }
    });

    $('#validationTelf').focusout(function(e){
        e.preventDefault();
        var telf=$("#validationTelf").val();
        var telfRegEx=/[0-9]{9}/;
        if(telf==""){
            $("#validationTelf").addClass("is-invalid");
            $("#feedbackTelf").html("El camp no pot estar buit");
            $("#feedbackTelf").addClass("invalid-feedback");
        } else if (!telf.match(telfRegEx)){
            $("#validationTelf").addClass("is-invalid");
            $("#feedbackTelf").html("Revisa que l'email que hagis escrit sigui correcte");
            $("#feedbackTelf").addClass("invalid-feedback");
        }
        else {
            $("#validationTelf").removeClass("is-invalid").addClass("is-valid");
        }
    });

    $('#select_barri').prop('disabled', true);
  
    $('#select_districte').change(function() {
        var districte =  $('#select_districte option:selected').val();
        //var districte2 =  $('#select_districte option:selected').innerHTML();
        //$('#select_barri').prop('disabled', false);
        /*ARA ENVIAR EL DISTRICTE A PHP AMB UN SERVEI I QUE ENS RETORNI ELS BARRIS DONAT UN DISTRICTE*/
        //alert(districte);

        $.ajax({
            method: "POST",
            //Des del document php no des de functions.js 
            url: "php/getbarris.php",
            //1. Clauamb la que passo el valor
            //2. districte-> valor recollit f.121 alert(districte)
            data: { idDistricte: districte }
        })
        .done(function(data){
            //alert(data);
            $("#select_barri").html(data);
            $("#select_barri").prop("disabled", false);
        });
    });

    $('#geoLoc').click(function(){
        var icon = {
            url: './media/iconhouse.jpg',
            scaledSize: new google.maps.Size(25, 25)
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };  
        map.setCenter(pos);
        map.setZoom(9);        
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            icon: icon
        });
      });
    }  
    });

    $('#validationNom1').focusout(function(e){
        e.preventDefault();
        var nom1 = $('#validationNom1').val();
    });

    $('#validationVia').focusout(function(e){
        e.preventDefault();
        var via = $('#validationVia').val();
        $("#infoVia").html(via); 

    });

    $('#validationNom2').focusout(function(e){
        e.preventDefault();
        var nom2 = $('#validationNom2').val();
        $("#infoNom").html(nom2); 

    });

    $('#validationNumero').focusout(function(e){
        e.preventDefault();
        var num = $('#validationNumero').val();
        $("#infoNum").html(num); 

    });

    $('#validationPis').focusout(function(e){
        e.preventDefault();
        var pis = $('#validationPis').val();
        $("#infoPis").html(pis); 

    });

    $('#validationEscala').focusout(function(e){
        e.preventDefault();
        var escala = $('#validationEscala').val();
        $("#infoEscala").html(escala); 

    });

    $('#validationPorta').focusout(function(e){
        e.preventDefault();
        var porta = $('#validationPorta').val();
        $("#infoPorta").html(porta); 

    });

    $('#validationCP').focusout(function(e){
        e.preventDefault();
        var cp = $('#validationCP').val();
        $("#infoCP").html(cp);
    });

    $('#select_districte').focusout(function(e){
        e.preventDefault();
        var dis = $('#select_districte option:selected').text();
        $("#infoDis").html(dis);
        //alert(dis);
    });

    $('#select_barri').focusout(function(e){
        e.preventDefault();
        var barri = $('#select_barri option:selected').text();
        $("#infoBarri").html(barri);
        //alert(dis);
    });

    $('#registrar').click(function(e){
      e.preventDefault();
      var id      = $('#validationUsername').val();
      var nom     = $('#validationNom').val();
      var cognoms = $('#validationCognoms').val();
      var email = $('#validationEmail').val();
      var telf = $('#validationTelf').val();
      
      alert('id: ' +id);
      alert(nom);
      alert(cognoms);
      alert(email);
      alert(telf);

      $.ajax({
        method: "POST",
        //Des del document php no des de functions.js 
        url: "php/funcions2.php",
        //1. Clauamb la que passo el valor. El que recollirÃ© al php
        //2. districte-> valor recollit f.121 alert(districte)
        data: { id:id, nom:nom, cognoms:cognoms, email:email, telf:telf }
      }).done(function(data){
        alert(data);
        $(".container h4").html(data);
      });
    });
});

tinymce.init({
    selector: '#mytextarea'
});