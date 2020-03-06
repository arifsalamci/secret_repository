package runners;

import com.aventstack.extentreports.ExtentTest;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import io.cucumber.datatable.DataTable;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import utilities.ExtentReport;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = { "pretty", "json:target/cucumber-reports/Cucumber.json" },
        features = "src/test/resources/features/",
        glue = "step_definitions",
        dryRun = false,
        tags = "@wiki"

)

public class CukesRunner {

    @AfterClass
    public static void tearDown(){
        ExtentReport.endReport();
    }
}
