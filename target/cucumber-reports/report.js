$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/smartbear_features/smartBearOrder.feature");
formatter.feature({
  "name": "Order functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Order functionality verification",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User selects \"\u003cproduct\u003e\"from product dropdown",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cquantity\u003e\" to quantity",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccustomername\u003e\" to costumer name",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cstreet\u003e\" to street",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccity\u003e\" to city",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cstate\u003e\" to state",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003czip\u003e\" to zip",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003ccardType\u003e\" as card type",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccardNumber\u003e\" to card number",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cexpirationDate\u003e\" to expiration date",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies \"\u003ccustomername\u003e\" is in the list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "quantity",
        "customername",
        "street",
        "city",
        "state",
        "zip",
        "cardType",
        "cardNumber",
        "expirationDate"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "1",
        "Glynda",
        "748 O\u0027Reilly Causeway",
        "Armandton",
        "Michigan",
        "06919",
        "visa",
        "6759-4689-4409-7640",
        "10/20"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "2",
        "Karoline",
        "87282 Thaddeus Fords",
        "Port Christiniaburgh",
        "Minnesota",
        "90997",
        "visa",
        "6767-3278-0268-5548",
        "10/20"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "8",
        "Jorge",
        "7292 Walker Common",
        "North Jerome",
        "Oregon",
        "47350",
        "visa",
        "3529-9487-7890-7481",
        "10/20"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "4",
        "Stevie",
        "982 Ivory Ways",
        "Okunevamouth",
        "California",
        "62095",
        "visa",
        "6709245787454554",
        "10/20"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "2",
        "Kourtney",
        "079 Felecia Mountains",
        "East Casey",
        "North Dakota",
        "07325",
        "visa",
        "6759-5691-3468-9474",
        "10/20"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "9",
        "Virgil",
        "8963 Stracke Vista",
        "North Elene",
        "Texas",
        "11917",
        "visa",
        "3684-215067-4698",
        "10/20"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "2",
        "Aimee",
        "841 O\u0027Hara Square",
        "Lake Dania",
        "South Carolina",
        "66601",
        "visa",
        "3752-205645-67114",
        "10/20"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "1",
        "Kenny",
        "26101 Christin Junction",
        "Konopelskichester",
        "Connecticut",
        "12575",
        "visa",
        "6771-8919-8293-7670",
        "10/20"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page and fills out the form as followed from the table below:",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.userIsLoggedIntoSmartBearTesterAccountAndOnOrderPageAndFillsOutTheFormAsFollowedFromTheTableBelow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Order functionality verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.step({
  "name": "User selects \"ScreenSaver\"from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"1\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Glynda\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"748 O\u0027Reilly Causeway\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Armandton\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Michigan\" to state",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"06919\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"6759-4689-4409-7640\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/20\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Glynda\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page and fills out the form as followed from the table below:",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.userIsLoggedIntoSmartBearTesterAccountAndOnOrderPageAndFillsOutTheFormAsFollowedFromTheTableBelow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Order functionality verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.step({
  "name": "User selects \"MyMoney\"from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"2\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Karoline\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"87282 Thaddeus Fords\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Port Christiniaburgh\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Minnesota\" to state",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"90997\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"6767-3278-0268-5548\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/20\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Karoline\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page and fills out the form as followed from the table below:",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.userIsLoggedIntoSmartBearTesterAccountAndOnOrderPageAndFillsOutTheFormAsFollowedFromTheTableBelow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Order functionality verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.step({
  "name": "User selects \"ScreenSaver\"from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"8\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Jorge\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"7292 Walker Common\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"North Jerome\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Oregon\" to state",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"47350\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"3529-9487-7890-7481\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/20\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Jorge\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page and fills out the form as followed from the table below:",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.userIsLoggedIntoSmartBearTesterAccountAndOnOrderPageAndFillsOutTheFormAsFollowedFromTheTableBelow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Order functionality verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.step({
  "name": "User selects \"MyMoney\"from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"4\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Stevie\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"982 Ivory Ways\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Okunevamouth\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"California\" to state",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"62095\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"6709245787454554\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/20\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Stevie\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page and fills out the form as followed from the table below:",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.userIsLoggedIntoSmartBearTesterAccountAndOnOrderPageAndFillsOutTheFormAsFollowedFromTheTableBelow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Order functionality verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.step({
  "name": "User selects \"ScreenSaver\"from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"2\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Kourtney\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"079 Felecia Mountains\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"East Casey\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"North Dakota\" to state",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"07325\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"6759-5691-3468-9474\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/20\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Kourtney\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page and fills out the form as followed from the table below:",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.userIsLoggedIntoSmartBearTesterAccountAndOnOrderPageAndFillsOutTheFormAsFollowedFromTheTableBelow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Order functionality verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.step({
  "name": "User selects \"MyMoney\"from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"9\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Virgil\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"8963 Stracke Vista\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"North Elene\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Texas\" to state",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"11917\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"3684-215067-4698\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/20\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Virgil\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page and fills out the form as followed from the table below:",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.userIsLoggedIntoSmartBearTesterAccountAndOnOrderPageAndFillsOutTheFormAsFollowedFromTheTableBelow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Order functionality verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.step({
  "name": "User selects \"ScreenSaver\"from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"2\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Aimee\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"841 O\u0027Hara Square\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Lake Dania\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"South Carolina\" to state",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"66601\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"3752-205645-67114\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/20\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Aimee\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page and fills out the form as followed from the table below:",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.userIsLoggedIntoSmartBearTesterAccountAndOnOrderPageAndFillsOutTheFormAsFollowedFromTheTableBelow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Order functionality verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartBear"
    }
  ]
});
formatter.step({
  "name": "User selects \"MyMoney\"from product dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"1\" to quantity",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Kenny\" to costumer name",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_costumer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"26101 Christin Junction\" to street",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_street(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Konopelskichester\" to city",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_city(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Connecticut\" to state",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"12575\" to zip",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"visa\" as card type",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_selects_as_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"6771-8919-8293-7670\" to card number",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_card_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/20\" to expiration date",
  "keyword": "And "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_enters_to_expiration_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Kenny\" is in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_StepDefs.user_verifies_is_in_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});