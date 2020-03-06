Feature: Etsy search fuctionality
  CBT-25 Agile story: can be placed here.

  Background:
    Given User is on Etsy home page

  @etsy
  Scenario: Etsy search title verification

     When User searches for "wooden spoon"
     Then User should see "Wooden spoon" in Etsy title


  @etsy2
  Scenario: Etsy search title verification

    When User searches for "custom wooden spoon"
    Then User should see "Custom wooden spoon" in Etsy title