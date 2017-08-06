
(function(file, node) {
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    node.insertBefore(s, node.firstChild);
})(chrome.extension.getURL('/disable-visibility-detection.js'), document.documentElement);