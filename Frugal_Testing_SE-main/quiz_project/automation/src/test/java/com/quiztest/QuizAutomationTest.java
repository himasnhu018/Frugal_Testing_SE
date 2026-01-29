package com.quiztest;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.io.File;
import java.nio.file.*;
import java.time.Duration;
import java.util.List;

public class QuizAutomationTest {

    static WebDriver driver;
    static Path screenshotDir;

    @BeforeAll
    public static void setup() throws Exception {
        // Setup Chrome WebDriver
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(6));
        driver.manage().window().maximize();

        // Create screenshot directory
        screenshotDir = Paths.get("automation/resources/screenshots");
        Files.createDirectories(screenshotDir);

        System.out.println("===========================================");
        System.out.println("Test Setup Complete");
        System.out.println("Screenshot directory: " + screenshotDir.toAbsolutePath());
        System.out.println("===========================================\n");
    }

    @AfterAll
    public static void teardown() {
        if (driver != null) {
            driver.quit();
        }
        System.out.println("\n===========================================");
        System.out.println("Test Complete!");
        System.out.println("Screenshots saved to: " + screenshotDir.toAbsolutePath());
        System.out.println("===========================================");
    }

    // Helper method to save screenshot with name
    public void saveScreenshot(String name) {
        try {
            File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            Path dest = screenshotDir.resolve(name);
            Files.copy(src.toPath(), dest, StandardCopyOption.REPLACE_EXISTING);
            System.out.println("✓ Screenshot saved: " + name);
        } catch (Exception e) {
            System.err.println("✗ Screenshot failed: " + e.getMessage());
        }
    }

    @Test
    @DisplayName("Full quiz flow automation")
    public void testQuizFullFlow() {
        System.out.println("\n--- Starting Quiz Automation Test ---\n");

        // 1) Open quiz URL
        String url = "http://localhost:8000/index.php";
        driver.get(url);
        System.out.println("1. Opening URL: " + driver.getCurrentUrl());
        System.out.println("   Page Title: " + driver.getTitle());
        saveScreenshot("01_landing.png");

        // 2) Start Quiz
        System.out.println("\n2. Clicking Start Button...");
        WebElement startBtn = driver.findElement(By.id("startBtn"));
        startBtn.click();

        // Wait for quiz element to appear
        WebElement qIndex = driver.findElement(By.id("qIndex"));
        saveScreenshot("02_after_start_q1.png");
        System.out.println("   Quiz started successfully!");

        // 3) Answer all questions
        int total = Integer.parseInt(driver.findElement(By.id("qTotal")).getText());
        System.out.println("\n3. Answering Questions...");
        System.out.println("   Total questions: " + total);
        System.out.println("   " + "=".repeat(50));

        for (int i = 1; i <= total; i++) {
            // Wait for question to load
            try {
                Thread.sleep(700);
            } catch (InterruptedException ignored) {}

            // Get question text
            WebElement qText = driver.findElement(By.id("questionText"));
            System.out.println("\n   Question " + i + "/" + total + ":");
            System.out.println("   " + qText.getText());

            // Get all options
            List<WebElement> options = driver.findElements(By.cssSelector("#optionsList li"));
            System.out.println("   Available options: " + options.size());

            // Select an option (pick index 2 or last available)
            int pickIndex = Math.min(2, options.size() - 1);
            WebElement pick = options.get(pickIndex);
            String selectedText = pick.getText();
            System.out.println("   ➤ Selecting option " + (pickIndex + 1) + ": " + selectedText);
            pick.click();

            saveScreenshot(String.format("03_q%d_selected.png", i));

            // Click Next or Submit
            if (i < total) {
                WebElement next = driver.findElement(By.id("nextBtn"));
                next.click();
                System.out.println("   ✓ Clicked Next");
            } else {
                WebElement submit = driver.findElement(By.id("submitBtn"));
                submit.click();
                System.out.println("   ✓ Clicked Submit");
            }
        }

        // 4) Wait for results and capture
        try {
            Thread.sleep(800);
        } catch (InterruptedException ignored) {}

        saveScreenshot("04_results.png");

        // 5) Validate and display results
        System.out.println("\n4. Validating Results...");
        System.out.println("   " + "=".repeat(50));

        WebElement totalEl = driver.findElement(By.id("resTotal"));
        WebElement correctEl = driver.findElement(By.id("resCorrect"));
        WebElement scoreEl = driver.findElement(By.id("resScore"));

        Assertions.assertNotNull(totalEl, "Total questions element should exist");
        Assertions.assertNotNull(correctEl, "Correct answers element should exist");
        Assertions.assertNotNull(scoreEl, "Score element should exist");

        String totalText = totalEl.getText();
        String correctText = correctEl.getText();
        String scoreText = scoreEl.getText();

        System.out.println("\n   📊 QUIZ RESULTS:");
        System.out.println("   ├─ Total Questions: " + totalText);
        System.out.println("   ├─ Correct Answers: " + correctText);
        System.out.println("   └─ Final Score: " + scoreText);
        System.out.println("\n   ✓ All result elements validated successfully!");

        System.out.println("\n--- Test Completed Successfully! ---\n");
    }
}