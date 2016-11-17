/*****变量声明区 begin*****/

let loaded = [];



/*****变量声明区 end******/


export function load(path) {
  return new Ember.RSVP.Promise((resolve, reject) => {
    let tag = null;
    if (loaded.includes(path)) {
      let hadResolved = true;
      return resolve({
        hadResolved
      });
    }
    if (path.endsWith('.css')) {
      tag = document.createElement('link');
      tag.rel = 'stylesheet';
      tag.type = 'text/css';
      tag.href = path;
    } else if (path.endsWith('.js')) {
      tag = document.createElement('script');
      tag.src = path;
    }
    tag.onload = () => {
      loaded.push(path);
      resolve();
    }
    document.getElementsByTagName('body')[0].appendChild(tag);
  });
}


//
// export function load(path) {
//   return new Ember.RSVP.Promise((resolve, reject) => {
//
//     let tag = $('<link>');
//
//     if (path.endsWith('.css')) {
//       tag.attr({
//         rel: 'stylesheet',
//         type: "text/css",
//         href: path
//       });
//     //  $('head').append(tag);
//     } else if (path.endsWith('.js')) {
//       tag = $('<script>');
//       tag.attr({
//         type: 'text/javascript',
//         src: path
//       });
//     }
//     tag.on('load', () => {
//       resolve();
//     });
//     $('body').append(tag);
//   });
// }
