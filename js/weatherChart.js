function getFahrenheits(result){
  // Your code goes here
  return result.map(function(hour) {
    return parseInt(hour.temp.english)
  })
}

function getHours(result){
  // Your code goes here
  return result.map(function(hour) {
    return parseInt(hour.FCTTIME.hour)
  })
}

function generateDataSet(xData, yData) {
  // Your code goes here
  let ctx = document.getElementById("NYCWeatherChart");
  let myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: xData
          ,
          datasets: [{
              label: 'Hourly Temperature',
              data: yData,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'

              ],
              borderColor: [
                  'rgba(255,99,132,1)'
              ],
              borderWidth: 1
          }]
      }
      ,
      options: {
        title: {
            display: true,
            text: 'NYC Hourly Weather'
        },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
}


function makeAjaxRequest(endpoint, success) {
  // Your code goes here
}


var API_KEY = "";
var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";

function getWeather() {
  fetch(URL)
  .then(resp => resp.json())
  .then(json => {
    generateDataSet(getHours(json.hourly_forecast), getFahrenheits(json.hourly_forecast))
  })
}

window.addEventListener("load", getWeather)
