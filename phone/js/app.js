
var app = angular.module('App',['ionic','ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/recruit',{
		templateUrl:'/phone/views/recruit.html',
		controller:'recruitCtrl'
	}).when('/express',{
		templateUrl:'/phone/views/express.html',
		controller:'expressCtrl'
	}).when('/map',{
		templateUrl:'/phone/views/map.html',
		controller:'mapCtrl'
	}).when('/plan',{
		templateUrl:'/phone/views/plan.html',
		controller:'planCtrl'
	}).otherwise({
 		redirectTo:"/recruit"
 	})
})