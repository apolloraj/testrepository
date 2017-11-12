/**
 * Created by AlexrajA on 29-10-17.
 */

//var q = require('q');
//var webdriver = require('selenium-webdriver'),
//    until = webdriver.until;
//var waitForTime = 12000;

function generalfunctionsPO() {
    'use strict';

    //this.NodebitCardText = element(by.css('.rfs-paragraph.rfs-text'));

    return {
        waitForElementById: waitForElementById,
        waitForElementByClassName: waitForElementByClassName,
        waitForElementByCss: waitForElementByCss,
        waitForElementByXpath: waitForElementByXpath,
        waitForElementPresentByClassName: waitForElementPresentByClassName,
        waitForElementByName: waitForElementByName,
        getElementById: getElementById,
        getElementByClassName: getElementByClassName,
        getElementByXpath: getElementByXpath,
        getElementByCss: getElementByCss,
        getElementByName: getElementByName,
        getPageTitle: getPageTitle,
        //getElementByLinkText: getElementByLinkText,
        isElementPresentById: isElementPresentById,
        isElementPresentByClassName: isElementPresentByClassName,
        isElementPresentByName: isElementPresentByName,
        isDisplayedByClassName: isDisplayedByClassName,
        getActualText: getActualText,
        sleepForTimeInterval: sleepForTimeInterval
    };


    function getElementById(elementById) {
        return browser.driver.findElement(by.id('credit-card-link-label'));
    }

    function getActualText() {
        console.log(element(by.css('.rfs-paragraph.rfs-text')).getText());
        return element(by.css('.rfs-paragraph.rfs-text')).getText().t;
    }

    function getElementByClassName(cName) {
        return browser.driver.findElement(by.className(cName));
    }

    function getElementByLinkText(cName) {
        return browser.driver.findElement(by.linkText(cName));
    }

    function getElementByXpath(xpathValue) {
        return browser.driver.findElement(by.xpath(xpathValue));
    }

    function getElementByCss(css) {
        return browser.driver.findElement(by.css(css));
    }

    function getElementByName(name) {
        return browser.driver.findElement(by.name(name));
    }

    function isElementPresentById(elementId) {
        var e = browser.driver.findElements(by.id(cName));
        return e.length == 0 ? false : true;
    }

    function isElementPresentByName(name) {
        var e = browser.driver.findElements(by.name(cName));
        return e.length == 0 ? false : true;
    }

    function isElementPresentByCss(css) {
        var e = browser.driver.findElements(by.css(css));
        return e.length == 0 ? false : true;
    }

    function isElementPresentByClassName(cName) {
        var e = browser.driver.findElements(by.className(cName));
        return e.length == 0 ? false : true;
    }

    function isDisplayedByClassName(cName) {
        var el = getElementByClassName(cName);
        return el.isDisplayed();
    }

    function isDisplayedByXpath(xpath) {
        var el = getElementByClassName(xpath);
        return el.isDisplayed();
    }

    function waitForElementById(elementId) {
        browser.wait(function() {
            return isElementPresentById(elementId);
        }, waitForTime);
    }

    function waitForElementByClassName(cName) {
        browser.wait(function() {
            return isDisplayedByClassName(cName);
        }, waitForTime);
    }

    function waitForElementPresentByClassName(cName) {
        browser.wait(function() {
            return isElementPresentByClassName(cName);
        }, waitForTime);
    }

    function waitForElementByXpath(xpath) {
        browser.wait(function() {
            return isDisplayedByXpath(xpath);
        }, waitForTime);
    }

    function waitForElementByCss(css) {
        browser.wait(function() {
            return isElementPresentByCss(css);
        }, waitForTime);
    }

    function waitForElementByName(name) {
        browser.wait(function() {
            return isElementPresentByName(name);
        }, waitForTime);
    }

    function getPageTitle() {
        return browser.getTitle();
    }

    function sleepForTimeInterval(timeInSeconds) {
        browser.sleep(timeInSeconds);
    }

}

module.exports = generalfunctionsPO();
