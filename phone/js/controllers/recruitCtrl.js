app.controller('recruitCtrl',['$scope','$http','$rootScope','$ionicLoading','$ionicModal','dataService',function(scope,http,rootScope,load,ionicModal,data){

	rootScope.cityshow = localStorage.getItem('city') || '北京'; //获取缓存城市，默认北京
	if(rootScope.relist||localStorage.getItem('relist')){ //如果有数据,获取列表信息
		scope.list = rootScope.relist || JSON.parse(localStorage.getItem('relist'));
		scope.listNum = 10;
	}
	scope.txt = localStorage.getItem('text') || '';
	scope.flag = true;
	scope.showdata = true;
	scope.search = function(txt){  //请求数据
		if(!txt){
			return;
		}
		load.show({  //显示遮罩层
		  template: 'Loading...'
		});

		data.getReData(0,txt,function(res){
			if(!res.data.disp_data){
				scope.showdata = false;
				return;
			}
			scope.list = res.data.disp_data;
			localStorage.setItem('relist',JSON.stringify(scope.list));
			localStorage.setItem('text',txt)
			load.hide();
			scope.showdata = true;
			scope.listNum = 10;
		})
	}


	function Debounce(func, wait){
	   var timeout = null;
	   return function(){
	      var args = arguments;
	      var later = function(){
	          func.apply(null, args);
	      }
	      clearTimeout(timeout)
	      timeout = setTimeout(later, wait||300)
	   }
	   //性能优化
	}

	//当用户进行频率过快操作时，优化代码性能
	var alist = document.getElementById('relist');

	alist.ontouchmove=function(){
		//window.addEventListener(touchmove,)
		console.log(123)
		//Debounce(function(){
		
		var alist = document.getElementById('relist');
		var ascroll = document.getElementsByClassName('scroll')[0];
	    if(scope.flag&&alist.parentNode.clientHeight-document.documentElement.clientHeight+88+parseInt(ascroll.style.transform.split(', ')[1])<20){
	   	 	scope.flag = false;
		   	 //console.log(alist.parentNode.clientHeight-document.documentElement.clientHeight+88+parseInt(document.getElementsByClassName('scroll')[0].style.transform.split(', ')[1]))
	   	 	console.log('进行加载')
	   	 	var num = scope.listNum,
	   	 		txt = scope.txt;
	   	    data.getReData(num,txt,function(res){
	   	    	console.log(res)	   	    	
	   	    	if(!res.data.disp_data){
	   	    		scope.showdata = false;
	   	    		return;
	   	    	}
	   	    	scope.list = scope.list.concat(res.data.disp_data);
	   	    	scope.listNum += 10
	   	    	scope.flag = true;
	   	    	scope.showdata = true;
	   	    })
	   }

	//},200)
}

	ionicModal.fromTemplateUrl('/phone/widget/city.html', {  //声明选择城市弹窗
	     scope: scope,
	     animation: 'slide-in-up'
	 }).then(function(city) {
	     scope.city = city;
	     scope.city.hide()
	 });


}])