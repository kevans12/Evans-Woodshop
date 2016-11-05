angular.module('woodshop', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "./public/views/home.html",
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .state('about',{
                url:'/about',
                templateUrl: "./public/views/about.html",
                controller: 'aboutCtrl',
                controllerAs: 'vm'
            })

        $urlRouterProvider
            .otherwise('/');
    });
