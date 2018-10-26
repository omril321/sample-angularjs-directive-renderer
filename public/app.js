angular.module('myCatApp', [])
    .directive('awesomeCat', () => ({
        controller: 'awesomeCat.controller',
        template: `
        <div>
            <div class="cat-name">Name: {{catName}}</div>
            <img data-ng-class="imageClass" src="{{catImage}}"/>
        </div>`,
        restrict: 'E',
        scope: {
            beCute: '='
        }
    }))
    .controller('awesomeCat.controller', ['$scope', ($scope) => {
        $scope.catName = $scope.beCute ? 'Cute Cat' : 'Serious Cat';
        $scope.catImage = $scope.beCute ?
            'https://i.pinimg.com/originals/81/6d/a5/816da533638aee63cfbd315ea24cccbd.jpg' :
            'https://i.ytimg.com/vi/PFQrekJRSL8/hqdefault.jpg';
        $scope.imageClass = $scope.beCute ? 'cute-cat-image' : 'serious-cat-image';
    }]);