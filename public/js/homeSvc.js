angular.module('standardChronology').service('homeSvc', function($http) {

  this.getReference = function() {
    return JSON.parse(localStorage["current_verses"]);
  }

  this.saveReference = function(reference) {
    localStorage["current_verses"] = JSON.stringify(reference);
  }

  this.getScripture = function(reference) {
    localStorage["current_verses"] = JSON.stringify(reference);
    var refArr = reference.split(" ");
    var secArr = refArr[1].split(":");
    var book = refArr[0];
    var chapter = secArr[0];
    var verses = secArr[1];
    return $http ({
      method: 'GET',
      url: '/scriptures/' + book + "/" + chapter + "/" + verses
    });
  }
});
