function AppCtrl($scope,$http){
	console.log("controller");
var refresh = function(){
	$http.get('/mongodb').success(function(response){
		console.log('I got the data');
		$scope.mongodb = response;
		$scope.mong = ""
	});

};

refresh();
$scope.addValue = function(){
	console.log($scope.mong);
	$http.post('/mongodb',$scope.mong).success(function(response){
	console.log(response);
	refresh();
	});

};  


$scope.remove = function(id){

	console.log(id);
	$http.delete('/mongodb/'+ id).success(function(response){
	refresh();	 
	}); 
};
$scope.searchValue = function(lats){

	console.log(lats,longs);
	$http.find('/mongodb/'+ lats).success(function(response){
	refresh();	 
	}); 
};

} 