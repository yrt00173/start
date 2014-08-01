jQuery(function($) {
  var uri = 'https://github.com/yrt00173/start/eight_data/ice_eight/eight_ice2.js';
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
