import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    let html = $('html'),
      width = html.width(),
      height = html.height();
    $('.index-body').attr('style', `width:${width}px;height:${height}px`);
  }
});
