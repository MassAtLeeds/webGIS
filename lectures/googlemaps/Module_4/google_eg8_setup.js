var map; // The map object
var myCentreLat = 53.8; var myCentreLng = -1.6;
var initialZoom = 10;
function infoCallback(infowindow, marker) { return function() {
infowindow.open(map, marker); };
}
function addMarker(myPos,myTitle,myInfo) { var marker = new google.maps.Marker({
position: myPos, map: map,
title: myTitle
});
var infowindow = new google.maps.InfoWindow({ content: myInfo
});
google.maps.event.addListener(marker, 'click', infoCallback(infowindow, marker));
}
function initialize() {
var latlng = new google.maps.LatLng(myCentreLat,myCentreLng); var myOptions = {
zoom: initialZoom,
center: latlng,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById("map_canvas"),
myOptions);
// First marker
var info = "<div class=infowindow><h1>Leeds</h1><p>Population: 715,402</p></div>";
addMarker(new google.maps.LatLng(53.7996388,-1.5491221),"Leeds",info);
// Second marker
var info = "<div class=infowindow><h1>Bradford</h1><p>Population: 467,665</p></div>";
addMarker(new google.maps.LatLng(53.7938530,- 1.7524422),"Bradford",info);
}