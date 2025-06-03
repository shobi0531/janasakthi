'use strict';



;define("ember-app/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "ember-app/config/environment", "@embroider/macros/es-compat2", "ember-app/deprecation-workflow"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment, _esCompat, _importSync20) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"ember-app/config/environment",0,"@embroider/macros",0,"./deprecation-workflow"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  {
    (0, _esCompat.default)(_importSync20);
  }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("ember-app/components/about-us", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div
    style="display: flex; justify-content: center; align-items: center; padding: 5rem; background-color: #fdf3ee;"
  >
    <div style="width: 20%; border-bottom: 2px solid black; padding-right: 1rem;">
      <h2 style="font-size: 1.5rem;">Our Core</h2>
    </div>
    <div style="width: 60%; padding-left: 3rem;">
      <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem;">About
        Us</h1>
      <p style="font-size: 1rem; color: #333;">
        At Global Trade Solutions, we are more than just a service provider; we
        are your strategic partner in navigating the complexities of international
        trade. Founded in 1998 by Sarah Thompson, our mission is to empower
        businesses of all sizes to expand their horizons and achieve success in
        the global marketplace. We pride ourselves on our commitment to
        excellence, integrity, and customer satisfaction.
      </p>
    </div>
  </div>
  */
  {
    "id": "DMHHuZeK",
    "block": "[[[10,0],[14,5,\"display: flex; justify-content: center; align-items: center; padding: 5rem; background-color: #fdf3ee;\"],[12],[1,\"\\n  \"],[10,0],[14,5,\"width: 20%; border-bottom: 2px solid black; padding-right: 1rem;\"],[12],[1,\"\\n    \"],[10,\"h2\"],[14,5,\"font-size: 1.5rem;\"],[12],[1,\"Our Core\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,5,\"width: 60%; padding-left: 3rem;\"],[12],[1,\"\\n    \"],[10,\"h1\"],[14,5,\"font-size: 2rem; font-weight: bold; margin-bottom: 1rem;\"],[12],[1,\"About\\n      Us\"],[13],[1,\"\\n    \"],[10,2],[14,5,\"font-size: 1rem; color: #333;\"],[12],[1,\"\\n      At Global Trade Solutions, we are more than just a service provider; we\\n      are your strategic partner in navigating the complexities of international\\n      trade. Founded in 1998 by Sarah Thompson, our mission is to empower\\n      businesses of all sizes to expand their horizons and achieve success in\\n      the global marketplace. We pride ourselves on our commitment to\\n      excellence, integrity, and customer satisfaction.\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[\"div\",\"h2\",\"h1\",\"p\"]]",
    "moduleName": "ember-app/components/about-us.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "about-us"));
});
;define("ember-app/components/aluminium-popup", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  throw new Error("`ember-app/components/aluminium-popup.js` does not contain a `default export`. Did you forget to export the component class?");
});
;define("ember-app/components/brass-popup", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  throw new Error("`ember-app/components/brass-popup.js` does not contain a `default export`. Did you forget to export the component class?");
});
;define("ember-app/components/copper-popup", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="modal-backdrop" {{on "click" this.handleBackdropClick}}>
    <div class="modal-box relative" {{on "click" this.stopPropagation}}>
  
      <!-- Close Button -->
      <button
        class="modal-close-button"
        {{on "click" this.closePopup}}
        aria-label="Close"
      >
        &times;
      </button>
  
      <!-- Image Display Area -->
      <div class="modal-image-area">
        {{#if this.selectedItem}}
          <img
            src={{this.getImagePath this.selectedItem}}
            alt={{this.selectedItem}}
            class="modal-image"
          />
        {{else}}
          <p>Select an item to view its image</p>
        {{/if}}
  
      </div>
  
      <!-- Buttons -->
      <div class="modal-content">
        <button
          class="modal-button"
          {{on "click" (fn this.showImageFor "copper-wires")}}
        >Copper Wires</button>
        <button
          class="modal-button"
          {{on "click" (fn this.showImageFor "rods")}}
        >Rods</button>
        <button
          class="modal-button"
          {{on "click" (fn this.showImageFor "cathodes")}}
        >Cathodes</button>
        <button
          class="modal-button"
          {{on "click" (fn this.showImageFor "coils")}}
        >Coils</button>
        <button
          class="modal-button"
          {{on "click" (fn this.showImageFor "copper-spare-parts")}}
        >Copper Spare Parts</button>
  
        <button
          class="modal-button modal-contact-button"
          {{on "click" this.contactUs}}
        >
          Contact Us!
        </button>
      </div>
  
    </div>
  </div>
  */
  {
    "id": "mck19Zus",
    "block": "[[[11,0],[24,0,\"modal-backdrop\"],[4,[38,1],[\"click\",[30,0,[\"handleBackdropClick\"]]],null],[12],[1,\"\\n  \"],[11,0],[24,0,\"modal-box relative\"],[4,[38,1],[\"click\",[30,0,[\"stopPropagation\"]]],null],[12],[1,\"\\n\\n    \"],[3,\" Close Button \"],[1,\"\\n    \"],[11,\"button\"],[24,0,\"modal-close-button\"],[24,\"aria-label\",\"Close\"],[4,[38,1],[\"click\",[30,0,[\"closePopup\"]]],null],[12],[1,\"\\n      ×\\n    \"],[13],[1,\"\\n\\n    \"],[3,\" Image Display Area \"],[1,\"\\n    \"],[10,0],[14,0,\"modal-image-area\"],[12],[1,\"\\n\"],[41,[30,0,[\"selectedItem\"]],[[[1,\"        \"],[10,\"img\"],[15,\"src\",[28,[30,0,[\"getImagePath\"]],[[30,0,[\"selectedItem\"]]],null]],[15,\"alt\",[30,0,[\"selectedItem\"]]],[14,0,\"modal-image\"],[12],[13],[1,\"\\n\"]],[]],[[[1,\"        \"],[10,2],[12],[1,\"Select an item to view its image\"],[13],[1,\"\\n\"]],[]]],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[3,\" Buttons \"],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[11,\"button\"],[24,0,\"modal-button\"],[4,[38,1],[\"click\",[28,[37,6],[[30,0,[\"showImageFor\"]],\"copper-wires\"],null]],null],[12],[1,\"Copper Wires\"],[13],[1,\"\\n      \"],[11,\"button\"],[24,0,\"modal-button\"],[4,[38,1],[\"click\",[28,[37,6],[[30,0,[\"showImageFor\"]],\"rods\"],null]],null],[12],[1,\"Rods\"],[13],[1,\"\\n      \"],[11,\"button\"],[24,0,\"modal-button\"],[4,[38,1],[\"click\",[28,[37,6],[[30,0,[\"showImageFor\"]],\"cathodes\"],null]],null],[12],[1,\"Cathodes\"],[13],[1,\"\\n      \"],[11,\"button\"],[24,0,\"modal-button\"],[4,[38,1],[\"click\",[28,[37,6],[[30,0,[\"showImageFor\"]],\"coils\"],null]],null],[12],[1,\"Coils\"],[13],[1,\"\\n      \"],[11,\"button\"],[24,0,\"modal-button\"],[4,[38,1],[\"click\",[28,[37,6],[[30,0,[\"showImageFor\"]],\"copper-spare-parts\"],null]],null],[12],[1,\"Copper Spare Parts\"],[13],[1,\"\\n\\n      \"],[11,\"button\"],[24,0,\"modal-button modal-contact-button\"],[4,[38,1],[\"click\",[30,0,[\"contactUs\"]]],null],[12],[1,\"\\n        Contact Us!\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n  \"],[13],[1,\"\\n\"],[13]],[],[\"div\",\"on\",\"button\",\"if\",\"img\",\"p\",\"fn\"]]",
    "moduleName": "ember-app/components/copper-popup.hbs",
    "isStrictMode": false
  });
  let CopperPopupComponent = _exports.default = (_class = class CopperPopupComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "selectedItem", _descriptor, this);
    }
    showImageFor(item) {
      console.log('Selected:', item);
      this.selectedItem = item;
    }
    getImagePath(item) {
      switch (item) {
        case 'copper-wires':
          return '/assets/copper-wires.jpg';
        case 'rods':
          return '/assets/rods.jpg';
        case 'cathodes':
          return '/assets/cathodes.jpg';
        case 'coils':
          return '/assets/coils.jpg';
        case 'copper-spare-parts':
          return '/assets/copper-spare-parts.jpg';
        default:
          return null;
      }
    }
    closePopup() {
      this.selectedItem = null;
      this.args.onClose?.();
    }
    handleBackdropClick(event) {
      if (event.target.classList.contains('modal-backdrop')) {
        this.closePopup();
      }
    }
    stopPropagation(event) {
      event.stopPropagation();
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "selectedItem", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "showImageFor", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showImageFor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closePopup", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "closePopup"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleBackdropClick", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleBackdropClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stopPropagation", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "stopPropagation"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, CopperPopupComponent);
});
;define("ember-app/components/core-values", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <section class="core-values-section">
    <h2 class="core-values-heading">Our Core Values</h2>
  
    <div class="core-values-container">
      <!-- 1. Integrity -->
      <div class="core-value-item" {{on "click" this.toggleCopperModal}}>
        <div class="core-value-image-wrapper small">
          <img
            src="/assets/copper.jpg"
            alt="Integrity"
            class="core-value-image small"
          />
        </div>
        <h3 class="core-value-title">Copper</h3>
        <p class="core-value-description">
          We uphold the highest standards of honesty and transparency in all our
          dealings.
        </p>
      </div>
  
      {{#if this.showCopperModal}}
        <CopperPopup @onClose={{this.toggleCopperModal}} />
      {{/if}}
  
      <!-- 2. Excellence -->
      <div class="core-value-item">
        <div class="core-value-image-wrapper small">
          <img
            src="/assets/alluminium.jpg"
            alt="Excellence"
            class="core-value-image small"
          />
        </div>
        <h3 class="core-value-title">Alluminium</h3>
        <p class="core-value-description">We deliver top-tier solutions with
          precision, consistency, and innovation.</p>
      </div>
  
      <!-- 3. Teamwork -->
      <div class="core-value-item">
        <div class="core-value-image-wrapper small">
          <img
            src="/assets/brass.jpg"
            alt="Teamwork"
            class="core-value-image small"
          />
        </div>
        <h3 class="core-value-title">Brass</h3>
        <p class="core-value-description">We collaborate to achieve shared goals
          and create greater value together.</p>
      </div>
  
      <!-- 4. Innovation -->
      <div class="core-value-item">
        <div class="core-value-image-wrapper small">
          <img
            src="/assets/maize-rice.jpg"
            alt="Innovation"
            class="core-value-image small"
          />
        </div>
        <h3 class="core-value-title">Rice & Wheat</h3>
        <p class="core-value-description">We drive progress by embracing new ideas
          and cutting-edge technology.</p>
      </div>
    </div>
  </section>
  */
  {
    "id": "u7FiDSz4",
    "block": "[[[10,\"section\"],[14,0,\"core-values-section\"],[12],[1,\"\\n  \"],[10,\"h2\"],[14,0,\"core-values-heading\"],[12],[1,\"Our Core Values\"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"core-values-container\"],[12],[1,\"\\n    \"],[3,\" 1. Integrity \"],[1,\"\\n    \"],[11,0],[24,0,\"core-value-item\"],[4,[38,3],[\"click\",[30,0,[\"toggleCopperModal\"]]],null],[12],[1,\"\\n      \"],[10,0],[14,0,\"core-value-image-wrapper small\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,\"src\",\"/assets/copper.jpg\"],[14,\"alt\",\"Integrity\"],[14,0,\"core-value-image small\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"h3\"],[14,0,\"core-value-title\"],[12],[1,\"Copper\"],[13],[1,\"\\n      \"],[10,2],[14,0,\"core-value-description\"],[12],[1,\"\\n        We uphold the highest standards of honesty and transparency in all our\\n        dealings.\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"showCopperModal\"]],[[[1,\"      \"],[8,[39,8],null,[[\"@onClose\"],[[30,0,[\"toggleCopperModal\"]]]],null],[1,\"\\n\"]],[]],null],[1,\"\\n    \"],[3,\" 2. Excellence \"],[1,\"\\n    \"],[10,0],[14,0,\"core-value-item\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"core-value-image-wrapper small\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,\"src\",\"/assets/alluminium.jpg\"],[14,\"alt\",\"Excellence\"],[14,0,\"core-value-image small\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"h3\"],[14,0,\"core-value-title\"],[12],[1,\"Alluminium\"],[13],[1,\"\\n      \"],[10,2],[14,0,\"core-value-description\"],[12],[1,\"We deliver top-tier solutions with\\n        precision, consistency, and innovation.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[3,\" 3. Teamwork \"],[1,\"\\n    \"],[10,0],[14,0,\"core-value-item\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"core-value-image-wrapper small\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,\"src\",\"/assets/brass.jpg\"],[14,\"alt\",\"Teamwork\"],[14,0,\"core-value-image small\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"h3\"],[14,0,\"core-value-title\"],[12],[1,\"Brass\"],[13],[1,\"\\n      \"],[10,2],[14,0,\"core-value-description\"],[12],[1,\"We collaborate to achieve shared goals\\n        and create greater value together.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[3,\" 4. Innovation \"],[1,\"\\n    \"],[10,0],[14,0,\"core-value-item\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"core-value-image-wrapper small\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,\"src\",\"/assets/maize-rice.jpg\"],[14,\"alt\",\"Innovation\"],[14,0,\"core-value-image small\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"h3\"],[14,0,\"core-value-title\"],[12],[1,\"Rice & Wheat\"],[13],[1,\"\\n      \"],[10,2],[14,0,\"core-value-description\"],[12],[1,\"We drive progress by embracing new ideas\\n        and cutting-edge technology.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[\"section\",\"h2\",\"div\",\"on\",\"img\",\"h3\",\"p\",\"if\",\"copper-popup\"]]",
    "moduleName": "ember-app/components/core-values.hbs",
    "isStrictMode": false
  });
  let CoreValuesComponent = _exports.default = (_class = class CoreValuesComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "showCopperModal", _descriptor, this);
    }
    toggleCopperModal() {
      console.log('Parent: toggleCopperModal called');
      this.showCopperModal = !this.showCopperModal;
      console.log(this.showCopperModal);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "showCopperModal", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleCopperModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleCopperModal"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, CoreValuesComponent);
});
;define("ember-app/components/india-map", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/template-factory"], function (_exports, _component, _component2, _object, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div
    id="map"
    {{did-insert this.loadMap}}
    style="height: 500px; width: 100%; background-color: lightgray;"
  ></div>
  */
  {
    "id": "6r6MLyQ5",
    "block": "[[[11,0],[24,1,\"map\"],[24,5,\"height: 500px; width: 100%; background-color: lightgray;\"],[4,[38,1],[[30,0,[\"loadMap\"]]],null],[12],[13]],[],[\"div\",\"did-insert\"]]",
    "moduleName": "ember-app/components/india-map.hbs",
    "isStrictMode": false
  });
  let IndiaMapComponent = _exports.default = (_class = class IndiaMapComponent extends _component2.default {
    loadMap(element) {
      setTimeout(() => {
        const locations = [{
          name: 'Bangalore',
          lat: 12.9716,
          lng: 77.5946
        }, {
          name: 'Chennai',
          lat: 13.0827,
          lng: 80.2707
        }, {
          name: 'Mumbai',
          lat: 19.076,
          lng: 72.8777
        }, {
          name: 'Delhi',
          lat: 28.6139,
          lng: 77.209
        }, {
          name: 'Noida',
          lat: 28.5355,
          lng: 77.391
        }, {
          name: 'Hyderabad',
          lat: 17.385,
          lng: 78.4867
        }];
        const map = new google.maps.Map(element, {
          zoom: 5,
          center: {
            lat: 20.5937,
            lng: 78.9629
          } // Center of India
        });
        locations.forEach(loc => {
          new google.maps.Marker({
            position: {
              lat: loc.lat,
              lng: loc.lng
            },
            map,
            title: loc.name
          });
        });
      }, 500); // delay to ensure google.maps is ready
    }
  }, _applyDecoratedDescriptor(_class.prototype, "loadMap", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "loadMap"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, IndiaMapComponent);
});
;define("ember-app/components/janasakthi-group", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div style="background-color: #f9ede8; padding: 2rem;">
    <div
      style="display: flex; justify-content: space-between; align-items: center;"
    >
      <div>
        <h1
          style="font-size: 4rem; font-weight: bold; margin-bottom: 1rem;"
        >Janasakthi Group</h1>
      </div>
      <div>
        <img
          src="/assets/port-image.jpg"
          alt="Port with containers"
          style="width: 400px; border-radius: 1rem;"
        />
      </div>
    </div>
  
    <div style="margin-top: 5rem;">
      <h2 style="font-size: 2rem; font-weight: 500;">Why Choose Us?</h2>
  
      <div
        style="display: flex; justify-content: space-between; margin-top: 3rem;"
      >
        <div style="width: 30%;">
          <p style="font-weight: bold;">01</p>
          <hr />
          <p style="font-weight: 500; margin-top: 1rem;">Vast Network</p>
          <p style="color: gray;">Global reach, local expertise.</p>
        </div>
        <div style="width: 30%;">
          <p style="font-weight: bold;">02</p>
          <hr />
          <p style="font-weight: 500; margin-top: 1rem;">Safe Trade</p>
          <p style="color: gray;">Efficient, reliable, and secure.</p>
        </div>
        <div style="width: 30%;">
          <p style="font-weight: bold;">03</p>
          <hr />
          <p style="font-weight: 500; margin-top: 1rem;">Easy Process</p>
          <p style="color: gray;">From sourcing to delivery, seamless.</p>
        </div>
      </div>
    </div>
  </div>
  */
  {
    "id": "H6zXXcLK",
    "block": "[[[10,0],[14,5,\"background-color: #f9ede8; padding: 2rem;\"],[12],[1,\"\\n  \"],[10,0],[14,5,\"display: flex; justify-content: space-between; align-items: center;\"],[12],[1,\"\\n    \"],[10,0],[12],[1,\"\\n      \"],[10,\"h1\"],[14,5,\"font-size: 4rem; font-weight: bold; margin-bottom: 1rem;\"],[12],[1,\"Janasakthi Group\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[12],[1,\"\\n      \"],[10,\"img\"],[14,\"src\",\"/assets/port-image.jpg\"],[14,\"alt\",\"Port with containers\"],[14,5,\"width: 400px; border-radius: 1rem;\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,5,\"margin-top: 5rem;\"],[12],[1,\"\\n    \"],[10,\"h2\"],[14,5,\"font-size: 2rem; font-weight: 500;\"],[12],[1,\"Why Choose Us?\"],[13],[1,\"\\n\\n    \"],[10,0],[14,5,\"display: flex; justify-content: space-between; margin-top: 3rem;\"],[12],[1,\"\\n      \"],[10,0],[14,5,\"width: 30%;\"],[12],[1,\"\\n        \"],[10,2],[14,5,\"font-weight: bold;\"],[12],[1,\"01\"],[13],[1,\"\\n        \"],[10,\"hr\"],[12],[13],[1,\"\\n        \"],[10,2],[14,5,\"font-weight: 500; margin-top: 1rem;\"],[12],[1,\"Vast Network\"],[13],[1,\"\\n        \"],[10,2],[14,5,\"color: gray;\"],[12],[1,\"Global reach, local expertise.\"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,5,\"width: 30%;\"],[12],[1,\"\\n        \"],[10,2],[14,5,\"font-weight: bold;\"],[12],[1,\"02\"],[13],[1,\"\\n        \"],[10,\"hr\"],[12],[13],[1,\"\\n        \"],[10,2],[14,5,\"font-weight: 500; margin-top: 1rem;\"],[12],[1,\"Safe Trade\"],[13],[1,\"\\n        \"],[10,2],[14,5,\"color: gray;\"],[12],[1,\"Efficient, reliable, and secure.\"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,5,\"width: 30%;\"],[12],[1,\"\\n        \"],[10,2],[14,5,\"font-weight: bold;\"],[12],[1,\"03\"],[13],[1,\"\\n        \"],[10,\"hr\"],[12],[13],[1,\"\\n        \"],[10,2],[14,5,\"font-weight: 500; margin-top: 1rem;\"],[12],[1,\"Easy Process\"],[13],[1,\"\\n        \"],[10,2],[14,5,\"color: gray;\"],[12],[1,\"From sourcing to delivery, seamless.\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[\"div\",\"h1\",\"img\",\"h2\",\"p\",\"hr\"]]",
    "moduleName": "ember-app/components/janasakthi-group.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "janasakthi-group"));
});
;define("ember-app/components/rice-wheat-popup", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  throw new Error("`ember-app/components/rice-wheat-popup.js` does not contain a `default export`. Did you forget to export the component class?");
});
;define("ember-app/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("ember-app/data-adapter", ["exports", "@ember-data/debug/data-adapter"], function (_exports, _dataAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/data-adapter"eaimeta@70e063a35619d71f
});
;define("ember-app/deprecation-workflow", ["ember-cli-deprecation-workflow"], function (_emberCliDeprecationWorkflow) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-deprecation-workflow"eaimeta@70e063a35619d71f
  /**
   * Docs: https://github.com/ember-cli/ember-cli-deprecation-workflow
   */
  (0, _emberCliDeprecationWorkflow.default)({
    /**
      false by default, but if a developer / team wants to be more aggressive about being proactive with
      handling their deprecations, this should be set to "true"
    */
    throwOnUnhandled: false,
    workflow: [
      /* ... handlers ... */
      /* to generate this list, run your app for a while (or run the test suite),
       * and then run in the browser console:
       *
       *    deprecationWorkflow.flushDeprecations()
       *
       * And copy the handlers here
       */
      /* example: */
      /* { handler: 'silence', matchId: 'template-action' }, */
    ]
  });
});
;define("ember-app/helpers/app-version", ["exports", "@ember/component/helper", "ember-app/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"ember-app/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("ember-app/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("ember-app/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-app/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"ember-app/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("ember-app/initializers/ember-data", ["exports", "@ember-data/request-utils/deprecation-support"], function (_exports, _deprecationSupport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/request-utils/deprecation-support"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("ember-app/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-insert"eaimeta@70e063a35619d71f
});
;define("ember-app/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-update"eaimeta@70e063a35619d71f
});
;define("ember-app/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/will-destroy"eaimeta@70e063a35619d71f
});
;define("ember-app/router", ["exports", "@ember/routing/router", "ember-app/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"ember-app/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {});
});
;define("ember-app/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("ember-app/services/store", ["exports", "@ember/debug", "ember-data/store"], function (_exports, _debug, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-data/store"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the store service. Use `export { default } from 'ember-data/store';` in app/services/store.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("ember-app/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <JanasakthiGroup />
  <IndiaMap />
  <AboutUs />
  <CoreValues />
  */
  {
    "id": "XNUNC8kD",
    "block": "[[[8,[39,0],null,null,null],[1,\"\\n\"],[8,[39,1],null,null,null],[1,\"\\n\"],[8,[39,2],null,null,null],[1,\"\\n\"],[8,[39,3],null,null,null]],[],[\"janasakthi-group\",\"india-map\",\"about-us\",\"core-values\"]]",
    "moduleName": "ember-app/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("ember-app/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from '@ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("ember-app/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from '@ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("ember-app/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from '@ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("ember-app/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from '@ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;

;define('ember-app/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("ember-app/app")["default"].create({"name":"ember-app","version":"0.0.0+4d2b4f03"});
          }
        
//# sourceMappingURL=ember-app.map
