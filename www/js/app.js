// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    
    if (window.datawedge) {
        datawedge.start("de.schnti.todo.SCAN");
        console.log("START");
        datawedge.registerForBarcode(function(data) {
            console.log(data);
            var labelType = data.type, barcode = data.barcode;

            alert("CALLBACK");

            alert("Barcode scanned.  Label type is: " + labelType + ", " + barcode);

        });
    }
  });
}).controller('ScanCtrl', function ($scope) {
  $scope.start = function(){
      alert('start');
      datawedge.startScanner();
  };
  $scope.stop = function(){
      alert('stop');
      datawedge.stopScanner();
  };
});
