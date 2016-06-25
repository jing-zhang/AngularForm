angularFormApp.controller('efController',
    function efController($scope, $window, $routerParams, DataService) {

        if ($routerParams.id)
            $scope.employee = DataService.getEmployee($routerParams.id);
        else
            $scope.employee = { id: 0 };

        $scope.employee = DataService.employee;

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administrative"
        ];

        $scope.submitForm = function () {

            if ($scope.editableEmployee.id == 0) {
                //Insert Employee
                DataService.insertEmployee($scope.editableEmployee);
            }
            eles
            {
                //Update Employee
                DataService.updateEmployee($scope.editableEmployee);
            }
            $scope.employee = angular.copy($scope.editableEmployee);

            $window.history.back();
        };

        $scope.cancelForm = function () {

            $window.history.back();

        };
    });