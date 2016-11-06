import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var blogPost = this.get('store').findRecord('query', 1);
  }
});
