// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  servers: {
    oauth: 'http://192.168.1.76:8090/oauth',
    userApi: 'http://192.168.1.76:8090/api/user',
    camera1: 'http://192.168.1.76:8090/camera1',
    camera2: 'http://192.168.1.76:8090/camera2'
  },
  oauth: {
    appName: 'beo-app-client',
    appSecret: 'e6aec4e0-e421-415a-8f84-d06237963831'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
