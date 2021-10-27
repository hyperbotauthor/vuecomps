// Build entry point

// Import vue component
import Labeled from './labeled.vue';
import Perscheck from './perscheck.vue';
import Perscombo from './perscombo.vue';
import Perstext from './perstext.vue';
import Tab from './tab.vue';
import Tabpane from './tabpane.vue';

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('Labeled', Labeled);
  Vue.component('Perscheck', Perscheck);
  Vue.component('Perscombo', Perscombo);
  Vue.component('Perstext', Perstext);
  Vue.component('Tab', Tab);
  Vue.component('Tabpane', Tabpane);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To auto-install when vue is found
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Equip with install
Labeled.install = install;
Perscheck.install = install;
Perscombo.install = install;
Perstext.install = install;
Tab.install = install;
Tabpane.install = install;

// Export components
export { Labeled, Perscheck, Perscombo, Perstext, Tab, Tabpane };
