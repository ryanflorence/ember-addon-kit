import Ember from 'ember';

var XFooComponent = Ember.Component.extend({

  click: function() {
    alert('hey oh!');
  },

  bar: function() {
    return 'ohai';
  }.property()

});

export default XFooComponent;

