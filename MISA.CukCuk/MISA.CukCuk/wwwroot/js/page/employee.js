$(document).ready(function () {
    employeeJS = new EmployeeJS();
})

class EmployeeJS extends BaseJS {
    constructor() {
        super();
    }

    setData() {
        this.Data = fakeData;
        debugger
    }
}


var fakeData = [
    {
        EmployeeCode: "NV001",
        EmployeeName: "Nguyen Van B",
        Birthday: new Date(1991, 1, 1),
        PhoneNumber: "1315315153",
        DebitAmount: 10000000,
        Is5FoodMember: true
    },
    {
        EmployeeCode: "NV002",
        EmployeeName: "Nguyen Van AA",
        Birthday: new Date(1991, 1, 1),
        PhoneNumber: "3254353626",
        DebitAmount: 10000000,
        Is5FoodMember: false
    },
    {
        EmployeeCode: "NV003",
        EmployeeName: "Nguyen Thi C",
        Birthday: new Date(1991, 1, 1),
        PhoneNumber: "23423634435",
        DebitAmount: 10000000,
        Is5FoodMember: true
    }
]