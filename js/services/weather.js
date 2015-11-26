angular.module("myApp").factory("Weather", function($http) {
	var Weather = {};
	var URL_WEATHER = "http://api.openweathermap.org/data/2.5/weather";
	var APPID = "3104ae1ee094a4787af98ff506ab7154";
	Weather.get = function(latitude, longitude, callback) {
		$http({
			method: "GET",
			url: URL_WEATHER,
			params: {
				lat: latitude,
				lon: longitude,
				mode: "json",
				units: "imperial",
				appid: APPID,
				mode: "json"
			}			
		}).success(function(data) {
			callback(data);
		});
	};
	return Weather;
});