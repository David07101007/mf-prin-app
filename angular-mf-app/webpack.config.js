const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'angular-mf-app', //Nombre de la Aplicación en Module Federation

  remotes: {
    authApp: 'authApp@http://localhost:4201/remoteEntry.js',
    resumeEditorApp: 'resumeEditorApp@http://localhost:4202/remoteEntry.js',
    templatesApp: 'templatesApp@http://localhost:4203/remoteEntry.js',
  },

  shared: { //comparte dependencias entre el Host y los Remotes , evitando que cada Remote cargue Angular duplicado
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto' }),
  },
  library: { type: 'module' } //Asegura que usa modulos correctamente

});
