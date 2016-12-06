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
            .state('aboutKyle',{
                url:'/aboutKyle',
                templateUrl: "./public/views/aboutKyle.html",
                controller: 'aboutCtrl',
                controllerAs: 'vm'
            })
            .state('aboutShop',{
                url:'/aboutShop',
                templateUrl: "./public/views/aboutShop.html",
                controller: 'aboutCtrl',
                controllerAs: 'vm'
            })
            .state('aboutProcess',{
                url:'/aboutProcess',
                templateUrl: "./public/views/aboutProcess.html",
                controller: 'aboutCtrl',
                controllerAs: 'vm'
            })
            .state('aboutSite',{
                url:'/aboutSite',
                templateUrl: "./public/views/aboutSite.html",
                controller: 'aboutCtrl',
                controllerAs: 'vm'
            })
            .state('pins',{
                url:'/pins',
                templateUrl: "./public/views/pins.html",
                controller: 'productCtrl',
                controllerAs: 'vm'
            })
            .state('pens',{
                url:'/pens',
                templateUrl: "./public/views/pens.html",
                controller: 'productCtrl',
                controllerAs: 'vm'
            })
            .state('keychains',{
                url:'/keychains',
                templateUrl: "./public/views/keychains.html",
                controller: 'productCtrl',
                controllerAs: 'vm'
            })
            .state('shaving',{
                url:'/shavingsets',
                templateUrl: "./public/views/shavingsets.html",
                controller: 'productCtrl',
                controllerAs: 'vm'
            })
            .state('cuttingBoards',{
                url:'/cuttingBoards',
                templateUrl: "./public/views/cuttingBoards.html",
                controller: 'productCtrl',
                controllerAs: 'vm'
            })
            .state('shavingStands',{
                url:'/shavingStands',
                templateUrl: "./public/views/shavingStands.html",
                controller: 'productCtrl',
                controllerAs: 'vm'
            })
            .state('allProducts',{
                url:'/allProducts',
                templateUrl: "./public/views/allProducts.html",
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
