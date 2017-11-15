# Test Automation set-up

Do the below set-up before starting up with the automation execution

## Prerequisites ##

 - [Node](http://www.nodejs.org) >= 6
 - NPM >= 3

## Getting started ##

git clone https://github.com/apolloraj/testrepository **YOUR FEATURE FOLDERNAME**
cd **YOUR FEATURE FOLDERNAME** or open a command prompt and navigate to the specify folder
npm install

If the webdriver-manager and protractor is not installed please follow the below step.

Please note if you access problem installing , please add a sudo to the below command.

npm install -g protractor

This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

Sometimes you might endup in a situation where the webdriver-manager is not installed properly if thats the case please follow the below steos

npm install -g webdriver-manager

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

webdriver-manager update

######### Execution

Refer helper.md for easy scripting and debugging.

webdriver-manager start
This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. Leave this server running throughout the tutorial. You can see information about the status of the server at http://localhost:4444/wd/hub.

Open a new command prompt and navigate to the Mobiquity from the location you have cloned

To start to the execution:

protractor cucumber.cong.js

This will open up a chrome browser and the execution will start automatically.

At the end of the execution you can find the reports generated in a separate browser
Or
You can refer the execution reports in html under report folder


