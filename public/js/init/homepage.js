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
