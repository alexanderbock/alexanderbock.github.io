GMap2.prototype.fit = function(bounds) {
  this.setCenter(bounds.getCenter(), this.getBoundsZoomLevel(bounds));
};

$(document).ready(function() {
  var map = new GMap2(document.getElementById("map_canvas"));

  bounds = new GLatLngBounds(
    new GLatLng(40.693741, -73.99),
    new GLatLng(40.788675, -73.985)
  );
  
  map.fit(bounds);
  map.setUIToDefault();
  map.setMapType(G_PHYSICAL_MAP);

  $.get(
    'assets/project_walkingmanhattan.data',
    null,
    function(data) {
      var lines = data.split('\t')
      for (var line = 0; line < lines.length - 1; ++line) {
        var values = lines[line].split(' ')

        var q;
        // We have to stop one iteration earlier due to an extra " " at the end of the the line
        for (var value = 0; value < values.length - 1; value=value+2) {
          var lat = values[value];
          var lng = values[value + 1];
          var p = new GLatLng(parseFloat(lat, 10), parseFloat(lng, 10));

          if (value > 0) {
            map.addOverlay(
              //                    Color      Line Width   Opacity
              new GPolyline([q, p], "#b5282f", 3,           0.5)
            );
          }

          q = p;
        }
      }
    },
    'text'
  );
});
