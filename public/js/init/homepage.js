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
				machineDetails.status = machineData[0].onoff
			})

		fetch('http://59.99.238.23/arduino/fs_tornos/mac_job.php?oj_no=' + machineId) // list of jobs
			.then(function(response) {
				return response.json()
			})
			.then(function(machineData) {
				machineDetails.jobs = machineData.length
			})
	}
}
