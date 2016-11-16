export function load(path) {
  return new Ember.RSVP.Promise((resolve, reject) => {

    let tag = $('<link>');

    if (path.endsWith('.css')) {
      tag.attr({
        rel: 'stylesheet',
        type: "text/css",
        href: path
      });
    //  $('head').append(tag);
    } else if (path.endsWith('.js')) {
      tag = $('<script>');
      tag.attr({
        type: 'text/javascript',
        src: path
      });
    }
    tag.on('load', () => {
      resolve();
    });
    $('body').append(tag);
  });
}
