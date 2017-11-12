/**
 * Created by AlexrajA on 29-10-17.
 */
var loginPO = function () {

    this.loginusername = element(by.model('user.name'))
    this.loginpassword = element(by.model('user.password'))
    this.loginbutton = element(by.buttonText('Login'))
    this.logoutbutton = element(by.css('.main-button'));
    this.invalidUserName = element(by.css('.error-message'));

    //Static Text
    this.exppagetitle = 'CafeTownsend-AngularJS-Rails';
    this.expErrorMsg = 'Invalid username or password!';
};
module.exports = new loginPO();