app.directive('tabList', function(){
	return {
		restrict: 'E', 
		link: function(scope, element, atrr){
			//console.log(listService)
			
			scope.getStatus = function(index){
				for(var i=0; i < scope.list.length; i++) {
					scope.list[i].active = false;
				}
				scope.list[index].active = true;
			}
			scope.list = [{
				link: '#/recruit',
				icon: 'ion-briefcase',
				name: '招聘查询',
				active: false
			},{
				link: '#/map',
				icon: 'ion-navigate',
				name: '路线查询',
				active: false
			},{
				link: '#/express',
				icon: 'ion-android-cart',
				name: '快递',
				active: false
			},{
				link: '#/plan',
				icon: 'ion-clipboard',
				name: '备忘录',
				active: false
			}]
			for(var i in scope.list){
				if(scope.list[i].link == location.hash){
					scope.list[i].active = true;
				}
			}
			
		},
		templateUrl: '/phone/widget/tab.html',
		replace: true,
		scope: {
			//与外界作用域独立
		}
	}	 	
})