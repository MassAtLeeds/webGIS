var map; // The map object

var myCentreLat = 53.8;
var myCentreLng = -1.6;

var initialZoom = 12;

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
  var infowindow = new google.maps.InfoWindow({content: myInfo});
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


  for (id in os_markers) {
      var info = "<div class=infowindow><h1>" + os_markers[id].title + "</h1><p>Caption: "
       + os_markers[id].caption + "</p></div>";

      // Convert co-ords
      var osPt = new OSRef(os_markers[id].easting,os_markers[id].northing);
      var llPt = osPt.toLatLng(osPt);
      llPt.OSGB36ToWGS84();

      addMarker(new google.maps.LatLng(llPt.lat,llPt.lng),os_markers[id].title,info);
  }

}

