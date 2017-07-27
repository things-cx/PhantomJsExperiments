var page: WebPage = require('webpage').create();
page.open('http://example.com', function (status) {
    console.log("Status: " + status);
    console.log(phantom.scriptName);
    console.log(phantom.version);
    if (status === "success") {
        page.render('example.png');
    }
    phantom.exit();
});