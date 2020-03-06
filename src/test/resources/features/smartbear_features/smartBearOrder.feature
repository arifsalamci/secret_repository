@smartBear
Feature: Order functionality

  Background:
    Given User is logged into SmartBear Tester account and on Order page and fills out the form as followed from the table below:


  Scenario Outline: Order functionality verification




    When User selects "<product>"from product dropdown
    And User enters "<quantity>" to quantity
    And User enters "<customername>" to costumer name
    And User enters "<street>" to street
    And User enters "<city>" to city
    And User enters "<state>" to state
    And User enters "<zip>" to zip
    And User selects "<cardType>" as card type
    And User enters "<cardNumber>" to card number
    And User enters "<expirationDate>" to expiration date
    Then User clicks process button
    Then User verifies "<customername>" is in the list

    Examples:


      | product     | quantity | customername | street                  | city                 | state          | zip   | cardType | cardNumber          | expirationDate |
      | ScreenSaver | 1        | Glynda       | 748 O'Reilly Causeway   | Armandton            | Michigan       | 06919 | visa     | 6759-4689-4409-7640 | 10/20          |
      | MyMoney     | 2        | Karoline     | 87282 Thaddeus Fords    | Port Christiniaburgh | Minnesota      | 90997 | visa     | 6767-3278-0268-5548 | 10/20          |
      | ScreenSaver | 8        | Jorge        | 7292 Walker Common      | North Jerome         | Oregon         | 47350 | visa     | 3529-9487-7890-7481 | 10/20          |
      | MyMoney     | 4        | Stevie       | 982 Ivory Ways          | Okunevamouth         | California     | 62095 | visa     | 6709245787454554    | 10/20          |
      | ScreenSaver | 2       | Kourtney     | 079 Felecia Mountains   | East Casey           | North Dakota   | 07325 | visa     | 6759-5691-3468-9474 | 10/20          |
      | MyMoney     | 9        | Virgil       | 8963 Stracke Vista      | North Elene          | Texas          | 11917 | visa     | 3684-215067-4698    | 10/20          |
      | ScreenSaver | 2        | Aimee        | 841 O'Hara Square       | Lake Dania           | South Carolina | 66601 | visa     | 3752-205645-67114   | 10/20          |
      | MyMoney     | 1        | Kenny        | 26101 Christin Junction | Konopelskichester    | Connecticut    | 12575 | visa     | 6771-8919-8293-7670 | 10/20          |