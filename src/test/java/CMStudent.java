import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import org.junit.Test;

import java.util.List;

public class CMStudent {


    @Test
    public void studentlist(){

        Response response = RestAssured.get("http://api.cybertektraining.com/student/all");
        System.out.println(response.getStatusCode());
        System.out.println(response.asString());
    }

    @Test
    public void singleStudent() {
        Response response1 = RestAssured.get("http://api.cybertektraining.com/student/5720");
        System.out.println(response1.getStatusCode());
        System.out.println(response1.asString());

        JsonPath jp = response1.jsonPath();
       String name = jp.get("students.firstName");
        System.out.println(name);

        String street = jp.get("students.joinDate");
        System.out.println(street);


    }


    @Test
    public void instructorAll() {
        Response response = RestAssured.get("http://api.cybertektraining.com/teacher/all");
        System.out.println(response.statusCode());
        System.out.println(response.asString());

        JsonPath jp = response.jsonPath();
        List<String> subjects = jp.get("teachers.firstName");
        System.out.println(subjects.size());

        for (String subject: subjects){
            System.out.println(subject);
        }
    }
}
