const { Eyes } = require('@applitools/eyes-webdriverio');

const APP_PATH = process.env.IOS_APP || require('path').resolve("./Sample-Instrumented-App/IOSFirstAppApp.app");

const caps = Eyes.setMobileCapabilities({
    platformName: "IOS",
    maxInstances: 1,
    "appium:deviceName": "iPhone 17",
    "appium:platformVersion": "26.0",
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "XCUITest",
    //For IOS the instrumented application not generated in dist folder, but one will get message on console the application is ready to use
    "appium:app":APP_PATH, // instrumented app
    "appium:newCommandTimeout": 300,
},
process.env.APPLITOOLS_API_KEY)

exports.config = {
    runner: 'local',
    specs: [
        ['./test/specs/**/*.js'],
    ],
    exclude: [],
    maxInstances: 10,
    port: 4723, //Port where Appium server is running
    hostname: 'localhost',
    capabilities: [caps],
    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'mocha',
     mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    reporters: ['spec'],
}