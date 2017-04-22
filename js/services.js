angular.module('Service', [])


.service('Qing', ['$http','$rootScope', function($http,$rootScope){
	var ifData = true;
	return {

		//获取文章分类
		//http://www.phonegap100.com/appapi.php?a=getPortalCate 
		//jsonp请求需要传callback参数
		"classify": function(){
			$http
			.jsonp('http://www.phonegap100.com/appapi.php?a=getPortalCate',{
				params: {
					"callback": "JSON_CALLBACK"
				}
			})
			.then(function(data){
				//使用广播来传数据
				$rootScope.$broadcast('classify', data.data.result)
				
			},function(error){
				console.log(error)
			})
		},

		//获取分类下面的文章列表
		//catid 指的是哪一个分类
		//page 指的是分类下面的第几页的数据
		//http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1
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

			.then(function(data){  //[]
				if(data.data.result == 0){
					ifData = false;
				}else{
					ifData = true;
					$rootScope.$broadcast('list', data.data.result);
				}
				
				//console.log(data);
			},function(error){
				alert('请求失败')
			})
		},

		"hasData": function(){
			return ifData
		}
	}

}])

.service('article', ['$http','$rootScope', function($http,$rootScope){

	return {
		//http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=121 


		"articleDetial": function(id){

			$http 

			.jsonp('http://www.phonegap100.com/appapi.php?a=getPortalArticle',{
				params: {
					"aid": id ,
					"callback": "JSON_CALLBACK"
				}
			})
			.then(function(data){
				// console.log(data.data.result[0]);
				$rootScope.$broadcast('detail', data.data.result[0])
			},function(error){
				alert('请求失败！')
			})
		}
	}
}])

.service('tie', ['$http','$rootScope', function($http,$rootScope){

	return {

		//http://www.phonegap100.com/appapi.php?a=getThreadCate  
		"tieList": function(){
			$http

			.jsonp('http://www.phonegap100.com/appapi.php?a=getThreadCate',{
				params: {
					"callback": "JSON_CALLBACK"
				}
			})

			.then(function(data){
				console.log(data.data.result);
				$rootScope.$broadcast('tie', data.data.result)
			},function(error){
				alert('请求失败')
			})
		},

		//http://www.phonegap100.com/appapi.php?a=getThreadList&fid=2&page=1  

		//帖子列表
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
				console.log(data.data.result);
				$rootScope.$broadcast('tieLists', data.data.result);
			},function(error){
				alert('请求错误')
			})
		},

		//获取帖子详情
		//http://www.phonegap100.com/appapi.php?a=getThreadContent&tid=138 

		"tieDetail": function(id){
			$http

			.jsonp('http://www.phonegap100.com/appapi.php?a=getThreadContent',{
				params: {
					"callback": "JSON_CALLBACK",
					"tid": id
				}
			})

			.then(function(data){
				console.log(data.data.result);
				$rootScope.$broadcast('tiedetail', data.data.result)
			}, function(error){
				alert('请求错误')
			})
		}
	}
}])