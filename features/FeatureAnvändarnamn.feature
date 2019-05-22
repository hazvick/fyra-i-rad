Feature: När man väljer användarnamn skall versaler, siffror och symboler vara tillgängligt.

Scenario: //Använda versaler i användarnamn
   Given I am on the site homepage
   And I click on "Spela" on the "Start" Page
   When I click on "Namn (2-10 tecken)" Tab
   And I type in "username"
   And I click on the "Börja spela" Tab
   Then the "användarnamn" on the "game" Site should contain the Letters "username"

Scenario: //Använda siffror i användarnamn
   Given I am on the site homepage
   And I click on "Spela" on the "Start" Page
   When I click on "Namn (2-10 tecken)" Tab
   And I type in "1"
   And I click on the "Börja spela" Tab
   Then the "användarnamn" on the "game" Site should contain the Numbers "1"

Scenario: //Använda symboler i användarnamn
   Given I am on the site homepage
   And I click on "Spela" on the "Start" Page
   When I click on "Namn (2-10 tecken)" Tab
   And I type in "!"
   And I click on the "Börja spela" Tab
   Then the "användarnamn" on the "game" Site should contain the Symbols "!"

Scenario: //Använda både versaler, siffror & symboler i användarnamn
   Given I am on the site homepage
   And I click on "Spela" on the "Start" Page
   When I click on "Namn (2-10 tecken)" Tab
   And I type in "username1!"
   And I click on the "Börja spela" Tab
   Then the "användarnamn" on the "game" Site should contain both the Letters, Numbers and Symbols "username1!"  

