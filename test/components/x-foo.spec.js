import { XFooComponent } from 'my-addon';

describe('XFooComponent', function() {

  var xFoo = XFooComponent.create();

  it('exists', function() {
    expect(xFoo).toBeDefined();
  });

  it('bar is ohai', function() {
    expect(xFoo.get('bar')).toBe('ohai');
  });

});

