package step_definitions.wikipedia_steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.wikipedia_pages.Wikipedia_LandingPage;
import pages.wikipedia_pages.Wikipedia_SearchPage;
import utilities.Driver;

public class Wikipedia_StepDefs {

    Wikipedia_SearchPage wikipedia_searchPage = new Wikipedia_SearchPage();
    Wikipedia_LandingPage wikipedia_landingPage = new Wikipedia_LandingPage();

    @Given("User is on Wikipedia home page")
    public void user_is_on_Wikipedia_home_page() {
        Driver.getDriver().get("https://www.wikipedia.com");
    }

    @When("User types {string} in the wiki search box")
    public void user_types_in_the_wiki_search_box(String searchValue) {
        wikipedia_searchPage.searchBox.sendKeys(searchValue);

    }

    @When("User clicks wiki search button")
    public void user_clicks_wiki_search_button() {

        wikipedia_searchPage.searchButton.click();

    }

    @Then("User sees {string} is in the image header")
    public void user_sees_is_in_the_image_header(String searchValue) {

       String actualImageHeader = wikipedia_landingPage.imageHeader.getText();
       Assert.assertTrue("They are not matching. Verification of image header FAILED!!", actualImageHeader.equals(searchValue));



    }


    @Then("User sees {string} is in the wiki title")
    public void userSeesIsInTheWikiTitle(String searchValue) {

        String actualTitle = Driver.getDriver().getTitle();
        Assert.assertTrue("They are not matching. Verification of title FAILED!!", actualTitle.contains(searchValue));
    }

    @Then("User sees {string} is in the main header")
    public void userSeesIsInTheMainHeader(String searchValue) {

        String actualHeader = wikipedia_landingPage.mainHeader.getText();
        Assert.assertTrue("They are not matching. Verification of Header FAILED!!", actualHeader.contains(searchValue));
    }
}
