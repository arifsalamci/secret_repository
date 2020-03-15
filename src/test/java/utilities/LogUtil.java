package utilities;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

public class LogUtil {
    private static Logger logger = LogManager.getLogger(Log.class);


    public static void start(){

    }

    public static void main(String[] args) {
        ArrayList list = new ArrayList<>();
        list.add("dldhf");
        list.add(54);
        System.out.println(list);
        throw new RuntimeException("please");
    }
}
