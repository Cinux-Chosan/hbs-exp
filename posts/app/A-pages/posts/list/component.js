import Ember from 'ember';

export default Ember.Component.extend({
  showList: true,
  actions: {
    toggleShowList() {
      this.toggleProperty('showList');
    },
    rotate(mod) {}
  }
});
