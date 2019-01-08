var timeFormat = 'MM/DD/YYYY HH:mm';
var _seed = new Date().getMilliseconds();
var rand = function (min, max) {
    var seed = _seed;
    min = min === undefined ? 0 : min;
    max = max === undefined ? 1 : max;
    _seed = (seed * 9301 + 49297) % 233280;
    return min + (_seed / 233280) * (max - min);
};

var randomScalingFactor = function () {
    return Math.round(rand(-100, 100));
};

function newDate(days) {
    return moment().add(days, 'd').toDate();
}

function newDateString(days) {
    return moment().add(days, 'd').format(timeFormat);
}

var color = Chart.helpers.color;












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
        datasets: [{
            label: 'X',
            backgroundColor: color('red').alpha(0.1).rgbString(),
            pointRadius: 0,
            lineTension:0.3,
            borderWidth:1,
            borderColor: color('red').alpha(0.75).rgbString(),
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
            ],
        }, {
            label: 'Y',
            backgroundColor: color('green').alpha(0.1).rgbString(),
            pointRadius: 0,
            lineTension:0.3,
            borderWidth:1,
            borderColor: color('green').alpha(0.75).rgbString(),
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
            ],
        }, {
            label: 'Z',
            backgroundColor: color('blue').alpha(0.1).rgbString(),
            pointRadius: 0,
            lineTension:0.3,
            borderWidth:1,
            borderColor: color('blue').alpha(0.75).rgbString(),
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
            ],
        }]
    },
    options: {
        title: {
            text: 'Vibration Time Scale'
        },

        scales: {
            xAxes: [{
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
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'value'
                }
            }]
        },
    }
};



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
        datasets: [{
            label: 'deg C',
            backgroundColor: color('red').alpha(0.1).rgbString(),
            pointRadius: 0,
            lineTension:0.3,
            borderWidth:1,
            borderColor: color('red').alpha(0.75).rgbString(),
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
        }]
    },
    options: {
        title: {
            text: 'Temperature'
        },

        scales: {
            xAxes: [{
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
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'value'
                }
            }]
        },
    }
};



var config3 = {
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
        datasets: [{
            label: 'A',
            backgroundColor: color('orange').alpha(0.1).rgbString(),
            pointRadius: 0,
            lineTension:0.3,
            borderWidth:1,
            borderColor: color('orange').alpha(0.75).rgbString(),
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
        }]
    },
    options: {
        title: {
            text: 'Current'
        },

        scales: {
            xAxes: [{
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
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'value'
                }
            }]
        },
    }
};


window.onload = function () {
    var ctx1 = document.getElementById('chart1').getContext('2d');
    window.myLine = new Chart(ctx1, config1);

    var ctx2 = document.getElementById('chart2').getContext('2d');
    window.myLine = new Chart(ctx2, config2);

    var ctx3 = document.getElementById('chart3').getContext('2d');
    window.myLine = new Chart(ctx3, config3);

};