import Ember from 'ember';
import { load } from 'posts/utils/utils';

export default Ember.Component.extend({
  editor: null,
  content: '',

  didInsertElement() {
    this._super(...arguments);
    load('/assets2/wang-editor.css');
    load('/assets2/wang-editor.js').then((r) => {
      let div = this.$('.wang-editor'),
        editor = new wangEditor(div);
      editor.create();
      this.set('editor', editor);
    })
  },

  willDestroy() {
    this._super(...arguments);
    let editor = this.get('editor');
    editor && editor.destroy();
  }
});
