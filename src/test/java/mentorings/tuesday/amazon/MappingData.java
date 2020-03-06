package mentorings.tuesday.amazon;


import utilities.DBUtility;

import java.sql.*;
import java.util.*;


public class MappingData {

    public static void main(String[] args) throws SQLException {


        DBUtility.createConnection();

        List<Map<Object, Object>> mydata = DBUtility.executeQuery("select * from employees");

        for (int i =0; i < mydata.size(); i++) {
            if (mydata.get(i).get("EMPLOYEE_ID").toString().equals("175")) {
                if (mydata.get(i).get("SALARY").toString().equals("8800")) {
                    System.out.println("Passed");
                } else {
                    System.out.println("Failed");
                }

            }
        }
    }
}
