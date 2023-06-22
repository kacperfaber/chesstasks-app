import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.chesstasks',
  appName: 'chesstasks-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
