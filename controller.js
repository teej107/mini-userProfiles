angular.module('userProfiles').controller('MainController', function ($scope, mainService)
{

    $scope.users = mainService.getUsers();
    $scope.toggleFavorite = mainService.toggleFavorite;
})