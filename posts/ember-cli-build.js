/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    lessOptions: {
      paths: [
        'app/styles',
        'bower_components/bootstrap/less'
      ]
    },
    babel: {
      optional: ['es7.decorators'],
      includePolyfill: true,
      comments: false
    },
    autoprefixer: {
      browsers: ['last 2 ios version'],
      cascade: false
    },
    'ember-cli-qunit': { // turn off jshint
      useLintTree: false
    },
    nodeAssets: {
      'wangeditor': {
        import: {
          srcDir: 'dist',
          include: [{
            path: 'css/wangEditor.css',
            outputFile: 'assets2/wang-editor.css'
          }, {
            path: 'js/wangEditor.min.js',
            outputFile: 'assets2/wang-editor.js'
          }]
        },
        public: {
          srcDir: 'dist',
          destDir: 'assets2',
          include: [{
            path: 'fonts/*'
          }]
        }
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.


  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');



  return app.toTree();
};
