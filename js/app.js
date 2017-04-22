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

    .state('tab',{
        url: '/tab',
        abstract: true,
        templateUrl: 'template/tab.html'
    })

    .state('tab.home',{
        url: '/home',
        views: {
            "tab-home": {
                templateUrl: 'template/home.html',
                controller: 'homeCtrl'
            }
        }
    })

    .state('tab.list', {
        url: '/list/:num',
        views: {
            "tab-home": {
                templateUrl: 'template/list.html',
                controller: 'listCtrl'
            }
        }
    })

    .state('tab.article', {
        url: '/article/:aid',
        views: {
            "tab-home": {
                templateUrl: 'template/article.html',
                controller: 'articleCtrl'
            }
        }
    })

    .state('tab.tie', {
        url: '/tie',
        views: {
            "tab-tan": {
                templateUrl: 'template/tie.html',
                controller: 'tieCtrl'
            }
        }
    })

    .state('tab.tieList',{
        url: '/tielist/:id',
        views: {
            "tab-tan": {
                templateUrl: 'template/tieList.html',
                controller: 'tieListCtrl'
            }
        }
    })

    .state('tab.tieDetail', {
        url: '/tiedetail/:tid',
        views: {
            "tab-tan": {
                templateUrl: 'template/tieDetail.html',
                controller: 'tieDetailCtrl'
            }
        }
    })

    .state('tab.user',{
        url:'/user',
        views:{
            'tab-user':{
                templateUrl:'template/user.html',
                controller:'userCtrl'
            } 
        }
    })

    .state('tab.signIn',{
        url:'/signIn',
        views:{
            'tab-user':{
                templateUrl:'template/signIn.html',
                controller:'signInCtrl'
            }
        }
    })

    .state('tab.signUp',{
        url:'/signUp',
        views:{
            'tab-user':{
                templateUrl:'template/signUp.html',
                controller:'signUpCtrl'
            }
        }
    })

    $urlRouterProvider.otherwise('/tab/home')
}]) 
