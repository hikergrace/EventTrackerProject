window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	document.seeWater.lookupWater.addEventListener('click', function(event) {
		event.preventDefault();
		var waterId = document.seeWater.waterId.value;
		console.log(waterId)
		if (!isNaN(waterId) && waterId > 0) {
			getWater(waterId);
		}
	});
	 document.drinkWater.saveWater.addEventListener('click', addNewWater);
}

function getWater(waterId) {
	var xhr = new XMLHttpRequest();
	console.log(waterId);
	xhr.open('GET', 'api/water/' + waterId, true);
	xhr.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				var waterJSON = this.responseText;
				console.log(xhr.responseText);
				var waterObj = JSON.parse(waterJSON);
				displayWater(waterObj);
			} else {
				//DISPLAY ERROR MSG
			}
		}
	};
	xhr.send(null);
}

function displayWater(water) {
	var waterDisplay = document.getElementById('waterCons');
	var showWater = document.createElement('p');
	showWater.textContent = water.amountinounces;
	waterDisplay.appendChild(showWater);
	console.log("we up in here")

}

function addNewWater(evt){
	evt.preventDefault();
	var form = document.drinkWater;
	var newWater = {
			date: form.date.value,
			amountinounces: form.amountinounces.value
	};
	var waterJson = JSON.stringify(newWater);
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/water');
	xhr.setRequestHeader('Content-type','application/json');
	xhr.onreadystatechange = function(){
		console.log(waterJson)
		if(this.readyState === 4){
			if(this.status === 200 || this.status === 201){
				var newWaterDrink = this.responseText;
				var newWaterToday = JSON.parse(newWaterDrink);
				diplayWater(newWaterToday);
			}
			else {
				//DISPLAY ERROR MESSAGE
			}
		}
	};
	console.log(waterJson);
	xhr.send(waterJson);
}

