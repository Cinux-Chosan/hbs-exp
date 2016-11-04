import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({
  age: '19',
  @computed('model.name')
  myName(name) {
    return name;
  },
  hours: 1,

  longMessage: 'sdsaklfjalsdkfajslkdfjl了看风景啊离开司法局拉萨减肥卢卡斯觉得非拉萨减肥拉开司机法律；阿三觉得非拉开岁了；发送减肥狂拉萨觉得非卢卡斯就罚款拉萨减肥了',

  didInsertElement() {
    $.ajax({
      url: '/data',
      dataType: 'json'
    }).then(r => {
      setTimeout(() => {
        this.set('age', r.name);
      }, 3000);
    });
    setInterval(() => { this.set('hours', this.get('hours') + 1); }, 1000);
  }
});
