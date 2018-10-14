angular.module('myCatApp', [])
    .directive('awesomeCat', () => ({
        controller: 'awesomeCat.controller',
        template: `
        <div>
            <div class="cat-name">Name: {{catName}}</div>
            <img data-ng-class="derp ? 'derp-cat-image' : 'cute-cat-image'" src="{{catImage}}"/>
        </div>`,
        restrict: 'E',
        scope: {
            derp: '='
        }
    }))
    .controller('awesomeCat.controller', ['$scope', ($scope) => {
        $scope.catName = $scope.derp ? 'Derp Cat' : 'Cute Cat';
        $scope.catImage = $scope.derp ?
            'https://vignette.wikia.nocookie.net/derp-cat/images/8/86/Derp_cat.jpg/revision/latest?cb=20170717230818' :
            'https://i.pinimg.com/originals/81/6d/a5/816da533638aee63cfbd315ea24cccbd.jpg';
    }]);