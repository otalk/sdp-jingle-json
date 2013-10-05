var browserify = require('browserify');
var UglifyJS = require('uglify-js');
var fs = require('fs');


var bundle = browserify();
bundle.add('./index');
bundle.bundle({standalone: 'SJJ'}, function (err, js) {
    var result = UglifyJS.minify(js, {fromString: true}).code;
    fs.writeFileSync('sdp-jingle-json.bundle.js', result);
});
