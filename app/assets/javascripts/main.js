$(function() {

var canvas = d3.select("body").append("svg")
  .attr("width", 700)
  .attr("height", 700)

d3.json("nysd.geojson", function(data) {
  var group = canvas.selectAll("g")
    .data(data.features)
    .enter()
    .append("g")

  var projection = d3.geo.mercator().scale(5000).translate([0,1980]);
  var path = d3.geo.path().projection(projection);

  var areas = group.append("path")
      .attr("d", path)
      .attr("class", "area")
      .attr("fill", steelblue);
});

});