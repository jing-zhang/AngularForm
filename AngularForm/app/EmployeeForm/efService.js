angularFormApp.factory('DataService',
    function () {
        return {
            employee: {
                fullName: "Milton Waddams",
                notes: "The ideal employee, just dont touch his red staple",
                department: 'Administrative',
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType:"none"
            }
        }
    });