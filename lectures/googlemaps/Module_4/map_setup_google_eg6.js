var map; // The map object

  var myCentreLat = 53.807767;
  var myCentreLng = -1.557428;

  var initialZoom = 14;

  function initialize() {
  var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
    var myOptions = {
      zoom: initialZoom,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);

    var marker = new google.maps.Marker({
      position: latlng, 
      map: map, 
      title:"Hello World!"
    });

    /*
     * Create a new infowindow object
     */
    var infowindow = new google.maps.InfoWindow({
      content: "The first marker"
    });

    // Attach it to the marker we've just added
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

}
