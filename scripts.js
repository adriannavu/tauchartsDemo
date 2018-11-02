$(function() {
  console.log('scripts loaded');

  var url = 'nations.json';
  var nations = '';

  $.ajax({
    type: 'GET',
    url: url,
    data: nations,
    dataType: 'json',
    async: true,
    success: function(nations) {
      console.log('success function');

      var chart = new Taucharts.Chart({
        guide: {
          x: {
            label: 'Infant Mortality Rate'
          }, // custom label for X axis
          y: {
            label: 'Life Expectancy'
          }, // custom label for Y axis
          padding: {
            b: 40,
            l: 40,
            t: 10,
            r: 10
          } // chart paddings
        },
        data: nations,
        type: 'scatterplot',
        x: 'Infant Mortality Rate',
        y: 'Life Expectancy',
        color: 'Obesity Rate', // every team will be represented by different color
        size: 'Per Capita GDP'
      });
      chart.renderTo('#results');

    }, //end of success function
    error: function(msg) {
      alert('wtf?');
    },
    complete: function(msg) {
      alert('Ajax complete');
    }
  }); //end of ajax

}); //end of ready wrapper