//features/step_definitions/my_step_definitions.js
var generalfunctionsPO = require('../page_objects/capeTown.page.js');
var loginPO = require('../page_objects/login.page.js');
var employeePO = require('../page_objects/employee.page.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

    this.Given(/^Launch the application "([^"]*)"$/, launchApp);
    this.Then(/^login to the application with the "([^"]*)" and "([^"]*)"$/, loginApp);
    this.Then(/^I am in the homepage$/, checkHomePage);
    this.Then(/^logout of the application$/, logoutApp);
    this.Then(/^Navigate to the screen "([^"]*)"$/,navigatescreen);
    this.Then(/^Add the employee details with "([^"]*)" "([^"]*)" "([^"]*)" and "([^"]*)"$/,createEmployee);
    this.Then(/^Check the employee details "([^"]*)" "([^"]*)"$/,CheckEmployee);
    this.Then(/^Delete the employee "([^"]*)" "([^"]*)"$/,deleteEmployee);
    this.Then(/^Open the employee "([^"]*)" "([^"]*)"$/,editEmployee);
    this.Then(/^Change the employee details with "([^"]*)" "([^"]*)" "([^"]*)" and "([^"]*)"$/,modifyEmployee);
    this.Then(/^check whether the "([^"]*)" and "([^"]*)" is valid$/, checkUservalidation);
    this.Then(/^check the message displayed$/, checkMessage);

    function checkHomePage(callback) {
        expect(generalfunctionsPO.getPageTitle()).to.eventually.equal(loginPO.exppagetitle).and.notify(callback);
    }

    function launchApp(url,callback){
        browser.get(url).then(callback);
    }

    function loginApp(username,password,callback){
        //var applicationURL = "http://cafetownsend-angular-rails.herokuapp.com/login";
        loginPO.loginusername.sendKeys(username);
        loginPO.loginpassword.sendKeys(password);
        loginPO.loginbutton.click().then(callback);
    }

    function navigatescreen(screenname,callback){
        //var applicationURL = "http://cafetownsend-angular-rails.herokuapp.com/login";
        if (screenname == 'Create'){
            employeePO.createButton.click().then(callback);
        }else if (screenname == 'Modify'){
            employeePO.editButton.click().then(callback);
        }else {
            employeePO.deleteButton.click().then(callback);
        }
    }

    function createEmployee(firstname,lastname,startdate,email,callback){
        //var applicationURL = "http://cafetownsend-angular-rails.herokuapp.com/login";
        employeePO.empFirstName.sendKeys(firstname)
        employeePO.empLastName.sendKeys(lastname)
        employeePO.empstartDate.sendKeys(startdate)
        employeePO.empemail.sendKeys(email)
        employeePO.addEmpButton.click();
        //browser.switchTo().alert().accept().then(callback);
        browser.switchTo().alert().then(
            function (alert) { alert.accept().then(callback); },
            function (err) {  callback() }
        );
    }

    function modifyEmployee(firstname,lastname,startdate,email,callback){
        //var applicationURL = "http://cafetownsend-angular-rails.herokuapp.com/login";
        employeePO.empFirstName.clear()
        employeePO.empLastName.clear()
        employeePO.empstartDate.clear()
        employeePO.empemail.clear()
        employeePO.empFirstName.sendKeys(firstname)
        employeePO.empLastName.sendKeys(lastname)
        employeePO.empstartDate.sendKeys(startdate)
        employeePO.empemail.sendKeys(email)
        employeePO.updateEmpButton.click()
        browser.switchTo().alert().then(
            function (alert) { alert.accept().then(callback); },
            function (err) {  callback() }
        );
    }

    function logoutApp(callback){
        //var applicationURL = "http://cafetownsend-angular-rails.herokuapp.com/login";
        loginPO.logoutbutton.getText().then(function(actualTxt){
            if (actualTxt == 'Logout'){
                loginPO.logoutbutton.click()
                browser.switchTo().alert().then(
                    function (alert) { alert.accept().then(callback); },
                    function (err) {  callback() }
                );
            }
        })
    }

    function editEmployee(firstname,lastname,callback){
        var fullemployeename = firstname+' '+lastname;
        employeePO.employeelist.getText().then(function(strcount){
            if(strcount.length > 1){
                for (var j = 0;j < strcount.length; j++){
                    if (fullemployeename == strcount[j]){
                        employeePO.employeelist.get(j).click();
                        employeePO.editButton.click().then(callback);
                        //var a = true;
                        break;
                    }
                }
                //if (a){
                //    callback();
                //}
            }
        })
    }

    function openEmployee(firstname,lastname,callback){
        var fullemployeename = firstname+' '+lastname;
        employeePO.employeelist.getText().then(function(strcount){
            if(strcount.length > 1){
                for (var j = 0;j < strcount.length; j++){
                    if (fullemployeename == strcount[j]){
                        browser.actions().doubleClick(employeePO.employeelist.get(j)).perform();
                        var a = true;
                        break;
                    }
                }
                if (a){
                    callback();
                }
            }
        })
    }

    function CheckEmployee(firstname,lastname,callback){
        var fullemployeename = firstname+' '+lastname;
        employeePO.employeelist.getText().then(function(strcount){
            if(strcount.length > 1){
                for (var j = 0;j < strcount.length; j++){
                    if (fullemployeename == strcount[j]){
                        var actualemployeename = strcount[j];
                        var a = true;
                        break;
                    }
                }
                if (a){
                   callback();
                }else{
                    expect(employeePO.employeelist.getText()).to.eventually.equal(fullemployeename,"Expected Employee:"+fullemployeename+" not displayed").and.notify(callback);
                }
            }
        })
    }

    function deleteEmployee(firstname,lastname,callback){
        var fullemployeename = firstname+' '+lastname;
        employeePO.employeelist.getText().then(function(strcount){
            if(strcount.length > 1){
                for (var j = 0;j < strcount.length; j++){
                    if (fullemployeename == strcount[j]){
                        employeePO.employeelist.get(j).click();
                        employeePO.deleteButton.click();
                        browser.switchTo().alert().accept();
                        var a = true;
                        break;
                    }
                }
                if (a){
                    callback();
                }
            }
        })
    }

    function checkUservalidation(username,password,callback) {
            expect(loginPO.invalidUserName.isDisplayed()).to.eventually.equal(true).and.notify(callback);
    }

    function checkMessage(callback) {
            expect(loginPO.invalidUserName.getText()).to.eventually.equal(loginPO.expErrorMsg).and.notify(callback);
    }

}