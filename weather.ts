var page: WebPage = require('webpage').create();

page.onConsoleMessage = function(msg, lineNum, sourceId) {
  console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
};

page.open('https://www.yr.no/place/South_Africa/Western_Cape/Strand/', function (status) {
    console.log("Status: " + status);

    if (status === "success") {
        //page.render('example.png');
        page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {
            page.evaluate(script);
            console.log(title);
            phantom.exit()
        });
    }

    phantom.exit();
});

var title = "";
function script() {
    title = $(".yr-content-title").text();
    console.log('yayyyyy');
}