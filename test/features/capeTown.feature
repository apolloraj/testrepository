#features/test.feature
Feature: Testing the Capetown application
    As a user i would like to login and create a new user
    I should be able edit the user also
    and successfully logout the application

    Scenario Outline: CapeTown login and logout check
        Given Launch the application "http://cafetownsend-angular-rails.herokuapp.com"
        Then login to the application with the <username> and <password>
        Then I am in the homepage
        And logout of the application

    Examples:
        |username|password|
        |"Luke"|"Skywalker"|

    Scenario Outline: CapeTown invalid username and password check
        Given Launch the application "http://cafetownsend-angular-rails.herokuapp.com"
        Then login to the application with the <username> and <password>
        And check whether the <username> and <password> is valid
        And check the message displayed


        Examples:
            |username|password|
            |"Luke12"|"Skywalker"|
            |"Luke"|"Skywalker12"|

    Scenario Outline: Add/Create a new employee to the cafe
        Given Launch the application "http://cafetownsend-angular-rails.herokuapp.com"
        Then login to the application with the <username> and <password>
        Then I am in the homepage
        Then Navigate to the screen "Create"
        And Add the employee details with <empfirstname> <emplastname> <startdate> and <email>
        And Check the employee details if exist <empfirstname> <emplastname> <mode>
        And logout of the application

        Examples:
            |username|password|empfirstname|emplastname|startdate|email|mode|
            |"Luke"|"Skywalker"|"Apolloraj"|"Alexraj"  |"2017-10-19"|"simonapollo85@yahoo.com"|"Add"|
            |"Luke"|"Skywalker"|"Amalraj"|"Alexraj"  |"2017-11-16"|"amal85@yahoo.com"|"Add"         |
            |"Luke"|"Skywalker"|"Suni"|"Jose"  |"2017-10-03"|"suni92@yahoo.com"|"Add"               |


    Scenario Outline: Modify the employee details in the cafe
        Given Launch the application "http://cafetownsend-angular-rails.herokuapp.com"
        Then login to the application with the <username> and <password>
        Then I am in the homepage
        Then Navigate to the screen "Modify"
        Then Open the employee <empfirstname> <emplastname>
        And Change the employee details with <changeempfirstname> <changeemplastname> <changestartdate> and <changeemail>
        And Check the employee details if exist <changeempfirstname> <changeemplastname> <mode>
        And logout of the application

        Examples:
            |username|password|empfirstname|emplastname|changeempfirstname|changeemplastname|changestartdate|changeemail|mode|
            |"Luke"|"Skywalker"|"Apolloraj"|"Alexraj"  |"Amalraj"|"Alexraju"|"2017-10-19"  |"amal@gmail.com"|"Edit"|
#
    Scenario Outline: Delete the employee details in the employee list
        Given Launch the application "http://cafetownsend-angular-rails.herokuapp.com"
        Then login to the application with the <username> and <password>
        Then I am in the homepage
        Then Navigate to the screen "Delete"
        And  Select the employee details <empfirstname> <emplastname>
        Then Delete the employee <empfirstname> <emplastname>
        And logout of the application

        Examples:
            |username|password|empfirstname|emplastname|
            |"Luke"|"Skywalker"|"Amalraj"|"Alexraju"|
            |"Luke"|"Skywalker"|"Amalraj"|"Alexrajuu"|

    Scenario Outline: Delete the employee details after opening the employee
        Given Launch the application "http://cafetownsend-angular-rails.herokuapp.com"
        Then login to the application with the <username> and <password>
        Then I am in the homepage
        Then Navigate to the screen "Modify"
        Then Open the employee <empfirstname> <emplastname>
        Then Delete the employee after selecting <empfirstname> <emplastname>
        And Check the employee details if exist <empfirstname> <emplastname> <mode>
        And logout of the application

        Examples:
            |username|password|empfirstname|emplastname|mode|
            |"Luke"|"Skywalker"|"Suni"|"Jose"|"Delete"        |