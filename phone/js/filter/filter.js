app.filter('furl',function(){
	return function(url){
		return url.split('?')[0];
	}
})