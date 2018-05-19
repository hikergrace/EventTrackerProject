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
	 loadAllWater();
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
		
		if(this.readyState === 4){
			if(this.status === 200 || this.status === 201){
				var newWaterDrink = this.responseText;
				var newWaterToday = JSON.parse(newWaterDrink);
				displayWater(newWaterToday);
			}
			else {
				//DISPLAY ERROR MESSAGE
			}
		}
	};
	console.log(waterJson);
	xhr.send(waterJson);
}

function loadAllWater(){
	  var xhr = new XMLHttpRequest();
	  xhr.open('GET', 'api/water');
	  xhr.onreadystatechange = function(){
	    if (this.readyState === 4) {
	      if (this.status === 200) {
	        var waters = JSON.parse(this.responseText);
	        displayAllWater(waters);
	      }
	    }
	  };
	  xhr.send(null);
	}

function displayAllWater(waters){
	var div = document.getElementById('waterIndex');
	var table = document.createElement('table');
	div.appendChild(table);
	console.log(waters);
	waters.forEach(function(water){
		var tr = document.createElement('tr');
		tr.waterId=water.id;
		table.appendChild(tr);
		var td = document.createElement('td');
		td.textContent = water.amountinounces;
		tr.appendChild(td);
		tr.addEventListener('click', function(evt){
			var cell = evt.target;
			var wid = cell.parentElement.waterId;
			if(!isNaN(wid) && wid > 0){
				getWater(wid);
			}
		});
	});
}









