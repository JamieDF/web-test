src="dist/Chart.js"

$().ready(function(){
    $.getJSON( "/log.json", function( data ) {
    console.log(data);

      var timeData = [];
      var moistureData = [];
      var moistureData2 = [];

      for (i = 0; i < data.length; i++) { 
        timeData.push(data[i]['Time'])
        moistureData.push(data[i]['Ketchups soil moisture'])
        moistureData2.push(data[i]['Toms soil moisture'])
      }

    console.log(timeData)
    console.log(moistureData)

    var ctx = document.getElementById('myChart');
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
           labels: timeData,
           datasets: [{
              label: 'Ketchups soil moisture %',
              data: moistureData,
              backgroundColor: 'rgba(255, 0, 0, 0.8)',
              fill: false},
                     {
              label: 'Toms soil moisture %',
              data: moistureData2,
              backgroundColor: 'rgba(0, 255, 0, 0.8)',
              fill: false}]
      },
        options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 100
                }
            }]
        }
    }
      });

myLineChart.canvas.parentNode.style.height = '18%';
myLineChart.canvas.parentNode.style.width = '70%';
        
    //$("#text").html(data["text"]);
  });
});
