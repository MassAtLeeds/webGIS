var map; // The map object
var myCentreLat = 53.8; 
var myCentreLng = -1.6;
var initialZoom = 9;

function infoCallback(infowindow, marker) { return function() {
infowindow.open(map, marker); };
}

function addMarker(myPos,myTitle,myInfo) { var marker = new google.maps.Marker({

position: myPos, map: map,
title: myTitle
});

var infowindow = new google.maps.InfoWindow({
content: myInfo });

google.maps.event.addListener(marker, 'click', infoCallback(infowindow, marker));
}

function initialize() {
var latlng = new google.maps.LatLng(myCentreLat,myCentreLng); var myOptions = {
zoom: initialZoom,
center: latlng,
mapTypeId: google.maps.MapTypeId.ROADMAP
};

map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
	for (id in markerData) {
var info = "<div class=infowindow><h1>" + markerData[id].name +
"</h1><p>Population: " + markerData[id].pop + "</p></div>"; addMarker(new
google.maps.LatLng(markerData[id].lat,markerData[id].lng),markerData[id].name,info);
} }

