package step_definitions.etsy_steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.etsy_pages.Etsy_HomePage;
import utilities.Driver;

public class Etsy_StepDefs {

    Etsy_HomePage etsy_homePage = new Etsy_HomePage();


    @Given("User is on Etsy home page")
    public void user_is_on_Etsy_home_page() {
        Driver.getDriver().get("https://www.etsy.com");
    }

    @When("User searches for {string}")
    public void userSearchesFor(String searchValue) {
        etsy_homePage.searchBox.sendKeys(searchValue + Keys.ENTER);
    }


    @Then("User should see {string} in Etsy title")
    public void user_should_see_in_Etsy_title(String searchValue) {

        String actualTitle = Driver.getDriver().getTitle();
        String expectedTitle = searchValue;

        Assert.assertTrue("They are not matching. Verification Failed!!!",actualTitle.contains(searchValue));

    }



}
