var map; // The map object

var myCentreLat = 53.8;
var myCentreLng = -1.6;

var initialZoom = 10;






/* * The data that we want to map */ var markerData = [ {'name': 'Leeds', 'lat': 53.7996388, 'lng': -1.5491221, 'pop': 715402}, {'name': 'Bradford', 'lat': 53.7938530, 'lng': -1.7524422, 'pop': 467665} ];







function infoCallback(infowindow, marker) {
 return function() {
  infowindow.open(map, marker);
 };
}
  
function addMarker(myPos,myTitle,myInfo) {
  var marker = new google.maps.Marker({
    position: myPos, 
    map: map, 
    title: myTitle
  });
  var infowindow = new google.maps.InfoWindow({
    content: myInfo
  });
  google.maps.event.addListener(marker, 'click', infoCallback(infowindow, marker));
}
  
function initialize() {
  var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
  var myOptions = {
    zoom: initialZoom,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);

  




for (id in markerData) { var info = "<div class=infowindow><h1>" + markerData[id].name + "</h1><p>Population: " + markerData[id].pop + "</p></div>"; addMarker(new google.maps.LatLng(markerData[id].lat,markerData[id].lng), markerData[id].name,info); }







}