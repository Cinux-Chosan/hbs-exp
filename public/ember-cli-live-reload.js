(function() {
    var basePort = 49152;
    function getLiveReload() {
      var src = (location.protocol || 'http:') + '//' + (location.hostname || 'localhost') + ':' + basePort + '/livereload.js?snipver=1';
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.onerror = function error(a, b, c) {
        basePort++;
        //getLiveReload();
      };
      try {
          document.getElementsByTagName('head')[0].appendChild(script);
      } catch (e) {
      }
    };
    getLiveReload();
}());
