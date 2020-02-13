package step_definitions.vytrack_steps;

import com.sun.org.apache.xpath.internal.operations.String;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pages.vytrack_pages.LoginPage;
import utilities.Config;
import utilities.Driver;

import java.util.ArrayList;
import java.util.List;

public class CreateCalenderEventsPage_StepDefs {

    private LoginPage lp = new LoginPage();


    @Given("the user is signed in as a sale manager")
    public void the_user_is_signed_in_as_a_sale_manager() {
        Driver.getDriver().get(Config.getProperty("vytrackPassword"));


    }

    @When("the user is on the All Calendar Events page under the Activities tab")
    public void the_user_is_on_the_All_Calendar_Events_page_under_the_Activities_tab() {

    }

    @When("the user is taken to the Create Calendar Events page after clicking the Create Calendar Event button")
    public void the_user_is_taken_to_the_Create_Calendar_Events_page_after_clicking_the_Create_Calendar_Event_button() {

    }

    @When("the user should see their name as the default value of of the owner field")
    public void the_user_should_see_their_name_as_the_default_value_of_of_the_owner_field() {

    }

    @When("the user should see the title field to be empty by default")
    public void the_user_should_see_the_title_field_to_be_empty_by_default() {

    }

    @When("the user should see the start date field with the default value of the current date")
    public void the_user_should_see_the_start_date_field_with_the_default_value_of_the_current_date() {

    }

    @When("the user should see the start time field with the default value of the current time")
    public void the_user_should_see_the_start_time_field_with_the_default_value_of_the_current_time() {

    }

    @And("the user should see the start time field with the default value of the current tdslngs")
    public void theUserShouldSeeTheStartTimeFieldWithTheDefaultValueOfTheCurrentTdslngs() {

        List<String> list = new ArrayList<>();
        
    }
}
