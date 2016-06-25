angularFormApp.factory('DataService',
    function () {

        var getEmployee = function (id) {
            if (id == 123) {
                return {
                    employee: {
                        id: 123,
                        fullName: "Milton Waddams",
                        notes: "The ideal employee, just dont touch his red staple",
                        department: 'Administrative',
                        perkCar: true,
                        perkStock: false,
                        perkSixWeeks: true,
                        payrollType: "none"
                    }
                }
            }
            return undefined;
        };

        var insertEmployee = function (newEmployee) {
            return true
        };

        var updateEmployee = function (employee) {
            return true
        };

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        };        
    });