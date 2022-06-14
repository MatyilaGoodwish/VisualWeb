/**
 * @const configurations: angular module
 */
const configurations = angular.module('bd');
/**
 * config router and locaiton services
 */
configurations.config(function($routeProvider, $locationProvider){
    /**
     * @const baseConfig: object
     */
    const baseConfig = { requireBase: false };
    /**
     * @const htmlMode configure base uri
     */
    const htmlMode = $locationProvider.html5Mode(baseConfig);
    /**
     * config hash prefix to empty string
     */
    htmlMode.hashPrefix('');
    /**
     * define landing page
     */
    $routeProvider
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'AboutController',
            controllerAs: 'main'
        })
        .when('/services', {
            templateUrl: 'pages/services.html',
            controller: 'ServicesController',
            controllerAs: 'main'
        })
        .when('/pricing', {
            templateUrl: 'pages/pricing.html',
            controller: 'PricingController',
            controllerAs: 'main'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'ContactController',
            controllerAs: 'main'
        })
        .when('/seoflow', {
            templateUrl: 'pages/seoflow.html',
            controller: 'SeoController',
            controllerAs: 'main'
        })
        .when('/privacy', {
            templateUrl: 'pages/privacy.html',
            controller: 'PrivacyController',
            controllerAs: 'main'
        })
})

/**
 * navigation menu
 * **/
angular.module('bd').component('appNav', {
    templateUrl: 'layout/navigation.html'
})
angular.module('bd').component('appFooter', {
    templateUrl: 'layout/footer.html'
})
angular.module('bd').component('appCarousel', {
    templateUrl: 'layout/carousel.html'
})