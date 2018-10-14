angular.module('myCatApp')
    .directive('awesomeCat', () => ({
        controller: 'awesomeCat.controller',
        template: '<div>YO  cat {{catName}}</div>',
        restrict: 'E',
        scope: {
            derp: '='
        }
    }))
    .controller('awesomeCat.controller', ['$scope', ($scope) => {
        $scope.catName = $scope.derp ? 'derp' : 'normal cat';
    }]);