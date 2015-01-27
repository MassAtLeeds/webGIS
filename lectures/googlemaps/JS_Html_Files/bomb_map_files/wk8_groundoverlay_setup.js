/*
 * The starting position and initial zoom factor
 */

var centreLat = 51.5615;
var centreLong = -0.088;
var initialZoom = 15;

// Define the map object
var map;

/*
 * init() function - this is where we start
 */
function init() {

    var latlng = new google.maps.LatLng(centreLat, centreLong);
    var myOptions = {
      zoom: initialZoom,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);

    var imageBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(51.55546,-0.09130),
      new google.maps.LatLng(51.56590,-0.07980)
    );

    var myOverlay = new google.maps.GroundOverlay("bomb_crop.jpg", imageBounds);
    myOverlay.setMap(map);
}
