app.controller('cityCtrl',['$scope','$ionicModal','$rootScope',function(scope,$ionicModal,rootScope){
	rootScope.cityshow = localStorage.getItem('city') || '北京';

	scope.select = function($event){  //事件代理获取城市
		var e = $event.toElement;
		if(e.localName == "li"){
			var city = e.innerHTML
			rootScope.cityshow = city;
			localStorage.setItem('city',city);
			scope.city.hide();
		}
	}

}])