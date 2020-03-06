Feature: Wikipedia Search Functionality


  Scenario : Wikipedia Search Functionality Title Verification

  When User types "Steve Jobs" in the wiki search box
  And User clicks wiki search button
  Then User sees "Steve Jobs" is in the wiki title




  Scenario: Wikipedia Search Functionality Header Verification


    When User types "Steve Jobs" in the wiki search box
    And User clicks wiki search button
    Then User sees "Steve Jobs" is in the main header

@wiki2
  Scenario Outline: Wikipedia Search Functionality Image Header Verification

    Given  User is on Wikipedia home page
    When User types "<searchValue>" in the wiki search box
    And User clicks wiki search button
    Then User sees "<expectedImageHeader>" is in the image header

  Examples:

      |searchValue       |expectedImageHeader       |
      |Steve Jobs        |Steve Jobs                |
      |Michael Jackson   |Michael Jackson           |
      |Donald Trump      |Donald Trump              |