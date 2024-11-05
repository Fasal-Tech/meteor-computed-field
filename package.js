Package.describe({
  name: 'mrspark:computed-field',
  summary: "Reactively computed field for Meteor",
  version: '1.0.0',
  git: 'https://github.com/peerlibrary/meteor-computed-field.git'
});

Package.onUse(function (api) {
  api.versionsFrom('3.0.4');

  // Core dependencies.
  api.use([
    'ecmascript',
    'tracker',
    'reactive-var',
    'underscore'
  ]);

  api.use([
    'blaze@3.0.0'
  ], {weak: true});

  api.export('ComputedField');

  api.mainModule('lib.js');
});

Package.onTest(function (api) {
  api.versionsFrom('3.0.4');

  // Core dependencies.
  api.use([
    'coffeescript',
    'ecmascript',
    'tracker',
    'reactive-var',
    'templating',
    'blaze@3.0.0',
    'spacebars',
    'underscore',
    'jquery'
  ]);

  // Internal dependencies.
  api.use([
    'mrspark:computed-field'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:classy-test@0.4.0'
  ]);

  api.addFiles([
    'tests.coffee'
  ]);

  api.addFiles([
    'tests_client.html',
    'tests_client.coffee',
    'tests_client.css'
  ], 'client');
});
