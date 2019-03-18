document.addEventListener('DOMContentLoaded', function () {
    showWait()
    fetch('/data')
        .then(function (response) {
            return response.json()
        })
        .then(function (listmachines) {
            // console.log(listmachines);
            var filteredmachine = listmachines.filter(function (mac) {
                return mac.oj == 6021

            })
            // console.log(filteredmachine)

            filteredmachine.sort(function (m1, m2) {
                if (m1.dt > m2.dt) return 1
                if (m1.dt < m2.dt) return -1
                return 0
            })






            var tempconfig = {
                type: 'line',
                data: {
                    labels: [

                    ],
                    datasets: [{
                        label: 'A',
                        backgroundColor: chartColor('orange')
                            .alpha(0.1)
                            .rgbString(),
                        pointRadius: 0,
                        lineTension: 0.3,
                        borderWidth: 1,
                        borderColor: chartColor('orange')
                            .alpha(0.75)
                            .rgbString(),
                        fill: true,
                        data: [
                            
                        ]
                    }]
                },
                options: {
                    title: {
                        text: 'Current'
                    },
                    responsive: true,
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
                    }
                }
            }


            namehead = new Vue({
                el: '#chart-temp',
                data: {
                    name: "krushn"
                },
                mounted: function () {


                    filteredmachine.forEach(machine => {
                        tempconfig.data.labels.push(machine.dt)
                        tempconfig.data.datasets[0].data.push(machine.temp)
                        // console.log(machine.oj, " - ", machine.dt, ":", machine.temp)
                    });



                    var ctx3 = document.getElementById('chart-temp').getContext('2d')
                    window.myLine = new Chart(ctx3, tempconfig)

                }

            })
        })
    hideWait()
})