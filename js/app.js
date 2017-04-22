/*
    用户定义页面路由
*/
angular.module('starter', ['ionic','Controller'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

//$routeProvider  这个是Angularjs配置路由的
.config(['$ionicConfigProvider','$stateProvider','$urlRouterProvider', function($ionicConfigProvider,$stateProvider,$urlRouterProvider){
    $ionicConfigProvider.platform.android.tabs.position("bottom");
    $ionicConfigProvider.tabs.style('standard');
    // $ionicConfigProvider.backButton.text('').icon('ion-ios7-arrow-thin-left');
    // $ionicConfigProvider.backButton.previousTitleText(false);
    $ionicConfigProvider.navBar.alignTitle('center');



    //定义路由
    $stateProvider

    //定义选项卡路由
    .state('tab',{
        url: '/tab',
        abstract: true,
        templateUrl: 'template/tab.html'
    })

    //首页路由
    .state('tab.home',{
        url: '/home',
        views: {
            "tab-home": {
                templateUrl: 'template/home.html',
                controller: 'homeCtrl'
            }
        }
    })

    //文章列表页路由
    .state('tab.list', {
        url: '/list/:num',
        views: {
            "tab-home": {
                templateUrl: 'template/list.html',
                controller: 'listCtrl'
            }
        }
    })

    //文章详情页路由
    .state('tab.article', {
        url: '/article/:aid',
        views: {
            "tab-home": {
                templateUrl: 'template/article.html',
                controller: 'articleCtrl'
            }
        }
    })

    //帖子分类
    .state('tab.tie', {
        url: '/tie',
        views: {
            "tab-tan": {
                templateUrl: 'template/tie.html',
                controller: 'tieCtrl'
            }
        }
    })


    //帖子列表
    .state('tab.tieList',{
        url: '/tielist/:id',
        views: {
            "tab-tan": {
                templateUrl: 'template/tieList.html',
                controller: 'tieListCtrl'
            }
        }
    })

    //帖子详情页面
    .state('tab.tieDetail', {
        url: '/tiedetail/:tid',
        views: {
            "tab-tan": {
                templateUrl: 'template/tieDetail.html',
                controller: 'tieDetailCtrl'
            }
        }
    })

    //定义用户中心页面路由
    .state('tab.user',{
        url:'/user',
        views:{
            'tab-user':{
                templateUrl:'template/user.html',
                controller:'userCtrl'
            } 
        }
    })

    //定义登录页面路由
    .state('tab.signIn',{
        url:'/signIn',
        views:{
            //与用户中心的tab-user一致，否则无法跳转
            'tab-user':{
                templateUrl:'template/signIn.html',
                controller:'signInCtrl'
            }
        }
    })

    //定义注册路由
    .state('tab.signUp',{
        url:'/signUp',
        views:{
            //与用户中心tab-user一致，否则无法跳转
            'tab-user':{
                templateUrl:'template/signUp.html',
                controller:'signUpCtrl'
            }
        }
    })

    //定义默认的路由
    $urlRouterProvider.otherwise('/tab/home')
}]) 

//返回首页
// $scope.tiao = function(){
//     $state.go('tab.home')
// }