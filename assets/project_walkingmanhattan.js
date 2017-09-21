$(document).ready(function() {
  var map = new google.maps.Map(
    document.getElementById("map_canvas"),
    {
      zoom: 12,
      center: { lat: 40.72, lng: -73.99 }
    }
  );

  $.get(
    'assets/project_walkingmanhattan.data',
    null,
    function(data) {
      var lines = data.split('\t')
      for (var line = 0; line < lines.length; ++line) {
        var values = lines[line].split(' ')

        points = []
        // We have to stop one iteration earlier due to an extra " " at the end of the the line
        for (var value = 0; value < values.length; value=value+2) {
          var lat = parseFloat(values[value], 10);
          var lng = parseFloat(values[value + 1], 10);

          points.push({
            lat: lat,
            lng: lng
          });
        }

        new google.maps.Polyline({
          path: points,
          geodesic: true,
          strokeColor: "#b5282f",
          strokeOpacity: 0.95,
          strokeWeight: 3,
          map: map
        });
      }
    },
    'text'
  );
});
