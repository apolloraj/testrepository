//cucumber.conf.js
exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome',
    "handlesAlerts":true,
    "unexpectedAlertBehaviour": "accept"
  },
  onComplete: function() {
    var reporter = require('cucumber-html-reporter');

    var options = {
      theme: 'bootstrap',
      jsonFile: 'reports/cucumber_report.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        //"Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 8",
        "Parallel": "Scenarios",
        //"Executed": "Remote"
      }
    };

    reporter.generate(options);
  },

  // Spec patterns are relative to this directory.
  specs: [
    //'features/*.feature'
    //'features/capeTownNegative.feature'
    'features/capeTown.feature'
  ],

  baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: [
    'env.js',
    'step_definitions/capeTown.steps.js'],
    format: 'json:reports/cucumber_report.json',
    resultJsonOutputFile: 'reports/cucumber_report.json'
  }


};