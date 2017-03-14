app.controller('planCtrl',['$scope','$ionicModal','$rootScope','$ionicPopup',function(scope,$ionicModal,rootScope,$ionicPopup){

	scope.list = Store('plans') || [] ;
	//console.log(scope.list)
	scope.addEvent = function(){    //面试事件的添加
		if(!this.date&&!this.position&&!this.other) return;
		var id = Date.now();
		//console.log(date)
		 var obj = {
			date:this.date,
			position:this.position,
			other:this.other,
			show:false
		}
		this.list.push(obj);
		this.date = '';
		this.position = '';
		this.other = '';
	}

	scope.showDel = function(index){
		var isshow = this.list[index].show;
		for(var i in this.list){
			this.list[i].show = false;
		}
		this.list[index].show = !isshow;
	}
	
	scope.del = function(index){
		//console.log(index);
		this.list.splice(index,1);
	}


	scope.setPlan = function(index){
	  scope.index = index;
	  // 一个自定义弹窗
	  var myPopup = $ionicPopup.show({
	    templateUrl: '/phone/widget/popup.html',
	    title: '修改计划',
	    subTitle: '请输入要修改的内容',
	    scope: scope,
	    buttons: [
	      { text: '取消' },
	      {
	        text: '<b>保存</b>',
	        type: 'button-positive',
	        onTap: function(e) {
	        	//console.log(scope.list)

	        }
	      },
	    ]
	  });
	}

	scope.$watch('list',function(val){
		Store('plans',scope.list);
	},true)

}])