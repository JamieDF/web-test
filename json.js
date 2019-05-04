src="dist/Chart.js"

$().ready(function(){
    $.getJSON( "/log.json", function( data ) {
    console.log(data);

      var timeData = [];
      var moistureData = [];

      for (i = 0; i < data.length; i++) { 
        timeData.push(data[i]['time'])
        moistureData.push(data[i]['ketchup moisture'])
      }

    console.log(timeData)
    console.log(moistureData)

    var ctx = document.getElementById('myChart');
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
           labels: timeData,
           datasets: [{
              label: 'moisture %',
              data: moistureData}]
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

myLineChart.canvas.parentNode.style.height = '30%';
myLineChart.canvas.parentNode.style.width = '70%';
        
    //$("#text").html(data["text"]);
  });
});
