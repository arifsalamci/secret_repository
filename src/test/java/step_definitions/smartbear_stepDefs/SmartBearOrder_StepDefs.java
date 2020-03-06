package step_definitions.smartbear_stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.smartbear_pages.SBLandingPage;
import pages.smartbear_pages.SBLoginPage;
import pages.smartbear_pages.SBOrderPage;
import pages.smartbear_pages.SBViewAllOrdersPage;
import utilities.Driver;

public class SmartBearOrder_StepDefs {

    SBLoginPage sbLoginPage = new SBLoginPage();
    SBLandingPage sbLandingPage = new SBLandingPage();
    SBOrderPage sbOrderPage = new SBOrderPage();
    SBViewAllOrdersPage sbViewAllOrdersPage = new SBViewAllOrdersPage();

    @Given("User is logged into SmartBear Tester account and on Order page and fills out the form as followed from the table below:")
    public void userIsLoggedIntoSmartBearTesterAccountAndOnOrderPageAndFillsOutTheFormAsFollowedFromTheTableBelow() {
        Driver.getDriver().get("http://secure.smartbearsoftware.com/samples/TestComplete12/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete12%2fWebOrders%2fDefault.aspx");
        sbLoginPage.usernameInput.sendKeys("Tester");
        sbLoginPage.passwordInput.sendKeys("test");
        sbLoginPage.loginButton.click();
        sbLandingPage.orderModule.click();
    }

    @When("User selects {string}from product dropdown")
    public void user_selects_from_product_dropdown(String searchValue) {

        Select select = new Select(sbOrderPage.productDropdown);
        select.selectByValue(searchValue);


    }

    @When("User enters {string} to quantity")
    public void user_enters_to_quantity(String string) {
        sbOrderPage.quantity.clear();
        sbOrderPage.quantity.sendKeys(string);
    }

    @When("User enters {string} to costumer name")
    public void user_enters_to_costumer_name(String string) {
       sbOrderPage.customerName.sendKeys(string);
    }

    @When("User enters {string} to street")
    public void user_enters_to_street(String string) {
       sbOrderPage.streetInput.sendKeys(string);
    }

    @When("User enters {string} to city")
    public void user_enters_to_city(String string) {
        sbOrderPage.cityInput.sendKeys(string);
    }

    @When("User enters {string} to state")
    public void user_enters_to_state(String string) {
        sbOrderPage.stateInut.sendKeys(string);
    }

    @When("User enters {string} to zip")
    public void user_enters_to_zip(String string) {
       sbOrderPage.zipInput.sendKeys(string);
    }

    @When("User selects {string} as card type")
    public void user_selects_as_card_type(String string) {


        switch (string) {
            case "visa":
                sbOrderPage.visaCard.click();
                break;
            case "masterCard":
                sbOrderPage.MasterCard.click();
                break;
            case "americanExpress":
                sbOrderPage.AmericanExpress.click();
                break;
        }
    }

    @When("User enters {string} to card number")
    public void user_enters_to_card_number(String string) {
       sbOrderPage.cardNumber.sendKeys(string.replace("-", ""));
    }

    @When("User enters {string} to expiration date")
    public void user_enters_to_expiration_date(String string) {
       sbOrderPage.expireDate.sendKeys(string);
    }

    @Then("User clicks process button")
    public void user_clicks_process_button() {
        sbOrderPage.proccessButton.click();




    }



    @Then("User verifies {string} is in the list")
    public void user_verifies_is_in_the_list(String string) {



        sbOrderPage.viewAllOrders.click();


        String actualCustomerName = sbViewAllOrdersPage.firstCustomerNameInList.getText();
        System.out.println(actualCustomerName);

        Assert.assertTrue("They are not matching, verification Failed!!",actualCustomerName.equals(string));

    }


}
