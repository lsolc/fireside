
loader.register('tests/bootstrap_test', function(require) {


module("App");

test("App is defined", function () {
  ok(typeof App !== 'undefined', "App is undefined");
});


});
