var page: WebPage = require('webpage').create();
page.onConsoleMessage = function (msg) {
    console.log('Page title is ' + msg);
};
page.open("http://www.charlbest.com", function (status) {
    page.evaluate(function () {
        console.log(document.title);
    });
    phantom.exit();
});