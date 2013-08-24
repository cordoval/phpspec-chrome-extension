
var data_repo = document.getElementById('js-command-bar-field');
var repo_name = data_repo.getAttribute("data-repo");
if (!!repo_name) {
    chrome.extension.sendMessage({"repo_name":repo_name}, function(){});
}
