function initMap() {
if((document.getElementById("latitude").value!="")&&(document.getElementById("longitude").value!="")){
        var w=document.getElementById("latitude").value;
        var t=document.getElementById("longitude").value;
        var userLng=parseFloat((t));
        var userLat=parseFloat((w));
          
        var uluru =({lat: userLat, lng: userLng })
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom:6,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    else{
        
    }}


function conversion1(){


var x1=document.getElementById("latitude").value;
var d1=parseInt(x1);

var y1=x1-(parseInt(x1));
var m1=parseInt(y1*60);
var r1=y1*60;

var a1=r1-(parseInt(r1));
var s1=Math.floor(((a1*60))*10000)/10000;

document.getElementById("latitudeGPS").value=d1+"° "+m1+"min "+s1+"sec ";

    }


function conversion2(){


var x2=document.getElementById("longitude").value;
var d2=parseInt(x2);

var y2=x2-(parseInt(x2));
var m2=parseInt(y2*60);
var r2=y2*60;

var a2=r2-(parseInt(r2));
var s2=Math.floor(((a2*60))*10000)/10000;

document.getElementById("longitudeGPS").value=d2+"° "+m2+"min "+s2+"sec ";

    }

