const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'resumeEditorApp',

  exposes: {
    //'./Component': './src/app/app.component.ts', // Expone un componente
    './Module':'./src/app/editor/editor.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
