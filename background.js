chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#00ff00'});
});
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher()
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
	}]);
});


