var map; // The map object

var myCentreLat = 53.825740;
var myCentreLng = -1.506015;

var initialZoom = 6;

function initialize() {

   /*
    * In this example, lines are from each origin to a known destination point which is also 
    * the map centre
    */
  var myDest = new google.maps.LatLng(myCentreLat,myCentreLng);

  var myOptions = {
    zoom: initialZoom,
    center: myDest,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);

  var myColor;
  var myOpacity;
  var myColor;

  for (id in os_flows) {

      // Convert co-ords
      var osPt = new OSRef(os_flows[id].easting,os_flows[id].northing);
      var llPt = osPt.toLatLng(osPt);
      llPt.OSGB36ToWGS84();
      var myOrig = new google.maps.LatLng(llPt.lat,llPt.lng);

      //addMarker(myOrig,os_flows[id].origin,info);

      /*
       * Construct a flow line
       *
       * In this example, lines are from each origin to a known destination point
       * Destination is hard coded here for sake of simplifying code
       */
       if (os_flows[id].flow > 0) {
         myColor = "#000000"; 
         myOpacity = 0.2;
         myWeight = 1;
       }
       if (os_flows[id].flow > 10) {
         myColor = "#000000"; 
         myOpacity = 0.3;
         myWeight = 1;
       }
       if (os_flows[id].flow > 100) {
         myColor = "#EE0000"; 
         myOpacity = 0.7;
         myWeight = 2;
       }
       if (os_flows[id].flow > 1000) {
         myColor = "#EE0000"; 
         myOpacity = 0.9;
         myWeight = 3;
       }

       var flowLine = new google.maps.Polyline({
         path: [myOrig,myDest],
         strokeColor: myColor,
         strokeOpacity: myOpacity,
         strokeWeight: myWeight
       });
       flowLine.setMap(map);
    }
}
