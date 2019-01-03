var restoredShortcuts = {}
function autoFill(){
	if(restoredShortcuts != undefined){
		if(restoredShortcuts[this.value] != undefined){
			this.value = restoredShortcuts[this.value];
		}
	}
}

chrome.storage.sync.get(['shortcutValues'], function(result) {
	restoredShortcuts = result['shortcutValues'];
});

var inputs;
inputs = document.getElementsByTagName('input');
for(let input of inputs){
	input.addEventListener("blur", autoFill);
}
