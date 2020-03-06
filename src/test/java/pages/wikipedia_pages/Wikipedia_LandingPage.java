package pages.wikipedia_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class Wikipedia_LandingPage {

    public Wikipedia_LandingPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id= "firstHeading")
    public WebElement mainHeader;


    @FindBy(className = "fn")
    public WebElement imageHeader;
}
