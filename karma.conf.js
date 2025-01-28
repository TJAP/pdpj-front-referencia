// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
      require('karma-sonarqube-unit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './TestResults/codecoverage'),
      reports: ['html', 'lcovonly', 'cobertura'],
      fixWebpackSourcePaths: true,
      'report-config': {
        html: {
          subdir: 'Report'
        },
        cobertura:{
          file: 'coverage.cobertura.xml'
        }
      },
    },
    customLaunchers: {
      ChromeHeadlessNoSandbox:  {
              base:   'ChromeHeadless',
              flags:  [
                '--no-sandbox',
                '--disable-gpu',
                '--enable-logging',
                '--no-default-browser-check',
                '--no-first-run',
                '--disable-default-apps',
                '--disable-popup-blocking',
                '--disable-translate',
                '--disable-background-timer-throttling',
                '--disable-renderer-backgrounding',
                '--disable-device-discovery-notifications',
                '--disable-dev-shm-usage',
                '--headless',
                '--disable-gpu',
                '--remote-debugging-port=9222',
                '--disable-extensions',
                '--disable-web-security',
                '--shm-size=1gb',
              ],
            }
      },
    reporters: ['progress', "sonarqubeUnit", 'kjhtml', 'junit'],
    junitReporter: {
      outputDir: './TestResults/result/junit' // results will be saved as $outputDir/$browserName.xml
    },
    sonarQubeUnitReporter: {
      sonarQubeVersion: 'LATEST',
      outputFile: './TestResults/result/sonarqube/ut_report.xml',
      useBrowserName: false,
      overrideTestDescription: true,
      testPaths: ['.'],
      testFilePattern: '.spec.ts'
    },
    failOnEmptyTestSuite: false,
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadlessNoSandbox'],
    captureTimeout: 210000,
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout: 210000,
    browserNoActivityTimeout: 210000,
    singleRun: false,
    restartOnFileChange: true
  });
};
