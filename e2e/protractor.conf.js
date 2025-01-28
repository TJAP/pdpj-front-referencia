// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const cucumberXmlReport = require('cucumber-junit');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--headless',
        '--disable-gpu',
        '--remote-debugging-port=9222',
        '--disable-extensions',
      ],
      binary: process.env.CHROME_BIN
    },
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [ './src/steps/**/*.steps.ts' ],
    strict: true,
    format: 'json:TestResults/result/cucumber/report.json',
    dryRun: false
  },
  onPrepare() {
    require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    const dirName = process.cwd() + '/TestResults/result/cucumber';
    if (!require('fs').existsSync(dirName)) {
        require('mkdirp').sync(dirName);
    }
  },
  onComplete: () => {
    const fs = require('fs');
    const fileContent = fs.readFileSync('TestResults/result/cucumber/report.json', 'utf8');
    const junitReportContent = cucumberXmlReport(fileContent, {strict: true});
    fs.writeFileSync('TestResults/result/cucumber/report.xml', junitReportContent);
  }
};
