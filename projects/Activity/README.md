### How to install playwright
- Prerequisites
Make sure you have the following installed on your machine:

Node.js (v12 or higher)
npm (comes with Node.js) or yarn
To check if Node.js and npm are installed, run the following commands:
```Npm --version```
```Node --version```

- If you get version no need to install node package otherwise you have to install NPM package
Manager.

- There are two ways to install playwright on our system

1. install using command(terminal)

2. Using Visual studio code extension

- Create a projects folder under it create a folder playwright as below.
E:/projects/playwright

- Open Visual studio code -> File menu -> Open Folder-> select folder playwright from the explorer
Or drag and drop the folder into Visual Studio editor.

- Then playwright install as below

 ```npm init playwright@latest```

- Do you want to install typescript or Javascript ?-> select javascript with arrow keys
- Where to put your end-to-end tests?- tests
- Add a github action work flow? Select true
- It creates .yml file which consist of github related command to push to code to github account.
- You can see the several commands
``` npx playwright test```

- To run all the tests in your directory
``` npx playwright test --project=chromium```
Run tests on the chromium browser

- If you want to run specific test use the following command
```npx playwright test example```

- To run the tests in debug mode use the following command
```npx playwright test --debug```

- To generate the code for the tests use the following command
->npx playwright codegen https://trytestingthis.netlify.app/

After installation you find in left side of visual studio editor the following folders
* Package.json- node project management file
* Playwright.config.js-configuration file
* Tests folder-basic example test
* -.gitignore- to be used during git commit and push
* Playwright.yml-to be used during ci cd pipeline
- To verify the version of playwright use the below command
```npm playwright -v```

- If you want to know help commands us the following command
```npx playwright -g``` 

### How to Run the Scripts
```cd \projects\Activity```
-> Headless
```npx playwright test activity.spec.js```
* "The test data must be located in the test.json file."

-> Headed 
```npx playwright test activity.spec.js --headed```

### To see the reports

* Run the below command to view the report in the browser  

``` npx playwright show-report``