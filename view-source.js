// view-source.js
(function() {
    var source = new XMLSerializer().serializeToString(document);
    var escaped = source
        .replace(/&/g, '&amp;')
        .replace(/%3C/g, '&lt;')
        .replace(/%3E/g, '&gt;');
    var w = window.open();
    w.document.write(
        '<!DOCTYPE html><html><head><title>Page Source</title>' +
        '<style>body{white-space: pre-wrap; font-family: monospace; padding: 10px;}</style>' +
        '</head><body>' +
        escaped +
        '</body></html>'
    );
    w.document.close();
})();
