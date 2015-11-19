app.controller("myCtrl", function($scope, $http) {
	$scope.zipcode = "";
	$scope.weatherInfo = {};
	$scope.getWeather = function() {
		var URL = "http://api.openweathermap.org/data/2.5/weather";
		var request = {
			method: "GET",
			url: URL,
			params: {
			  zip: $scope.zipcode+",us",
			  mode: "json",
			  units: "imperial",
			  appid: "3104ae1ee094a4787af98ff506ab7154"
			}
		};
		$http(request)
			.then(function(response) {
				console.log(response);
				if (!response.data.message) {
					//console.log(response.data.name);
					$scope.weatherInfo.city = response.data.name;
					$scope.weatherInfo.temp = response.data.main.temp + "F";
					$scope.weatherInfo.humidity = response.data.main.humidity + "%";
					$scope.weatherInfo.pressure = response.data.main.pressure + " hPa";
					$scope.weatherInfo.weatherMain = response.data.weather[0].main;
				}
				else {
					console.log(response.data.message);
				}
			}).
			catch(function(response) {
				console.log(response);
		});
		
		//Wind Chill = 35.74 + 0.6215T – 35.75(V^0.16) + 0.4275T(V^0.16)
		/*
		$http.jsonp(url, { params: {
			zip: "96819,us",
			units: "imperial",
			appid: "3104ae1ee094a4787af98ff506ab7154",
			callback: 'JSON_CALLBACK'
			
		}}).
		success(function(data) {
			console.log(data);
			console.log("succes");
		}).
		error(function(data) {
			console.log("failed");
		});
		*/
		//console.log($scope.zipcode);
		
	}
});