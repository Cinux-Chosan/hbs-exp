import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let id = params.list_id;
    return {
      id
    };
  }
});
