/*
	用于进行数据交互和页面逻辑处理,http请求等
*/ 

angular.module('Controller', ['Service'])

//主页控制器
.controller('homeCtrl', ['$scope','articleReq',function($scope,articleReq){

	articleReq.classify();

	$scope.$on('classify', function(event,data){
		$scope.items = data;
	})
	
}])


//文章列表页控制器
.controller('listCtrl', ['$scope','$stateParams','articleReq', function($scope,$stateParams,articleReq){
	var i = 1;
	$scope.items = [];

	articleReq.list($stateParams.num,i);

	$scope.$on('list', function(event,data){
		
		$scope.items = $scope.items.concat(data);
		$scope.$broadcast('scroll.infiniteScrollComplete');
	})

	$scope.hasData = function(){
		return articleReq.hasData()

	}
	
	$scope.loadMores = function(){
		++i;
		articleReq.list($stateParams.num,i);
	};

}])


//文章详情页控制器
.controller('articleCtrl', ['$scope','article','$stateParams',function($scope,article,$stateParams){

	article.articleDetial($stateParams.aid);

	$scope.$on('detail', function(event,data){
		$scope.detail = data;
	})
}])


//帖子分类页控制器
.controller('tieCtrl', ['$scope','tie', function($scope,tie){

	tie.tieList();

	$scope.$on('tie', function(evnt,data){
		$scope.items = data;
	})
	
}])

//帖子列表页控制器
.controller('tieListCtrl', ['$scope','$stateParams','tie', function($scope,$stateParams,tie){

	tie.tieLists($stateParams.id);

	$scope.$on('tieLists', function(event,data){
		//console.log(data);
		$scope.items = data;
	})
	
}])

//帖子详情页控制器
.controller('tieDetailCtrl', ['$scope','tie','$stateParams', function($scope,tie,$stateParams){
	
	tie.tieDetail($stateParams.tid);

	$scope.$on('tiedetail', function(event,data){
		$scope.items = data;
	})
}])

//用户中心控制器
.controller('userCtrl',['$scope','userReq',function($scope,userReq){

}])

//用户登录控制器
.controller('signInCtrl',['$scope','userReq',function($scope,userReq){

	$scope.user = {};

	$scope.submit = function(){
		userReq.signIn($scope.user);
	}

}])

//用户注册控制器
.controller('signUpCtrl',['$scope','userReq',function($scope,userReq){
	
}])

function contentController($scope,$ionicSideMenuDelegate){
	$scope.toggleLeft = function(){
		$ionicSideMenuDelegate.toggleLeft();
	};
}