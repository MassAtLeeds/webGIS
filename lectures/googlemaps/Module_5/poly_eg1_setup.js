var map; // The map object

var myCentreLat = 53.81;
var myCentreLng = -1.52;

var initialZoom = 12;
  
function initialize() {

  var myCentre = new google.maps.LatLng(myCentreLat,myCentreLng);

  var myOptions = {
    zoom: initialZoom,
    center: myCentre,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);

  for (id in os_polydata) {

    var polyPath = []; // An empty array

    /*
     * Read through points
     */
    var thisBoundary = os_polydata[id].boundary;

    for (pt in thisBoundary) {
      var osPt = new OSRef(thisBoundary[pt].easting,thisBoundary[pt].northing);
      var llPt = osPt.toLatLng(osPt);
      llPt.OSGB36ToWGS84();
      var myLatLng = new google.maps.LatLng(llPt.lat,llPt.lng);
      polyPath.push(myLatLng);
    }
  
    /*
     * Construct the polygon
     */
    myPoly = new google.maps.Polygon({
     paths: polyPath,
     strokeColor: "#FF0000",
     strokeOpacity: 0.8,
     strokeWeight: 3,
     fillColor: "#FF0000",
     fillOpacity: 0.35
    });
  
    myPoly.setMap(map);
  }
}
