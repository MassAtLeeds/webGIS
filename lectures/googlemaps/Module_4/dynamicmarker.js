

function genHex(){
 colors = new Array(16)
 colors[0]="0"
 colors[1]="1"
 colors[2]="2"
 colors[3]="3"
 colors[4]="4"
 colors[5]="5"
 colors[6]="6"
 colors[7]="7"
 colors[8]="8"
 colors[9]="9"
 colors[10]="a"
 colors[11]="b"
 colors[12]="c"
 colors[13]="d"
 colors[14]="e"
 colors[15]="f"

 digit = new Array(5)
 color=""
 for (i=0;i<6;i++){
  digit[i]=colors[Math.round(Math.random()*16)]
 color = color+digit[i]
 }

 return color;
}

function addMarker(myPos,myTitle,myInfo) {

  myColour=genHex();
  myLetter=myTitle.substring(0,1);
  var marker = new google.maps.Marker({
    position: myPos, 
    map: map, 
    title: myTitle,
    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+myLetter+'|'+myColour+'|000000'
  });
  var infowindow = new google.maps.InfoWindow({
    content: myInfo
  });
  google.maps.event.addListener(marker, 'click', infoCallback(infowindow, marker));
}

