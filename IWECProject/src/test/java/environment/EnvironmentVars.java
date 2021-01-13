package environment;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.safari.SafariDriver;

public class EnvironmentVars {
	
	public static WebDriver driver;
	public static String webUrl = "http://automationpractice.com/index.php";
	public static int DRIVER_WAIT_SECONDS = 10;
	public static String browser = "chrome";
	
			
		protected static WebDriver setDriver() {
			
			if (browser.toLowerCase().contains("firefox")) {
				System.setProperty("webdriver.gecko.driver", ".//drivers//geckodriver.exe");
				driver=new FirefoxDriver();
				driver.get(webUrl);
			} else if (browser.toLowerCase().contains("ie")) {
				System.setProperty("webdriver.ie.driver",
						"D:\\drivers\\SeleniumIEDriverServer.exe");
				driver = new InternetExplorerDriver();
				driver.get(webUrl);
			} else if (browser.toLowerCase().contains("chrome")) {
				System.setProperty("webdriver.chrome.driver", ".//drivers//chromedriver.exe");
				ChromeOptions options = new ChromeOptions();
				options.addArguments("--disable-dev-shm-usage"); // overcome limited resource problems
				options.addArguments("--no-sandbox"); // Bypass OS security model
			    driver = new ChromeDriver(options);
			    driver.get(webUrl);
			    driver.manage().window().maximize();
			} else if (browser.toLowerCase().contains("safari")) {
				driver = new SafariDriver();
				driver.get(webUrl);
			} else {
				System.out
						.println("[INFO] YOUR BROWSER IS CURRENTLY NOT SUPPORTED!");
			}
			return driver;
		}
}
