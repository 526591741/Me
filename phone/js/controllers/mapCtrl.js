app.controller('mapCtrl',['$scope','$ionicModal','$rootScope',function(scope,$ionicModal,rootScope){


	var map = new BMap.Map("l-map");

	map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);

	var transit = new BMap.TransitRoute(map, {
		renderOptions: {map: map, panel: "r-result"}
	});


	scope.search=function(){
		//console.log(scope.start, scope.end)
		transit.search(scope.start, scope.end);
		
	}
	

}])