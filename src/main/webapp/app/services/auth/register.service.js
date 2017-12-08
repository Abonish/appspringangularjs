(function () {
    'use strict';

    angular
        .module('appspringangularjsApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
