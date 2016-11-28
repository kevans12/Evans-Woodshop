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
            .state('pins',{
                url:'/pins',
                templateUrl: "./public/views/pins.html",
                controller: 'productCtrl',
                controllerAs: 'vm'
            })
            .state('shaving',{
                url:'/shavingsets',
                templateUrl: "./public/views/shavingsets.html",
                controller: 'productCtrl',
                controllerAs: 'vm'
            })
            .state('pinsDB',{
                url:'/pinsDB',
                templateUrl: "./public/views/pinsDB.html",
                controller: 'productsDBCtrl',
                controllerAs: 'vm'
            })
            .state('specificProd',{
                url:'/details/:id',
                templateUrl: "./public/views/specificProd.html",
                controller: 'specificProdCtrl',
                controllerAs: 'vm'
            })
            .state('specProdfromServ',{
                url:'/moredetails/:prodID',
                templateUrl: "./public/views/specProdfromServ.html",
                controller: 'specProdCtrlfromServ',
                controllerAs: 'vm'
            })

        $urlRouterProvider
            .otherwise('/');
    });
