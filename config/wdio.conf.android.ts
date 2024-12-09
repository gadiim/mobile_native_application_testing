import { config as sharedConfig } from "./wdio.conf.js";
import { join } from "path"
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

export const config = {
    ...sharedConfig,
    port: 4723,
    services: ["appium"],
    appium: {
      // For options see
      // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
      args: ["--allow-insecure"],
    },
    capabilities: [{
      platformName: 'Android',
      'appium:deviceName': 'Android Device',
      // 'appium:deviceName': 'ce12171c7bc3a63f04',
      // "appium:app": join(process.cwd(), "./apps/android/app-staging-debug.apk"),
      'appium:platformVersion': '9',
      'appium:automationName': 'UiAutomator2',
      'appium:appPackage': 'com.sec.android.app.popupcalculator',
      'appium:appActivity': 'com.sec.android.app.popupcalculator.Calculator',
      'appium:noReset': true,
      'appium:fullReset': true // automatic deletion of settings after completion of tests
  }],

}
