angular.module('app').controller('listsCtrl', function(listFactory){
  // console.log('listCtrl');
  this.lists = listFactory.getLists();

  this.addList = function () {
    listFactory.addList(this.listName);
    this.listName = '';
  };
});
