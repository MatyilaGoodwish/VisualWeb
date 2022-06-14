/**
 * @const home:controller
 */
angular.module('bd')
    .controller('HomeController', function ($scope) {
    this.headline = 'welcome';
    this.topic = 'learn more about our products and services';

    })

/**
 * @const about :controller
 */
angular.module('bd')
    .controller('AboutController', function () {
        this.headline = 'About Us';
        this.topic = 'our community shared values and efforts';

    })
/**
 * @const services :controller
 */
angular.module('bd')
    .controller('ServicesController', function () {
        this.headline = 'Our Services';
        this.topic = 'we provide the best customer service';

    })

/**
 * @const pricing :controller
 */
angular.module('bd')
    .controller('PricingController', function () {
        this.headline = 'Our Plans';
        this.topic = 'affordable plans for everyone';

    })

/**
 * @const contact :controller
 */
angular.module('bd')
    .controller('ContactController', function () {
        this.headline = 'Contact Us';
        this.topic = 'lets get connected';

    })

/**
 * @const contact :controller
 */
angular.module('bd')
    .controller('SeoController', function () {
        this.headline = 'SEO Flow';
        this.topic = 'simply seo for professionals';

    })

    /**
 * @const contact :controller
 */
angular.module('bd')
.controller('PrivacyController', function () {
    this.headline = 'Privacy';
    this.topic = 'read our privacy policy';

})
