// Convert co-ords
var osPt = new OSRef(os_markers[id].easting,os_markers[id].northing);
var llPt = osPt.toLatLng(osPt);
llPt.OSGB36ToWGS84();


