import Ember from 'ember';
import templates from './app-templates';

// - change 'my-addon' to the name of your addon
// - make sure you change the name in example/index.html, too
// - '/main.js' in this repo defines what will be exported
// - if your addon is installed via bower, the name in your bower.json is the
//   id people will use to import this addon
import { XFooComponent } from 'my-addon';

// consumers of this addon will need to wire up the template precompilation
// from your addon into their app, they are arbitrarily compiled in this
// example application to ./addon-templates.js, ember app kit will eventually
// handle this automatically
import addonTemplates from 'my-addon/templates';

var App = Ember.Application.create();

// consumers will again need to wire up the application objects to their app,
// ember-app-kit will eventually handle this automatically as well.
App.XFooComponent = XFooComponent;

export default App;

