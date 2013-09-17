// I am still unsure if I like or dislike this method of unit
// testing: including an application and then chopping off units and
// testing them. Pulling in the app lets Ember run its internal
// initializers that wire things up, like component templates to
// their component definitions.
import App from 'app';

describe('XFooComponent', function() {

  var xFoo = App.XFooComponent.create();

  it('exists', function() {
    expect(xFoo).toBeDefined();
  });

  it('bar is ohai', function() {
    expect(xFoo.get('bar')).toBe('ohai');
  });

});

