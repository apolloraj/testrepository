#features/test.feature
Feature: Testing the Capetown application
    As a user i would like to login and create a new user
    I should check whether invalid user name message are displayed
    and successfully logout the application

    Scenario Outline: CapeTown login and logout check
        Given Launch the application "http://cafetownsend-angular-rails.herokuapp.com"
        Then login to the application with the <username> and <password>
        And check whether the <username> and <password> is valid
        And check the message displayed


    Examples:
        |username|password|
        |"Luke12"|"Skywalker"|
        |"Luke"|"Skywalker12"|


#    Scenario Outline: Add/Create a new employee to the cafe
#        Given Launch the application "http://cafetownsend-angular-rails.herokuapp.com"
#        Then login to the application with the <username> and <password>
#        Then I am in the homepage
#        Then Navigate to the screen "Create"
#        And Add the employee details with <empfirstname> <emplastname> <startdate> and <email>
#        And Check the employee details <empfirstname> <emplastname>
#        And logout of the application
#
#        Examples:
#            |username|password|empfirstname|emplastname|startdate|email|
#            |"Luke"|"Skywalker"|"Apolloraj"|"Alexraj"  |"2017-10-19"|"simonapollo85@yahoo.com"|
#
#    Scenario Outline: Modify the employee details in the cafe
#        Given Launch the application "http://cafetownsend-angular-rails.herokuapp.com"
#        Then login to the application with the <username> and <password>
#        Then I am in the homepage
#        Then Navigate to the screen "Modify"
#        Then Open the employee <empfirstname> <emplastname>
#        And Change the employee details with <changeempfirstname> <changeemplastname> <changestartdate> and <changeemail>
#        And Check the employee details <changeempfirstname> <changeemplastname>
#        And logout of the application
#
#        Examples:
#            |username|password|empfirstname|emplastname|startdate|email|changeempfirstname|changeemplastname|changestartdate|changeemail|
#            |"Luke"|"Skywalker"|"Apolloraj"|"Alexraj"  |"2017-09-19"|"alpho92@gmail.com"|"Amalraj"|"Alexraju"|"2017-10-19"  |"amal@gmail.com"|
#
#    Scenario Outline: Delete the employee details in the cafe
#        Given Launch the application "http://cafetownsend-angular-rails.herokuapp.com"
#        Then login to the application with the <username> and <password>
#        Then I am in the homepage
#        Then Navigate to the screen "Delete"
#        And  Check the employee details <empfirstname> <emplastname>
#        Then Delete the employee <empfirstname> <emplastname>
#        And logout of the application
#
#        Examples:
#            |username|password|empfirstname|emplastname|startdate|email|changeempfirstname|changeemplastname|changestartdate|changeemail|
#            |"Luke"|"Skywalker"|"Amalraj"|"Alexraju"  |"2017-09-19"|"alpho92@gmail.com"|"Amalraj"|"Alexraju"|"2017-10-19"  |"amal@gmail|