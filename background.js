function track(){
    chrome.windows.getLastFocused({ populate: true }, function(currentWindow) {
        if (currentWindow.focused) {
            var activeTab = currentWindow.tabs.find(t => t.active === true);
            if (activeTab !== undefined && activity.isValidPage(activeTab)) {
                var activeUrl = new Url(activeTab.url);
                var tab = activity.getTab(activeUrl);
                console.log(activeUrl);
            }
        }
    });
}