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
})
