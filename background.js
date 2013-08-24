function onMessage(request, sender, sendResponse) {
    var notification = webkitNotifications.createNotification(
        'icon48.png',
        'Tracking complete',
        'Tracking your repos'
    );
    notification.show();

    chrome.pageAction.show(sender.tab.id);
    sendResponse({});
}
chrome.extension.onMessage.addListener(onMessage);