angular.module('Controller', ['Service'])

//第一个选项卡下的控制器
.controller('homeCtrl', ['$scope','Qing',function($scope,Qing){

	//需要获取文章分类
	// 来调用获取文章分类的函数
	Qing.classify();

	//来接受广播传过来的数据
	$scope.$on('classify', function(event,data){
		$scope.items = data;
	})
	
}])


//文章列表的控制器
//$stateParams
.controller('listCtrl', ['$scope','$stateParams','Qing', function($scope,$stateParams,Qing){
	//就要来知道，到底获取的是哪一个分类？

	console.log($stateParams.num);   //获取分类的id

	//页码
	var i = 1;
	$scope.items = [];

	//调用获取分类下的文章列表
	Qing.list($stateParams.num,i);

	$scope.$on('list', function(event,data){
		//[]

		$scope.items = $scope.items.concat(data);
		$scope.$broadcast('scroll.infiniteScrollComplete');
	})

	$scope.hasData = function(){
		return Qing.hasData()

		// return true/false
	}
	
	// $scope.items = ?

	//上拉刷新的函数
	$scope.loadMores = function(){
		++i;
		Qing.list($stateParams.num,i);
	};

}])


//文章详情的控制器
.controller('articleCtrl', ['$scope','article','$stateParams',function($scope,article,$stateParams){

	//来调用获取文章详情的函数
	//还需要把文章的id穿进去
	article.articleDetial($stateParams.aid);

	//文章的id
	console.log($stateParams.aid);

	$scope.$on('detail', function(event,data){
		$scope.detail = data;
	})
}])


//帖子分类控制器
.controller('tieCtrl', ['$scope','tie', function($scope,tie){

	//调用获取帖子分类的函数
	tie.tieList();

	$scope.$on('tie', function(evnt,data){
		$scope.items = data;
	})
	
}])

//帖子列表
.controller('tieListCtrl', ['$scope','$stateParams','tie', function($scope,$stateParams,tie){

	//获取传过来的帖子分类的fid
	console.log($stateParams.id);
	//调用获取帖子列表的函数
	tie.tieLists($stateParams.id);

	//接收这个帖子列表的数据
	$scope.$on('tieLists', function(event,data){
		console.log(data);
		$scope.items = data;
	})
	
}])

//帖子详情控制器
.controller('tieDetailCtrl', ['$scope','tie','$stateParams', function($scope,tie,$stateParams){

	//调用获取帖子详情的函数	
	tie.tieDetail($stateParams.tid);

	$scope.$on('tiedetail', function(event,data){
		$scope.items = data;
	})
}])