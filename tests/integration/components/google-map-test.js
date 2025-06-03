import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | google-map', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GoogleMap />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <GoogleMap>
        template block text
      </GoogleMap>
    `);

    assert.dom().hasText('template block text');
  });
});
