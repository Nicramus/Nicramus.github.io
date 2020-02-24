/**
 * sianowska custom javascript file
 */

 /**
  * map initialization
  */
 function initMap() {
    //52.4350337,16.810059
    var sianowskaLocation = {lat: 52.4350337, lng: 16.810059};
    var mapContainer = document.getElementById('map');
    var map = new google.maps.Map(mapContainer, {zoom:4, center:sianowskaLocation});
    var marker = new google.maps.Marker({position: sianowskaLocation, map: map});
    
    console.log("dupa");	
}

initMap();