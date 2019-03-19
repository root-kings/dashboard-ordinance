function randomNumber(min, max) {
	return Math.random() * (max - min) + min
}

function randomBar(date, lastClose) {
	var open = randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2)
	var close = randomNumber(open * 0.95, open * 1.05).toFixed(2)
	return {
		t: date.valueOf(),
		y: close
	}
}

var dateFormat = 'MMMM DD YYYY'
var date = moment('April 01 2017', dateFormat)

var data = [randomBar(date, 30)]

while (data.length < 60) {
	date = date.clone().add(1, 'd')
	if (date.isoWeekday() <= 5) {
		data.push(randomBar(date, data[data.length - 1].y))
	}
}

var color = Chart.helpers.color

var tempChartConfig = {
	type: 'bar',
	data: {
		datasets: [
			{
				label: 'Machine',
				backgroundColor: color('red')
					.alpha(0.5)
					.rgbString(),
				borderColor: 'red',
				data: data,
				type: 'line',
				pointRadius: 0,
				fill: false,
				lineTension: 0,
				borderWidth: 2
			}
		]
	},
	options: {
		scales: {
			xAxes: [
				{
					type: 'time',
					distribution: 'series',
					ticks: {
						source: 'data',
						autoSkip: true
					}
				}
			],
			yAxes: [
				{
					scaleLabel: {
						display: true,
						labelString: 'Temperature'
					}
				}
			]
		},
		tooltips: {
			intersect: false,
			mode: 'index',
			callbacks: {
				label: function(tooltipItem, myData) {
					// console.log(tooltipItem)
					return 'Temperature: ' + tooltipItem.yLabel
				}
			}
		}
	}
}
