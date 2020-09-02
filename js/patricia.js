//
//   Patricia additional elements
//

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});



// Build the chart
// add the following line to the html code.
// in head:
// <script src="https://code.highcharts.com/highcharts.js"></script>
// <script src="https://code.highcharts.com/modules/exporting.js"></script>
// <script src="https://code.highcharts.com/modules/export-data.js"></script>
// in body:
// <div id="containerCHART" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto"></div>
Highcharts.chart('containerCHART', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      allowPointSelect: false,
      cursor: 'pointer',
      dataLabels: {
        enabled: true
      },
      showInLegend: false
    }
  },

  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Other',
      y: 7.05
    }]
  }]
}, function(chart) {
  var textX = chart.plotLeft + (chart.series[0].center[0]);
  var textY = chart.plotTop + (chart.series[0].center[1]);

  chart.renderer.circle(textX, textY, 50).attr({
    fill: '#ddd',
  }).add();
});