import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({
  age: '19',
  @computed('model.name')
  myName(name) {
    return name;
  },
  didInsertElement() {
    $.ajax({
      url: '/data',
      dataType: 'json'
    }).then(r => {
      setTimeout(() => {
        this.set('age', r.name);
      }, 3000);
    });
  }
});
