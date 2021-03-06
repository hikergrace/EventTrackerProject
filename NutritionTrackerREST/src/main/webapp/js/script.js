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
	 document.seeAllWater.listWater.addEventListener('click', loadAllWater);
	 document.deleteWater.deleteWaterInst.addEventListener('click', deleteWater);
	 document.updateWater.saveUtdWater.addEventListener('click', updateWater);
	 document.seeAllWater.listWater.addEventListener('click', sumWater);
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

function loadAllWater(evt){
	evt.preventDefault();
	  var xhr = new XMLHttpRequest();
	  xhr.open('GET', 'api/water');
	  xhr.onreadystatechange = function(){
	    if (this.readyState === 4) {
	      if (this.status === 200) {
	        var waters = JSON.parse(this.responseText);
	        displayAllWater(waters);
	        sumWater(waters);
	      }
	    }
	  };
	  xhr.send(null);
	}

function displayAllWater(waters){
	var div = document.getElementById('waterIndex');
	var table = document.createElement('table');
	div.appendChild(table);
	var thead = document.createElement('thead');
    table.appendChild(thead);
    var tr = document.createElement('tr');
    thead.appendChild(tr);
    var th = document.createElement('th');
    th.textContent = "ID";
    tr.appendChild(th);
    var th2 = document.createElement('th');
    th2.textContent = "Date";
    tr.appendChild(th2);
    var th3 = document.createElement('th');
    th3.textContent = "Ounces";
    tr.appendChild(th3);
    
	console.log(waters);

	waters.forEach(function(water){
		var tr = document.createElement('tr');
		tr.waterId=water.id;
		table.appendChild(tr);
		var td = document.createElement('td');
		td.textContent = water.id;
		var td2 = document.createElement('td');
		td2.textContent = water.date;
		var td3 = document.createElement('td');
		td3.textContent = water.amountinounces;
		var td4 = document.createElement('td');
		td4.textContent = "Click here to delete";
		
		tr.appendChild(td);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		
		td4.addEventListener('click', function(evt){
			var cell = evt.target;
			var wid = cell.parentElement.waterId;
			if(!isNaN(wid) && wid > 0){
				deleteWater(wid);
			}
		});
		
		
//		tr.addEventListener('click',function(evt){
//		      var cell = evt.target;
//		      console.log(cell.parentElement.waterId);
//		      var wid = cell.parentElement.waterId;
//		      if (!isNaN(wid) && wid > 0) {
//		        getWater(wid);
//		      }
//		    });
	});
}

function sumWater(waters) {
	  var waterTotal = 0;
	  console.log(waters);
	waters.forEach(function(water){
	waterTotal += water.amountinounces;	
	});
	
	var div = document.getElementById('waterSum');
	var showWaterSum = document.createElement('p');
	showWaterSum.textContent = waterTotal;
	div.appendChild(showWaterSum);

	}

function deleteWater(wid){
//	var waterJson = JSON.stringify(newWater);
	console.log("in delete water")
	var xhr = new XMLHttpRequest();
	if(!wid){
		wid = document.deleteWater.waterId.value;
	}
	xhr.open('DELETE', 'api/water/' + wid, true);
	xhr.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				var waterJSON = this.responseText;
//				console.log(xhr.responseText);
				var waterObj = JSON.parse(waterJSON);
				displayWater(waterObj);
				console.log("delete success")
			} else {
				console.log("delete fail")
			}
		}
		else {
			console.log("ERROR")
		}
	};
	xhr.send(null);
}

function updateWater(evt){
	evt.preventDefault();
	var form = document.updateWater;
	var amountInOunces = document.updateWater.amountinounces.value;
	console.log(amountInOunces);
	var waterId = document.updateWater.waterId.value;
	var xhr = new XMLHttpRequest();
	xhr.open('PATCH', 'api/water/' + waterId, true);
	xhr.setRequestHeader('Content-type','application/json');
	var newUtdWaterToday = { id: waterId, amountinounces: amountInOunces }
	xhr.onreadystatechange = function(){

		if(this.readyState === 4){
			if(this.status === 200 || this.status === 201){
				var newUtdWaterDrink = this.responseText;
				displayWater(newUtdWaterToday);
				console.log(newUtdWaterToday)	
			}
			else {
				console.log("fail")
			}
		}
	};
	var waterUtdJson = JSON.stringify(newUtdWaterToday);
	console.log(waterUtdJson);
	xhr.send(waterUtdJson);
}
	
