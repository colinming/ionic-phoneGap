/*
	用于请求数据接口，转发数据
*/ 

angular.module('Service', [])

//文章分类和列表服务器
.service('articleReq', ['$http','$rootScope', function($http,$rootScope){
	var ifData = true;
	return {
	
		"classify": function(){
			$http
			.jsonp('http://www.phonegap100.com/appapi.php?a=getPortalCate',{
				params: {
					"callback": "JSON_CALLBACK"
				}
			})
			.then(function(data){
			
				$rootScope.$broadcast('classify', data.data.result)
			
			},function(error){
				alert(error);
			})
		},

		"list": function(id,num){
			$http

			.jsonp('http://www.phonegap100.com/appapi.php',{
				params: {
					"a": "getPortalList",
					"catid": id,
					"page": num,
					"callback": "JSON_CALLBACK"
				}
			})

			.then(function(data){ 
				if(data.data.result == 0){
					ifData = false;
				}else{
					ifData = true;
					$rootScope.$broadcast('list', data.data.result);
				}
				
			},function(error){
				alert('请求失败')
			})
		},

		"hasData": function(){
			return ifData
		}
	}

}])

//文章详情服务器
.service('article', ['$http','$rootScope', function($http,$rootScope){

	return {
	
		"articleDetial": function(id){
			$http 
				.jsonp('http://www.phonegap100.com/appapi.php?a=getPortalArticle',{
					params: {
						"aid": id ,
						"callback": "JSON_CALLBACK"
					}
				})
				.then(function(data){
					
					//console.log(data.data.result);
					$rootScope.$broadcast('detail', data.data.result[0])
				},function(error){
					alert('请求失败！')
				})
		}
	}
}])

//帖子内容服务器
.service('tie', ['$http','$rootScope', function($http,$rootScope){

	return {

		"tieList": function(){
			$http

			.jsonp('http://www.phonegap100.com/appapi.php?a=getThreadCate',{
				params: {
					"callback": "JSON_CALLBACK"
				}
			})

			.then(function(data){
			
				$rootScope.$broadcast('tie', data.data.result)
			},function(error){
				alert('请求失败')
			})
		},

		"tieLists": function(fid){
			$http
			.jsonp('http://www.phonegap100.com/appapi.php', {
				params: {
					"callback": "JSON_CALLBACK",
					"page":1,
					"fid": fid,
					"a": "getThreadList"
				}
			})
			.then(function(data){
				//console.log(data.data.result);
				
				$rootScope.$broadcast('tieLists', data.data.result);
			},function(error){
				alert('请求错误')
			})
		},

		"tieDetail": function(id){
			$http

			.jsonp('http://www.phonegap100.com/appapi.php?a=getThreadContent',{
				params: {
					"callback": "JSON_CALLBACK",
					"tid": id
				}
			})

			.then(function(data){
				//console.log(data.data.result[0]);
				$rootScope.$broadcast('tiedetail', data.data.result)
			}, function(error){
				alert('请求错误')
			})
		}
	}
}])

//用户中心服务器
.service('userReq',['$http','$rootScope','$ionicLoading','$timeout',function($http,$rootScope,$ionicLoading,$timeout){

	return {
		'signIn':function(){
			$http
				.jsonp('http://www.phonegap100.com/appapi.php',{
					params:{
						"callback":"JSON_CALLBACK",
						"a":"signIn",
						"username":"user.username",
						"password":"user.password"
					}
				})
				.then(function(data){
					//console.log(data);
					
					$ionicLoading.show({
						template:data.data.message
					});

					$timeout(function(){
						$ionicLoading.hide();
					},1000)

				},function(err){
					alert(err);
				})
		},
		'signUp':function(){

		}
	}


}])