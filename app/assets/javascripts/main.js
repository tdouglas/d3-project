$(function () {

  if($('#container').length){

    $('#container').highcharts({
        plotOptions: {
            series: {
                fillOpacity: 0.3
            }
        },
        chart: {
            type: 'area',
            backgroundColor: 'transparent',
            marginTop: 70,
            marginBottom: 90
        },
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        xAxis: {
            labels: {
              enabled: false
            },
        },
        yAxis: {
            labels: {
              enabled: false
            },
            title: {
              enabled: false
            },
            startOnTick: false,
            minPadding: 0.5,
            gridLineColor: null
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Rich',
            color: '#ffffff',
            data: [],
            fillOpacity: 0.8
        }, {
            name: 'Poor',
            color: '#1E1E1E',
            data: [],
            fillOpacity: 0.2

        }]
    });
  }




  $('li').click(function(){
    var id = $(this).data('id');
    var rich = $(this).parent().hasClass('rich');
    populateData(id, rich);
  });


  $('map area').click(function(){
    var id = $(this).data('id');
    var rich = $('li[data-id='+ id +']').parent().hasClass('rich');
    populateData(id, rich);
  });


  function populateData(id, rich){
    var dataPoints = [];
    id--;
    var district = districts[id];

      for (var i=0; i < district.length;i++) {
        dataPoints.push(district[i].PercentOfStudentsAtLevels3or4);
    }
      console.log(dataPoints);

      var chart = $('#container').highcharts();

      if( rich )
        chart.series[0].setData(dataPoints, true);
      else
        chart.series[1].setData(dataPoints, true);
    }

  $('svg').click(function(){
  var id = $(this).attr({ version: '1.1' , xmlns:"http://www.w3.org/2000/svg"});
  var svg = $("#chart-canvas").html();
  b64 = Base64.encode(svg);

  // $("body").append($("<img src='data:image/svg+xml;base64,\n"+b64+"' alt='file.svg'/>"));
  console.log($("<img src='data:image/svg+xml;base64,\n"+b64+"' alt='file.svg'/>"));
});

  function encode_as_img_and_link(){
   // Add some critical information
   $("svg").attr({ version: '1.1' , xmlns:"http://www.w3.org/2000/svg"});


        // plotOptions: {
        //     series: [{
        //       color: '#FFFFFF'
        //     }, {
        //       color: "#282828"
        //     }
        // }],

        // yAxis: {
        //     labels: {
        //         align: 'left',
        //         x: 0,
        //         y: -2
        //     }
        // },

   // Works in recent Webkit(Chrome)

  }
// function setAreaOver(){}
// function setAreaOut(){}

});