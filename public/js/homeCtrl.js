angular.module('standardChronology').controller('homeCtrl', function($scope) {
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
});
