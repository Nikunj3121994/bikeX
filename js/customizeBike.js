(function(){

var app = angular.module('customizeBike',[]);
app.controller('customizeBikeController', ['$scope', function($scope){
	$scope.gear_options = ['3', '9', '21'];
	$scope.gear_current= '3';
	$scope.frame_options = ['21','26','28'];
	$scope.frame_current = '21';
	$scope.tyre_options = ['28','26','23'];
	$scope.tyre_current = '28';
	$scope.meter_options = ['1','2','3'];
	$scope.meter_current = '1';

	$scope.calculation = function(){
		
		$scope.gear_calculation = ($scope.gear_current * 9);
		$scope.frame_calculation = ($scope.frame_current * 4.5);
		$scope.tyre_calculation = ($scope.tyre_current * 2.5);
		$scope.meter_calculation = ($scope.meter_current * 20);
		$scope.total_calculation = (+$scope.gear_calculation + +$scope.frame_calculation + 
									+$scope.tyre_calculation + +$scope.meter_calculation);

		// $scope.tyre_calculation = 0;
		// if($scope.tyre_options = "W") {
		// 	$scope.tyre_calculation = 50;
		// } 
		// else if($scope.tyre_options = "S") {
		// 	$scope.tyre_calculation = 35;
		// }	

		// $scope.tyre_calculation = 0;
		// if($scope.color_options = "Red") {
		// 	$scope.color_calculation = 50;
		// } 
		// else if($scope.tyre_options = "Blue") {
		// 	$scope.color_calculation = 35;
		// }	
		

		// $scope.color_calculation = 0;
		// if($scope.color_options = 'R') {
		// 	$scope.color_calculation = 50;
		// } 
		// else if($scope.color_options = 'B') {
		// 	$scope.color_calculation = 60;
		// }
		// else if($scope.color_options = 'O') {
		// 	$scope.color_calculation = 40 ;
		// }
		// else if($scope.color_options = 'G') {
		// 	$scope.color_calculation = 65 ;
		// }
		// else if($scope.color_options = 'W') {
		// 	$scope.color_calculation = 50 ;
		// }

	} 

	$scope.calculation();


}]);



})();