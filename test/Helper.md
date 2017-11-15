######## Elementor - Steps to identify elements from application

Elementor lets you test Protractor selectors from your browser and IDE. You can enter a protractor locator or expression and elementor will test it against a live protractor instance.By doing this protractor syntax can be checked and object identification check can be dyanmically done with the application instead running through the code from IDE. Follow the steps provided in the page below,.

How to Get elementor:

Elementor can be installed directly from the NPM,
npm install elementor -g

How to use and test it:

Check the below video and the webpage link which clearly explains the way the elementor can be used.

Webpage:

https://github.com/andresdominguez/elementor

Video Link:

https://www.youtube.com/watch?v=kC0JYp79tdo

########## xPath Helper - Plugin to find and execute xpath
Extract, edit, and evaluate XPath queries with ease.
XPath Helper makes it easy to extract, edit, and evaluate XPath queries on any webpage.

IMPORTANT: After installing this extension, you must reload any existing tabs or restart Chrome for the extension to work.

Instructions:

1. Open a new tab and navigate to any webpage.
2. Hit Ctrl-Shift-X (or Command-Shift-X on OS X), or click the XPath Helper button in the toolbar, to open the XPath Helper console.
3. Hold down Shift as you mouse over elements on the page. The query box will continuously update to show the XPath query for the element below the mouse pointer, and the results box will show the results for the current query.
4. If desired, edit the XPath query directly in the console. The results box will immediately reflect your changes.
5. Repeat step (2) to close the console.

If the console gets in your way, hold down Shift and then move your mouse over it; it will move to the opposite side of the page.

One word of caution: When rendering HTML tables, Chrome inserts artificial <tbody> tags into the DOM, which will consequently show up in queries extracted by this extension.


####### Debugging mode in Webstorm API for protractor

Step-by-step guide

1.In the WebStorm: Click on "Edit configurations" - the dropdown to the left of the "Run" button (green arrow like a "play" button)

2.Click on the "Add button" (green +) to add a new Node configuration. Select "Node.js"

3.Fill the params:
a.Name: Provide a name to the config file
b.Node interpreter: Full path to Node.js (from step 1)
c.Working directory: home directory for the protractor tests.
d.Javascript file: Full path to node_modules/protractor/lib/cli.js. Please ensure we are using the right cli.js available in the Lib folder
e.Application parameters: Full path to protractor-conf.js

4.To run the test in debug mode click on the "Debug" buttons on the top of IDE with the config name set for degugging in step 4

5. During run-time , the value can be verified in the debug console,


