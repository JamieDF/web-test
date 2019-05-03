src="dist/Chart.js"

$().ready(function(){
    $.getJSON( "/log.json", function( data ) {
    console.log(data);

      timeData;
      moistureData;

      for (i = 0; i < data.length; i++) { 
        timeData.push(data[i]['time'])
        moistureData.push(data[i]['ketchup moisture'])
      }


    var ctx = document.getElementById('myChart');
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: timeData,
      options: moistureData
      });

    //$("#text").html(data["text"]);
  });
});
