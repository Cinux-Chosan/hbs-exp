import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return this.get('store').findRecord('person', 1).then(r => {
       return r;
     });
  }
});
