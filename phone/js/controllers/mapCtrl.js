app.controller('mapCtrl',['$scope','$ionicModal','$rootScope',function(scope,$ionicModal,rootScope){


	var map = new BMap.Map("l-map");

	map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);

	var transit = new BMap.TransitRoute(map, {
		renderOptions: {map: map, panel: "r-result"}
	});
	function G(id) {
			return document.getElementById(id);
		}

	var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
		{"input" : "suggestId"
		,"location" : map
	});
  	var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
		{"input" : "suggestId1"
		,"location" : map
	});

	ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
	var str = "";
		var _value = e.fromitem.value;
		var value = "";
		if (e.fromitem.index > -1) {
			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		}    
		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
		
		value = "";
		if (e.toitem.index > -1) {
			_value = e.toitem.value;
			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		}    
		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
		G("searchResultPanel").innerHTML = str;
	});

	var myValue;
	ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
	var _value = e.item.value;
		myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		G("searchResultPanel").innerHTML ="onconfirm<br/>index = " + e.item.index + "<br />myValue = " + myValue;
		
		setPlace();
	});

	function setPlace(){
		map.clearOverlays();    //清除地图上所有覆盖物
		function myFun(){
			var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
			map.centerAndZoom(pp, 18);
			map.addOverlay(new BMap.Marker(pp));    //添加标注
		}
		var local = new BMap.LocalSearch(map, { //智能搜索
		  onSearchComplete: myFun
		});
		local.search(myValue);
	}


	scope.search=function(){
		//console.log(G(suggestId).value, scope.end)
		var start = G('suggestId').value;
		var end = G('suggestId1').value;
		transit.search(start, end);
		var obj = {
			start:start,
			end:end
		}
		Store('luxian',obj);
	}

	if(Store('luxian')){
		var obj = Store('luxian');
		scope.start = obj.start;
		scope.end = obj.end;
		transit.search(obj.start, obj.end);
	}
	

}])