import { config as sharedConfig } from "./wdio.conf.js";
import dotenv from "dotenv";
dotenv.config();  // Load environment variables from .env file
export const config = {
  ...sharedConfig,
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub.browserstack.com',

  capabilities: [
    {
      'bstack:options': { 
        deviceName: 'Samsung Galaxy S10',
        osVersion: '9.0',
        deviceOrientation: 'portrait',
      },
    }
  ],
  services: [
    [
      'browserstack',
      {
        app: process.env.BROWSERSTACK_ANDROID_APP_ID,
        buildIdentifier: "${BUILD_NUMBER}",
        browserstackLocal: true,
        testObservability: true,
        testObservabilityOptions: {
          projectName: "BrowserStack Android Calculator App testing",
          buildName: 'browserstack Android build',
        },
        debug: true,
        networkLogs: true,
        consoleLogs: "warn"
      },
    ]
  ],
}
