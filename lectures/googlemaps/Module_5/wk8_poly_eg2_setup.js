var map; // The map object
var myPoly;

var myCentreLat = 53.81;
var myCentreLng = -1.52;

var initialZoom = 12;

// infocallback for info windows
function infoCallback(infowindow) {
 return function() {
  infowindow.open(map);
 };
}

/*
 * addPoly
 */
function addPoly(polyPath,myInfo,line_colour,fill_colour) {
  /*
   * Construct the polygon
   */
   myPoly = new google.maps.Polygon({
   paths: polyPath,
   strokeColor: line_colour,
   strokeOpacity: 0.8,
   strokeWeight: 3,
   fillColor: fill_colour,
   fillOpacity: 0.35
  });

  var infowindow = new google.maps.InfoWindow({
    content: myInfo,
    position: polyPath[0]
  });
  google.maps.event.addListener(myPoly, 'click', infoCallback(infowindow));
  
  myPoly.setMap(map);

}

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
  
    var fillShade = (256*(os_polydata[id].value/100));
    var fillShadeHex = parseInt(fillShade).toString(16);
    var fillColour = '#'+fillShadeHex+fillShadeHex+fillShadeHex;
 
    var info = "<div><h1>" + os_polydata[id].title 
             + "</h1><p>" + os_polydata[id].description 
             + "</p></div>";

    addPoly(polyPath,info,"#000000",fillColour);

  }
}
