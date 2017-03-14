
function Debounce(func, wait){   //去抖动
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



function Store(name, data){   //本地缓存存取
	if(data) {  //存
		localStorage.setItem(name, JSON.stringify(data));
		return;
	}
	return JSON.parse(localStorage.getItem(name))	//取
}
