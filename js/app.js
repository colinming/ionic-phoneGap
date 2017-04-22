
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

    //为第一个选项卡定义一个页面
    .state('tab.home',{
        url: '/home',
        views: {
            "tab-home": {
                templateUrl: 'template/home.html',
                controller: 'homeCtrl'
            }
        }
    })

    //文章列表的页面
    .state('tab.list', {
        url: '/list/:num',
        views: {
            "tab-home": {
                templateUrl: 'template/list.html',
                controller: 'listCtrl'
            }
        }
    })

    //文章详情的页面
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


    //定义默认的路由
    $urlRouterProvider.otherwise('/tab/home')
}]) 


// $scope.tiao = function(){
//     $state.go('tab.home')
// }