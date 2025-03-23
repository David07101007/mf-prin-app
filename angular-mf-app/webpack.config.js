const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'angular-mf-app', //Nombre de la Aplicación en Module Federation

  remotes: { //Define los microfrontends
    authApp: "http://127.0.0.1:4201/remoteEntry.js",
    resumeEditorApp: "http://127.0.0.1:4202/remoteEntry.js",
    templatesApp: "http://127.0.0.1:4203/remoteEntry.js",
  },

  shared: { //comparte dependencias entre el Host y los Remotes , evitando que cada Remote cargue Angular duplicado
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto' }),
  },

});
