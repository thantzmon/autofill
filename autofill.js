function autoFill(){
	if(restoredShortcuts[this.value] != undefined){
		this.value = restoredShortcuts[this.value];
	}
	
}

var restoredShortcuts = {}
chrome.storage.sync.get(['shortcutValues'], function(result) {
	restoredShortcuts = result['shortcutValues'];
});

var inputs;
inputs = document.getElementsByTagName('input');
for(let input of inputs){
	input.addEventListener("blur", autoFill);
}
