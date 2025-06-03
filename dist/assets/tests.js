'use strict';

define("ember-app/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks, 'en-us'); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }
  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }
  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("ember-app/tests/integration/components/about-us-test", ["qunit", "ember-app/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-app/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | about-us', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <AboutUs />
      */
      {
        "id": "ti8S97zp",
        "block": "[[[8,[39,0],null,null,null]],[],[\"about-us\"]]",
        "moduleName": "C:\\Users\\shobi\\OneDrive\\Desktop\\janasakthi\\ember-app\\ember-app\\tests\\integration\\components\\about-us-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <AboutUs>
              template block text
            </AboutUs>
          
      */
      {
        "id": "L6yTu7cM",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"about-us\"]]",
        "moduleName": "C:\\Users\\shobi\\OneDrive\\Desktop\\janasakthi\\ember-app\\ember-app\\tests\\integration\\components\\about-us-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("ember-app/tests/integration/components/google-map-test", ["qunit", "ember-app/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-app/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | google-map', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <GoogleMap />
      */
      {
        "id": "UsUEGqFs",
        "block": "[[[8,[39,0],null,null,null]],[],[\"google-map\"]]",
        "moduleName": "C:\\Users\\shobi\\OneDrive\\Desktop\\janasakthi\\ember-app\\ember-app\\tests\\integration\\components\\google-map-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <GoogleMap>
              template block text
            </GoogleMap>
          
      */
      {
        "id": "rZWGzPu1",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"google-map\"]]",
        "moduleName": "C:\\Users\\shobi\\OneDrive\\Desktop\\janasakthi\\ember-app\\ember-app\\tests\\integration\\components\\google-map-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("ember-app/tests/integration/components/janasakthi-group-test", ["qunit", "ember-app/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-app/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | janasakthi-group', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <JanasakthiGroup />
      */
      {
        "id": "+A8BkZU1",
        "block": "[[[8,[39,0],null,null,null]],[],[\"janasakthi-group\"]]",
        "moduleName": "C:\\Users\\shobi\\OneDrive\\Desktop\\janasakthi\\ember-app\\ember-app\\tests\\integration\\components\\janasakthi-group-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <JanasakthiGroup>
              template block text
            </JanasakthiGroup>
          
      */
      {
        "id": "hV+rWyui",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"janasakthi-group\"]]",
        "moduleName": "C:\\Users\\shobi\\OneDrive\\Desktop\\janasakthi\\ember-app\\ember-app\\tests\\integration\\components\\janasakthi-group-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("ember-app/tests/test-helper", ["ember-app/app", "ember-app/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit/test-loader", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _testLoader, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-app/app",0,"ember-app/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit/test-loader",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.setupEmberOnerrorValidation)();
  (0, _testLoader.loadTests)();
  (0, _emberQunit.start)();
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
