app.controller('expressCtrl',['$scope','$http','dataService','$rootScope','$ionicLoading',function(scope,http,data,rootScope,load){

	scope.searchgs=function(){
		location.href='http://m.qixin.com/search/'+ this.gs +'.html'
	}

}])