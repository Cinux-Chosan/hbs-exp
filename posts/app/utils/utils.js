export function load(path) {
  if (path.endsWith('.css')) {
    let link = $('<link>');
    link.attr({
      rel: 'stylesheet',
      type: "text/css",
      href: path
    });
    $('head').append(link);
  }
}
