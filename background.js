function onMessage(request, sender, sendResponse) {

    var storage = chrome.storage.local;
    var timestamp = new Date().getTime();
    var data = {};
    data['url'] = sender.tab.url;
    data['tab'] = sender.tab.id;
    data['repo_name'] = request.repo_name;
    data['timestamp'] = timestamp;

    var storage_object = {};
    storage_object[timestamp] = data;

    storage.set(storage_object, function() {
        var notification = webkitNotifications.createNotification(
            'icon48.png',
            'Tracking complete',
            'Tracking you at repo ' + request.repo_name
        );
        notification.show();
    });

    chrome.pageAction.show(sender.tab.id);
    sendResponse({});
}
chrome.extension.onMessage.addListener(onMessage);