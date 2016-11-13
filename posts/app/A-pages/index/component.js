import Ember from 'ember';
import {
  load
} from 'posts/utils/utils';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    load('//cdn.webfont.youziku.com/webfonts/nomal/94574/146/582802a2f629d8127c0d2c23.css');
    let html = $('html'),
      width = html.width(),
      height = html.height();
    $('.index-body').attr('style', `width:${width}px;height:${height}px`);
  }
});
