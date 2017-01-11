angular.module('standardChronology').service('homeSvc', function($http) {

  var verses = {};
  var ref, header;

  this.saveVerses = function(data, hdr) {
    verses = data;
    header = hdr;
  }

  this.getVerses = function() {
    return verses;
  }

  this.getHeader = function() {
    return header;
  }

  this.getReference = function() {
    return ref;
  }

  this.getScripture = function(reference) {
    ref = reference;
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
