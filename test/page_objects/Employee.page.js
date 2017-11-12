/**
 * Created by AlexrajA on 29-10-17.
 */
var employeePO = function () {


    this.empFirstName = element(by.model('selectedEmployee.firstName'))
    this.empLastName = element(by.model('selectedEmployee.lastName'))
    this.empstartDate = element(by.model('selectedEmployee.startDate'))
    this.empemail = element(by.model('selectedEmployee.email'))
    this.addEmpButton = element(by.buttonText('Add'));
    this.updateEmpButton = element(by.buttonText('Update'));
    this.createButton = element(by.linkText('Create'));
    this.editButton = element(by.linkText('Edit'));
    this.deleteButton = element(by.linkText('Delete'));
    this.employeelist = element.all(by.css('li[ng-click="selectEmployee(employee)"]'));

    //Static Text
    this.exppagetitle = 'CafeTownsend-AngularJS-Rails';
};
module.exports = new employeePO();