var dictionaryTable = document.getElementById("dictionaryTable");

var restoredShortcuts = {}
chrome.storage.sync.get(['shortcutValues'], function(result) {
	restoredShortcuts = result['shortcutValues'];
	populateTable();
});

function populateTable(){
	Object.keys(restoredShortcuts).forEach(function(key){
		var row = dictionaryTable.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell1Input = document.createElement("input");
		cell1Input.value = key;
		var cell2 = row.insertCell(1);
		var cell2Input = document.createElement("input");
		cell2Input.value = restoredShortcuts[key];
		cell1.appendChild(cell1Input);
		cell2.appendChild(cell2Input);
	});
}

function saveValues(){
	var shortcuts = {};
	for (var i = 1, row; row = dictionaryTable.rows[i]; i++) {
		if(row.cells[0].children[0].value != ""){
			var key = row.cells[0].children[0].value;
			var value = row.cells[1].children[0].value;
			shortcuts[key] = value;
		}
	}
	chrome.storage.sync.set({shortcutValues: shortcuts}, function() {});
}

function addRow(){
	var row = dictionaryTable.insertRow();
	var cell1 = row.insertCell(0);
	var cell1Input = document.createElement("input");
	var cell2 = row.insertCell(1);
	var cell2Input = document.createElement("input");
	cell1.appendChild(cell1Input);
	cell2.appendChild(cell2Input);
}



var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", saveValues);
var addButton = document.getElementById("addButton");
addButton.addEventListener("click", addRow);
