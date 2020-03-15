package apiTests;

public class InstaTesting {

    public static void main(String[] args) {
        Instagram instagram = new Instagram();

        // Sign up page
        // On sign up page users MUST provide name, age, username etc
        InstagramUser user1 = new InstagramUser("arif", 45, "arif45");
        InstagramUser user2 = new InstagramUser("arif", 45, "arif45");
        instagram.addUser(user1);
        instagram.addUser(user2);
    }



}
