// An example configuration file
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER: 0,
  allScriptsTimeout: 30,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    maxInstances: 2
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['./tests/test1.js','./tests/test2.js', './tests/test3.js', './tests/test4.js'],

  restartBrowserBetweenTests: true,


  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 45000
  },

  framework: 'jasmine2',

  onPrepare: function() {
    let AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
    resultsDir: 'allure-results'
    }));
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });

  }
};
