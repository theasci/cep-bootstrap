$.global.setTimeout = function (cb, timeToWait) {
    $.sleep(timeToWait);
    cb();
};

$.global.clearTimeout = function () {};

function extend(destination, source) {
    for (var property in source) destination[property] = source[property];
    return destination;
}

//@include "jasmine-2.2.0.jsx"
//@include "JsxReporter.jsx"

$.global.jasmine = jasmineRequire.core(jasmineRequire);
var env = jasmine.getEnv();
var jasmineInterface = jasmineRequire.interface(jasmine, env);
extend($.global, jasmineInterface);
var JsxReporter = jasmineRequire.JsxReporter();
var reporter = new JsxReporter({
    onComplete: function () {
        //$.writeln('FINISHED!!!');
    }
});
// env.addReporter(jasmineInterface.jsApiReporter);
env.addReporter(reporter);


// *************************************************************************************

function runJasmine () {
    env.execute();
}
