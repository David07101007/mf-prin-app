const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'templatesApp',

  exposes: {
    './Module': './src/app/templates/templates.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  library: { type: 'module' } //Asegura que usa modulos correctamente

});
