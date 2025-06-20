
public class Logger {

    
    private static volatile Logger instance;

  
    private Logger() {
        System.out.println("Logger Initialized!");
    }

   
    public static Logger getInstance() {
        if (instance == null) {
            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

   
    public void log(String message) {
        System.out.println("Log: " + message);
    }



    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("First log");

        Logger logger2 = Logger.getInstance();
        logger2.log("Second log");

        if (logger1 == logger2) {
            System.out.println("Both are same,They are Singleton");
        }
    }
}