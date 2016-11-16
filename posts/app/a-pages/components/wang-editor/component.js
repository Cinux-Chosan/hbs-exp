import Ember from 'ember';
import { load } from 'posts/utils/utils';

export default Ember.Component.extend({

  async init() {
    this._super(...arguments);
    load('/assets2/wang-editor.css');
    await load('/assets2/wang-editor.js');
    console.log("xxxxaaa");
  },

  didInsertElement() {
    let div = this.$('.wang-editor');
    var editor = new wangEditor(div);
    editor.create();
  }
});
