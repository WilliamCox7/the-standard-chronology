angular.module('standardChronology').controller('homeCtrl', function($scope, homeSvc) {

  $scope.minimize = function($event) {
    var state = angular.element($event.currentTarget)[0].innerText;
    if (state === 'hide') {
      angular.element($event.currentTarget)[0].innerText = "show";
      angular.element($event.currentTarget).parent().parent().children().eq(1).css('display', 'none');
      angular.element($event.currentTarget).css('background', 'gray');
      angular.element($event.currentTarget).css('color', 'white');
    } else if (state === 'show') {
      angular.element($event.currentTarget)[0].innerText = "hide";
      angular.element($event.currentTarget).parent().parent().children().eq(1).css('display', 'flex');
      angular.element($event.currentTarget).css('background', 'none');
      angular.element($event.currentTarget).css('color', 'gray');
    }
  }

  $scope.getScripture = function($event, type) {
    var reference;
    if (type === 'form') {
      reference = angular.element($event.currentTarget)[0].previousElementSibling.value;
    } else if (type === 'link') {
      reference = angular.element($event.currentTarget)[0].innerText;
    }
    localStorage["current_verses"] = JSON.stringify(reference);
    var refArr = reference.split(" ");
    var secArr = refArr[1].split(":");
    var startV, endV;
    $scope.book = refArr[0];
    $scope.chap = secArr[0];
    $scope.vers = secArr[1];
    if (secArr[1].indexOf("-") >= 0) {
      startV = secArr[1].split("-")[0];
      endV = secArr[1].split("-")[1];
    }
  }

});
