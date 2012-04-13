// Entry point to the whole app
require(
  {
    baseUrl: '/scripts'
  },
  [
    'app',
    'init',
    'lib/domReady!'
  ], 
  function() {
     App.start();
  }
);






