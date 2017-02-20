angular.module('standardChronology').controller('wordCtrl', function($scope, homeSvc) {

  var getScripture = function() {
    $scope.reference = homeSvc.getReference();
    var refArr = $scope.reference.split(" ");
    var secArr = refArr[1].split(":");
    var startV, endV;
    $scope.book = refArr[0];
    $scope.chap = secArr[0];
    $scope.vers = secArr[1];
    if (secArr[1].indexOf("-") >= 0) {
      startV = secArr[1].split("-")[0];
      endV = secArr[1].split("-")[1];
    }
    homeSvc.getScripture($scope.reference).then(function(result) {
      var vs = result.data.verses;
      var obj = {};
      if (startV) {
        for (var i = startV; i <= endV; i++) { obj[i] = vs[i]; }
        startV = null; endV = null;
      }
      $scope.verses = obj;
      $scope.header = result.data.header;
    });
  }

  $scope.saveReference = function($event) {
    var reference = angular.element($event.currentTarget)[0].previousElementSibling.value;
    homeSvc.saveReference(reference);
    getScripture();
  }

  getScripture();

});
