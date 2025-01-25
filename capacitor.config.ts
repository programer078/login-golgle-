import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.khr.sign',
  appName: 'sign',
  webDir: 'www',
  plugins :{
GoogleAuth:{
  scopes: ["profile", "email"],
  serverClientId: "615963470221-bvu5kj5arj9pujddqlj9a7pa52n2sp2f.apps.googleusercontent.com",
  forceCodeForRefreshToken: true
}
  },
};

export default config;
