package utilities;

import io.github.bonigarcia.wdm.WebDriverManager;

import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;

import java.util.concurrent.TimeUnit;

public class Driver {

    private static WebDriver driver;

    private Driver() {

    }

    public static final String USERNAME = "arifsalamci";
    public static final String ACCESS_KEY = "f8a724cd-e60d-45f2-99b8-130cb2eb40da";
    public static final String URL = "http://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:80/wd/hub";

    public static WebDriver getDriver() {

        if (driver == null) {

            switch (Config.getProperty("browser")) {
                case "chrome":
                    WebDriverManager.chromedriver().setup();
                    driver = new ChromeDriver();
                    break;
                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    driver = new FirefoxDriver();
                    break;
                case "safari":
                    if (System.getProperty("os.name").toLowerCase().contains("windows")) {
                        throw new WebDriverException("Windows OS does not support safari");
                    }
                    WebDriverManager.getInstance(SafariDriver.class).setup();
                    driver = new SafariDriver();
                    break;
                case "saucelab":
                    DesiredCapabilities caps = DesiredCapabilities.chrome();
                    MutableCapabilities sauceOptions = new MutableCapabilities();

                    ChromeOptions browserOptions = new ChromeOptions();
                    browserOptions.setExperimentalOption("w3c", true);
                    browserOptions.setCapability("platformName", "Windows 10");
                    browserOptions.setCapability("browserVersion", "latest");
                    browserOptions.setCapability("sauce:options", sauceOptions);

                    try{
                        driver = new RemoteWebDriver(new URL(URL), caps);
                    }catch (MalformedURLException e){
                        e.printStackTrace();
                    }


            }

            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            driver.manage().window().maximize();

        }

        return driver;

    }

    public static void quitDriver() {
        if (driver != null) {
            driver.quit();
            driver = null;
        }
    }

}
