app.controller('expressCtrl',['$scope','$http','dataService','$rootScope','$ionicLoading',function(scope,http,data,rootScope,load){
	if(rootScope.exlist){//如果有数据
		scope.exlist = rootScope.exlist;
	}

	scope.search=function(num){
		if(!num){ //验证单号
			scope.tit = "请输入正确的单号！"
			scope.titshow = true;
			return;
		}
		scope.titshow = false;
		/*load.show({ //展示遮罩层
			template:'正在查询...'
		})*/


		data.getExData(num,function(res){
			console.log(res)
			//load.hide();
			scope.exlist = res.data;
			rootScope.exlist = scope.exlist;
		})


/*
	   	http({
	   		url:'/autonumber/autoComNum?',
	   		method:'post',
	   		params: {text:num}
	   	}).success(function(res){    	 		 	
	   		if(res.length===0){
	   			load.hide();
	   			scope.tit = "此单号不存在！请重新输入"
	   			scope.titshow = true;
	   			return;
	   		}
	   		var exType = res.auto[0].comCode || false; 
	   		http({
	   			url:'/query?type='+ exType +'&postid='+ num +'&id=1&valicode=&temp=',
	   			method:'get'
	   		}).success(function(info){
	   			//console.log(info)
	   			scope.exlist = info.data;
	   			rootScope.exlist = scope.exlist;
	   		}).error(function(){
	   			load.hide();
	   			console.log('后台出错')
	   		})
	   	}).error(function(){
	   		load.hide();
	   		console.log('后台出错')
	   	})*/	   	

	}

}])