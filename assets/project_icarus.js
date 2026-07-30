$(document).ready(function() {
  let map = new google.maps.Map(
    document.getElementById("map_canvas_flying"),
    {
      zoom: 2,
      center: { lat: 40.72, lng: -73.99 }
    }
  );

  // AIzaSyBBn5PBZQvKaBwBE7tFATmq28dsu-tp43o

  let locations = {};
  let airports = [];

  $.get(
    'assets/project_icarus.data',
    null,
    function(data) {
      let lines = data.split('\n')

      for (let line = 0; line < lines.length; ++line) {
        let values = lines[line].split(' ')

        let src = new google.maps.LatLng(values[0], values[1])
        let dst = new google.maps.LatLng(values[2], values[3])

        new google.maps.Polyline({
          path: [src, dst],
          strokeColor: '#282fb5',
          strokeWeight: 3,
          map: map,
          geodesic: true
        });
      }
    },
    'text'
  );
});
