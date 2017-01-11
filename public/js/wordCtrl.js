angular.module('standardChronology').controller('wordCtrl', function($scope, homeSvc) {
  $scope.service = homeSvc;
  $scope.$watch('service.getVerses()', function(newVal) {
    $scope.verses = newVal;
  });
  $scope.$watch('service.getHeader()', function(newVal) {
    $scope.header = newVal;
  });
  $scope.$watch('service.getReference()', function(newVal) {
    $scope.reference = newVal;
  });
});
