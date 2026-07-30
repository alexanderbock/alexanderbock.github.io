$(document).ready(function() {
  let map = new google.maps.Map(
    document.getElementById("map_canvas_walking"),
    {
      zoom: 12,
      center: { lat: 40.72, lng: -73.99 }
    }
  );

  $.get(
    'assets/project_hermes.data',
    null,
    function(data) {
      let lines = data.split('\n')
      for (let line = 0; line < lines.length; ++line) {
        let values = lines[line].split(' ')

        points = []
        // We have to stop one iteration earlier due to an extra " " at the end of the the line
        for (let value = 0; value < values.length; value=value+2) {
          let lat = parseFloat(values[value], 10);
          let lng = parseFloat(values[value + 1], 10);

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
