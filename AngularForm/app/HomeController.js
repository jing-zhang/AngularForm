angularFormApp.controller('HomeController',
    function efController($scope, $location, $modal, DataService) {

        $scope.addNewEmployee = function () {

            //$location.path('/newEmployeeForm');

            $modal.open({
                templateUlr: 'app/EmployeeForm/efTemplate.html',
                controller: 'efController'
            });
        };

        $scope.showCreateEmployeeForm = function (id) {
            $location.path('/newEmployeeForm/' + id)
        };
    });