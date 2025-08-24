$(document).ready(function() {
  var map = new google.maps.Map(
    document.getElementById("map_canvas_flying"),
    {
      zoom: 2,
      center: { lat: 40.72, lng: -73.99 }
    }
  );

  // AIzaSyBBn5PBZQvKaBwBE7tFATmq28dsu-tp43o

  var locations = {};
  var airports = [];

  $.get(
    'assets/project_icarus.data',
    null,
    function(data) {
      var lines = data.split('\n')

      for (var line = 0; line < lines.length; ++line) {
        var values = lines[line].split(' ')

        var src = new google.maps.LatLng(values[0], values[1])
        var dst = new google.maps.LatLng(values[2], values[3])

        new google.maps.Polyline({
          path: [src, dst],
          strokeColor: '#282fb5',
          strokeWeight: 3,
          map: map,
          geodesic: true
        });
      }




        // console.log(src)
        // console.log(dst)
      // }

      // new google.maps.Polyline({
      //   path: [new google.maps.LatLng(40.72, -73.99), new google.maps.LatLng(40.72, 73.99)],
      //   strokeColor: '#282fb5',
      //   strokeWeight: 3,
      //   map: map,
      //   geodesic: true
      // });


      // var lines = data.split('\t')
      // for (var line = 0; line < lines.length; ++line) {
      //   var values = lines[line].split(' ')

      //   points = []
      //   // We have to stop one iteration earlier due to an extra " " at the end of the the line
      //   for (var value = 0; value < values.length; value=value+2) {
      //     var lat = parseFloat(values[value], 10);
      //     var lng = parseFloat(values[value + 1], 10);

      //     points.push({
      //       lat: lat,
      //       lng: lng
      //     });
      //   }

      //   new google.maps.Polyline({
      //     path: points,
      //     geodesic: true,
      //     strokeColor: "#b5282f",
      //     strokeOpacity: 0.95,
      //     strokeWeight: 3,
      //     map: map
      //   });
      // }
    },
    'text'
  );
});
