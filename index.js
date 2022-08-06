// Write your solution in this file!
const employee = {};

employee.name = 'david';
employee.streetAddress = 'ruiru'

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newobj = {...employee};
    newobj.name = "Sam";
    newobj.streetAddress = "11 Broadway";
    return newobj;
};

function destructivelyUpdateEmployeeWithKeyAndValue (employee, name, streetAddress) {
    employee["name"] = "Sam";
    employee["streetAddress"] = "12 Broadway";
    return employee;
};

function deleteFromEmployeeByKey(employee, name) {
    const newemployee = {...employee};
    delete newemployee.name;
    return newemployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}