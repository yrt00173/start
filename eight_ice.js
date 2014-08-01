jQuery(function($) {
  var uri = 'https://github.com/yrt00173/start/blob/master/eight_ice2.js';
  var deferred = $.Deferred();
  deferred
    .then(function() {
      return $.getScript(uri);
    })
    .then(function() {
      $.eight.init();
    });
  deferred.resolve();
});
