package utilities;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class TestLogs {

    public static void main(String[] args) {

        ExtentHtmlReporter configs = new ExtentHtmlReporter("./extent/report.html");
        configs.config().setTheme(Theme.DARK);
        ExtentReports reports = new ExtentReports();
        reports.attachReporter(configs);
        System.out.println("start test");
        ExtentTest test = reports.createTest("Google search");
        test.pass("It is passing");
        test.fail("didnot match. Fail!");

        reports.flush();
        System.out.println("completed");
    }
}
