$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/1_AZMARIJA-1.feature");
formatter.feature({
  "name": "mareTest",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "mareTest",
  "description": "\t\tFeature: Login Functionality",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TEST_AZMARIJA-1"
    }
  ]
});
formatter.scenario({
  "name": "Sign in User with Valid Credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.SignIn.user_is_on_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate to SignIn Page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.SignIn.user_Navigate_to_SignIn_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid UserName and valid Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.SignIn.user_enters_valid_UserName_and_valid_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be successfully loged in and see MyAccount",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.SignIn.user_should_be_successfully_loged_in_and_see_MyAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "End test by closing the window",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.SignIn.end_test_by_closing_the_window()"
});
formatter.result({
  "status": "passed"
});
});