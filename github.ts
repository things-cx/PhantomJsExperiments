var page: WebPage = require('webpage').create();

page.open('https://github.com/angular/angular/commits/master', (status) => {
    if (status === 'success') {
        var result = page.evaluate(function () {
            return document.getElementById('myagent').textContent;
        });
        console.log(result);
    }
    else {
        console.log('page render failed');
    }
    phantom.exit();
});





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