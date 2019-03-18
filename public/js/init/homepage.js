'use strict'

window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
}
;(function(global) {
	var Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

	var COLORS = ['#4dc9f6', '#f67019', '#f53794', '#537bc4', '#acc236', '#166a8f', '#00a950', '#58595b', '#8549ba']

	var Samples = global.Samples || (global.Samples = {})
	var Color = global.Color

	Samples.utils = {
		// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
		srand: function(seed) {
			this._seed = seed
		},

		rand: function(min, max) {
			var seed = this._seed
			min = min === undefined ? 0 : min
			max = max === undefined ? 1 : max
			this._seed = (seed * 9301 + 49297) % 233280
			return min + (this._seed / 233280) * (max - min)
		},

		numbers: function(config) {
			var cfg = config || {}
			var min = cfg.min || 0
			var max = cfg.max || 1
			var from = cfg.from || []
			var count = cfg.count || 8
			var decimals = cfg.decimals || 8
			var continuity = cfg.continuity || 1
			var dfactor = Math.pow(10, decimals) || 0
			var data = []
			var i, value

			for (i = 0; i < count; ++i) {
				value = (from[i] || 0) + this.rand(min, max)
				if (this.rand() <= continuity) {
					data.push(Math.round(dfactor * value) / dfactor)
				} else {
					data.push(null)
				}
			}

			return data
		},

		labels: function(config) {
			var cfg = config || {}
			var min = cfg.min || 0
			var max = cfg.max || 100
			var count = cfg.count || 8
			var step = (max - min) / count
			var decimals = cfg.decimals || 8
			var dfactor = Math.pow(10, decimals) || 0
			var prefix = cfg.prefix || ''
			var values = []
			var i

			for (i = min; i < max; i += step) {
				values.push(prefix + Math.round(dfactor * i) / dfactor)
			}

			return values
		},

		months: function(config) {
			var cfg = config || {}
			var count = cfg.count || 12
			var section = cfg.section
			var values = []
			var i, value

			for (i = 0; i < count; ++i) {
				value = Months[Math.ceil(i) % 12]
				values.push(value.substring(0, section))
			}

			return values
		},

		color: function(index) {
			return COLORS[index % COLORS.length]
		},

		transparentize: function(color, opacity) {
			var alpha = opacity === undefined ? 0.5 : 1 - opacity
			return chartColor(color)
				.alpha(alpha)
				.rgbString()
		}
	}

	// DEPRECATED
	window.randomScalingFactor = function() {
		return Math.round(Samples.utils.rand(-100, 100))
	}

	// INITIALIZATION

	Samples.utils.srand(Date.now())

	// Google Analytics
	/* eslint-disable */
	if (document.location.hostname.match(/^(www\.)?chartjs\.org$/)) {
		;(function(i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r
			;(i[r] =
				i[r] ||
				function() {
					;(i[r].q = i[r].q || []).push(arguments)
				}),
				(i[r].l = 1 * new Date())
			;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
			a.async = 1
			a.src = g
			m.parentNode.insertBefore(a, m)
		})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga')
		ga('create', 'UA-28909194-3', 'auto')
		ga('send', 'pageview')
	}
	/* eslint-enable */
})(this)

var timeFormat = 'MM/DD/YYYY HH:mm'
var _seed = new Date().getMilliseconds()
var rand = function(min, max) {
	var seed = _seed
	min = min === undefined ? 0 : min
	max = max === undefined ? 1 : max
	_seed = (seed * 9301 + 49297) % 233280
	return min + (_seed / 233280) * (max - min)
}

function newDate(days) {
	return moment()
		.add(days, 'd')
		.toDate()
}

function newDateString(days) {
	return moment()
		.add(days, 'd')
		.format(timeFormat)
}

var chartColor = Chart.helpers.color

var config1 = {
	type: 'line',
	data: {
		labels: [
			newDate(0),
			newDate(1),
			newDate(2),
			newDate(3),
			newDate(4),
			newDate(5),
			newDate(6),
			newDate(7),
			newDate(8),
			newDate(9),
			newDate(10),
			newDate(11),
			newDate(12),
			newDate(13),
			newDate(14),
			newDate(15),
			newDate(16),
			newDate(17),
			newDate(18),
			newDate(19)
		],
		// (()=> {
		//     var arr = [];

		//     for (i = 0; i < 20; i++) {
		//         arr.push(newDate(i));
		//     }
		//     return arr;
		// }),
		datasets: [
			{
				label: 'X',
				backgroundColor: chartColor('red')
					.alpha(0.1)
					.rgbString(),
				pointRadius: 0,
				lineTension: 0.3,
				borderWidth: 1,
				borderColor: chartColor('red')
					.alpha(0.75)
					.rgbString(),
				fill: true,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			},
			{
				label: 'Y',
				backgroundColor: chartColor('green')
					.alpha(0.1)
					.rgbString(),
				pointRadius: 0,
				lineTension: 0.3,
				borderWidth: 1,
				borderColor: chartColor('green')
					.alpha(0.75)
					.rgbString(),
				fill: true,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			},
			{
				label: 'Z',
				backgroundColor: chartColor('blue')
					.alpha(0.1)
					.rgbString(),
				pointRadius: 0,
				lineTension: 0.3,
				borderWidth: 1,
				borderColor: chartColor('blue')
					.alpha(0.75)
					.rgbString(),
				fill: true,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}
		]
	},
	options: {
		title: {
			text: 'Vibration Time Scale'
		},

		responsive: true,
		scales: {
			xAxes: [
				{
					type: 'time',
					time: {
						format: timeFormat,
						// round: 'day'
						tooltipFormat: 'll HH:mm'
					},
					scaleLabel: {
						display: true,
						labelString: 'Date'
					}
				}
			],
			yAxes: [
				{
					scaleLabel: {
						display: true,
						labelString: 'value'
					}
				}
			]
		}
	}
}

var config2 = {
	type: 'line',
	data: {
		labels: [
			newDate(0),
			newDate(1),
			newDate(2),
			newDate(3),
			newDate(4),
			newDate(5),
			newDate(6),
			newDate(7),
			newDate(8),
			newDate(9),
			newDate(10),
			newDate(11),
			newDate(12),
			newDate(13),
			newDate(14),
			newDate(15),
			newDate(16),
			newDate(17),
			newDate(18),
			newDate(19)
		],
		datasets: [
			{
				label: 'deg C',
				backgroundColor: chartColor('red')
					.alpha(0.1)
					.rgbString(),
				pointRadius: 0,
				lineTension: 0.3,
				borderWidth: 1,
				borderColor: chartColor('red')
					.alpha(0.75)
					.rgbString(),
				fill: false,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}
		]
	},
	options: {
		title: {
			text: 'Temperature'
		},

		responsive: true,
		scales: {
			xAxes: [
				{
					type: 'time',
					time: {
						format: timeFormat,
						// round: 'day'
						tooltipFormat: 'll HH:mm'
					},
					scaleLabel: {
						display: true,
						labelString: 'Date'
					}
				}
			],
			yAxes: [
				{
					scaleLabel: {
						display: true,
						labelString: 'value'
					}
				}
			]
		}
	}
}

window.onload = function() {
	var ctx1 = document.getElementById('chart1').getContext('2d')
	window.myLine = new Chart(ctx1, config1)

	var ctx2 = document.getElementById('chart2').getContext('2d')
	window.myLine = new Chart(ctx2, config2)

}

var randomScalingFactor = function() {
	return Math.round(Math.random() * 100)
}

var config = {
	type: 'pie',
	data: {
		datasets: [
			{
				data: [randomScalingFactor(), randomScalingFactor()],
				backgroundColor: [window.chartColors.green, window.chartColors.white]
			}
		]
	},
	options: {
		title: {
			text: '% utilization'
		},
		responsive: true
	}
}

var barChartData = {
	labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	datasets: [
		{
			label: 'Jobs Produced',
			backgroundColor: chartColor(window.chartColors.red)
				.alpha(0.5)
				.rgbString(),
			borderColor: window.chartColors.red,
			borderWidth: 1,
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), 0]
		}
	]
}

window.onload = function() {
	var cug = document.getElementById('chart-util-gen')
	if (cug) {
		cug.getContext('2d')
		window.mycug = new Chart(cug, config)
	}
	var cu = document.getElementById('chart-util')
	if (cu) {
		cu.getContext('2d')
		window.mycu = new Chart(cu, config)
	}
	

	var cj = document.getElementById('chart-jobs')
	if (cj) {
		cj.getContext('2d')
		window.mycj = new Chart(cj, {
			type: 'bar',
			data: barChartData,
			options: {
				responsive: true,
				legend: {
					position: 'top'
				},
				title: {
					display: true,
					text: 'Chart.js Bar Chart'
				}
			}
		})
	}
}
