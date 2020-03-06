package pages.smartbear_pages;

import io.cucumber.datatable.DataTable;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.Arrays;
import java.util.List;

public class SBOrderPage {


    public SBOrderPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id="ctl00_MainContent_fmwOrder_ddlProduct")
    public WebElement productDropdown;

    @FindBy(id = "ctl00_MainContent_fmwOrder_txtQuantity")
    public WebElement quantity;

    @FindBy(id = "ctl00_MainContent_fmwOrder_txtName")
    public WebElement customerName;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox2")
    public WebElement streetInput;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox3")
    public WebElement cityInput;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox4")
    public WebElement stateInut;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox5")
    public WebElement zipInput;

    @FindBy(id = "ctl00_MainContent_fmwOrder_cardList_0")
    public WebElement visaCard;

    @FindBy(id = "ctl00_MainContent_fmwOrder_cardList_2")
    public WebElement AmericanExpress;

    @FindBy(id = "ctl00_MainContent_fmwOrder_cardList_1")
    public WebElement MasterCard;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox6")
    public WebElement cardNumber;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox1")
    public WebElement expireDate;

    @FindBy(id = "ctl00_MainContent_fmwOrder_InsertButton")
    public WebElement proccessButton;

    @FindBy(xpath = "//a[@href='Default.aspx']")
    public WebElement viewAllOrders;













}
