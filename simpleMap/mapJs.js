// READ README.rst

function initMap() {

  // Map options
  var options = {
    zoom:8,
    center:{
      lat:42.3601,
      lng:-71.0589
    }
  };

  // getElementById
  var getElt = document.getElementById('map');
  // new map
  var map = new google.maps.Map(getElt,options);

  // listen for click on maps
  google.maps.event.addListener(map,'click',function(event){
    // add marker
    addMarker({coords:event.latLng});
  });

  // add Marker
  /*var marker = new google.maps.Marker({
    position:{
      lat:42.4668,
      lng: -70.9495
    },
    map:map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });


  var infoWindow = new google.maps.InfoWindow({
    content:'<h1>My Lynn MA</h1>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map,marker);
  });*/

  // Make Array

  var markers = [
    {
      coords:{
        lat:42.4668,
        lng: -70.9495
      },
      iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content:'<h1>My Lynn MA</h1>'
    },
    {
      coords:{
        lat:42.8584,
        lng:-70.9300
      },
      iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content:'<h1>Amsesbury MA</h1>'
    },
    {
      coords:{
        lat:42.7762,
        lng:-71.0773
      },
      // iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    }
  ];

  // Loop through markers
  for(var i=0; i<markers.length; i++){
    // add marker
    addMarker(markers[i]);
  }

/*  addMarker(
    {
      coords:{
        lat:42.4668,
        lng: -70.9495
      },
      iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content:'<h1>My Lynn MA</h1>'
    }
  );

  addMarker(
    {
      coords:{
        lat:42.8584,
        lng:-70.9300
      },
      iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content:'<h1>Amsesbury MA</h1>'
    }
  );
  addMarker(
    {
      coords:{
        lat:42.7762,
        lng:-71.0773
      },
      // iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    }
  );
  */
  // add Marker function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      // icon:props.iconImage
    });

    // check for customicon
    if(props.iconImage){
      // set icon image
      marker.setIcon(props.iconImage)
    }
    // check for Set
    if(props.content){
      // set content
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map,marker);
      });
    }
  }

}
