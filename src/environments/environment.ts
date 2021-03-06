// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.






//Para probar en movil tambien, cambiar localhost por la IP actual del PC.
//const myIP = "10.10.4.172";
// const myIP = "192.168.224.109";
const myIP = "localhost";

export const environment = {
  production: false,
  urlGetAllProducts:    "http://" + myIP + ":8081/getAlimentoName",
  urlGetProductoByID:   "http://" + myIP + ":8081/getAlimentoById",
  urlCompareAliment:    "http://" + myIP + ":8081/compararAlimentos",
  urlLogin:             "http://" + myIP + ":8081/validateUser",
  urlRegistro:          "http://" + myIP + ":8081/addUser",
  urlHabitos :          "http://" + myIP + ":8081/getRandomHabito",
  urlGetPropiedades:    "http://" + myIP + ":8081/getAllPropiedades",
  urlAddHistoria:       "http://" + myIP + ":8081/addHistoria",
  urlGetHistorias:      "http://" + myIP + ":8081/getHistoriaById",
  urlAddDieta:          "http://" + myIP + ":8081/addDieta",
  urlGetUserById:       "http://" + myIP + ":8081/getUserById",
  urlSetIndexPerfil:    "http://" + myIP + ":8081/setIndexProfile",
  urlSetIndexAlimentos: "http://" + myIP + ":8081/setIndexAlimento"
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
