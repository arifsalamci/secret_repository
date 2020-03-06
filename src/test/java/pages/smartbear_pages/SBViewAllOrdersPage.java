package pages.smartbear_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class SBViewAllOrdersPage {

    public SBViewAllOrdersPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//div//table//tbody//tr[2]//td[2]")
    public WebElement firstCustomerNameInList;
}
