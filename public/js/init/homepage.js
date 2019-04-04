let machineList, machineDetails, tempChart

document.addEventListener('DOMContentLoaded', function() {
	// showWait()
	fetch('http://59.99.238.23/arduino/fs_tornos/vk_machine.php') // List of machines
		.then(function(response) {
			return response.json()
		})
		.then(function(listmachines) {
			machineList = new Vue({
				el: '#machineList',
				data: {
					selected: undefined,
					machines: listmachines.map(machine => machine.ojno).sort()
				}
			})
		})

	/* fetch('http://59.99.238.23/arduino/fs_tornos/vk_machine.php') // general machines data
		.then(function(response) {
			return response.json()
		})
		.then(function(listmachines) {
			console.log(listmachines) */

	machineDetails = new Vue({
		el: '#machineDetails',
		data: {
			machine: undefined,
			status: false,
			jobs: 0
		},
		updated: function() {
			M.Collapsible.init(document.querySelectorAll('.collapsible'), {
				accordion: false
			})
		}
	})
	/* }) */

	tempChartElem = document.getElementById('chart-temp').getContext('2d')
	tempChart = new Chart(tempChartElem, tempChartConfig)
})

function viewMachineToggle(machineId) {
	machineDetails.machine = machineDetails.machine == machineId ? undefined : machineId
	machineList.selected = machineDetails.machine ? machineId : undefined

	if (machineDetails.machine) {
		fetch('http://59.99.238.23/arduino/fs_tornos/mac_onoff.php?oj_no=' + machineId) // On/Off Status
			.then(function(response) {
				return response.json()
			})
			.then(function(machineData) {
				machineData.sort(function(second1, second2) {
					if (second1.dttime < second2.dttime) return 1 // Descending sort
					if (second1.dttime > second2.dttime) return -1
					return 0
				})
				// console.log(machineData)
				machineDetails.status = machineData.length ? machineData[0].onoff : 0

				// console.log(`Machine status set to ${machineDetails.status}`)
			})

		let timearray = []
		let temparray = []

		fetch('http://59.99.238.23/arduino/fs_tornos/mac_temp.php?oj_no=' + machineId) // Temperature data
			.then(function(response) {
				return response.json()
			})
			.then(function(machineTempData) {
				tempChart.data.labels = []
				tempChart.data.datasets[0].data = []

				// machineTempData = [
				// 	{ seccd: 41, ojno: 5873, dttime: 1552965446000, temp: -127 },
				// 	{ seccd: 41, ojno: 5873, dttime: 1552965656000, temp: -127 }
				// ]

				machineTempData.sort(function(second1, second2) {
					if (second1.dttime > second2.dttime) return 1 // ascending
					if (second1.dttime < second2.dttime) return -1
					return 0
				})

				let lasttemp = 0

				machineTempData.forEach(second => {
					// timearray.push(second.dttime)
					lasttemp = second.temp == -127 ? lasttemp : second.temp // set current temperature value to last temp if it is -127
					let currpoint = {
						t: second.dttime,
						y: lasttemp
					}
					// temparray.push(lasttemp)
					tempChart.data.datasets[0].data.push(currpoint)
					// tempChart.data.datasets[0].data.push(lasttemp)
				})

				tempChart.update()
			})

		fetch('http://59.99.238.23/arduino/fs_tornos/mac_job.php?oj_no=' + machineId + '&date=' + new moment().format('YYYYMMDD')) // list of jobs
			.then(function(response) {
				return response.json()
			})
			.then(function(machineJobData) {
				machineDetails.jobs = machineJobData
					.sort(function(second1, second2) {
						if (second1.dttime > second2.dttime) return 1 // ascending
						if (second1.dttime < second2.dttime) return -1
						return 0
					})
					.map(job => moment(job.dttime).format('hh:mm:ss'))
				// let jobpoints = []
				tempChart.data.datasets[1].data = []

				machineJobData.forEach(job => {

					let currpoint = {
						t: job.dttime,
						// y:  0
						// y: temparray[timearray.indexOf(job.dttime)]
						y: tempChart.data.datasets[0].data[tempChart.data.datasets[0].data.map(datapoint => datapoint.t).indexOf(job.dttime)].y

						// y: timearray.indexOf(job.dttime) != -1 ? temparray[timearray.indexOf(job.dttime)] : 0
					}
					tempChart.data.datasets[1].data.push(currpoint)
				})
				// tempChart.data.datasets[1].data = jobpoints
				// console.log(jobpoints)
				tempChart.update()

			})

		async.parallel(
			[
				function(cb) {
					
					cb(null, "hi")
					// return "hi"
				},
				function(cb) {
					
					cb(null, "hi")
					// return "hi"
				},
				function(cb) {
					
					cb(null, "hi")
					// return "hi"
				},
				function(cb) {
					
					cb(null, "hi")
					// return "hi"
				}
			],
			function(err, results) {
				console.log(results)
			}
		)
	}
}
