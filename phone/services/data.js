app.factory('dataService',function($http,$rootScope){

	return {
		getReData:function(start,txt,callback){  //招聘信息
			return 	$http({
				url:'/api/wiseasync?pn='+ start +'&rn='+ 10 +'&city='+ $rootScope.cityshow +'&qid=1487923001223832&query='+txt,
				method:'get'
			}).success(callback).error(function(){
				load.hide();
				console.log('后台出错')
			})
		},
		getExData:function(num,callback){   //快递信息
			//console.log(12313)
			return $http({
					method:'POST',
					url:'/autonumber/auto?num='+num
				}).success(function(res){
					//console.log(1231)	 	
					if(res.length===0){
						load.hide();
						scope.tit = "此单号不存在！请重新输入"
						scope.titshow = true;
						return;
					}
					console.log(res)
					var exType = res[0].comCode; 
					http({
						url:'/query?type='+ exType +'&postid='+ num +'&id=1&valicode=&temp=0.03872376874839456',
						method:'get'
					}).success(callback)
				}).error(function(){
					load.hide();
					console.log('后台错误')
				})

		}
	}
})









