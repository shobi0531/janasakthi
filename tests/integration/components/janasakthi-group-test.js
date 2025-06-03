import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | janasakthi-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<JanasakthiGroup />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <JanasakthiGroup>
        template block text
      </JanasakthiGroup>
    `);

    assert.dom().hasText('template block text');
  });
});
